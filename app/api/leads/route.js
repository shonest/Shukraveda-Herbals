import { NextResponse } from 'next/server';
import { updateCollection, newId } from '@/lib/db';
import { validateLead } from '@/lib/leads';

const hits = new Map(); // naive per-IP rate limit (resets on restart)

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const errors = validateLead(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const lead = {
    id: newId(),
    name: body.name.trim().slice(0, 100),
    email: body.email.trim().slice(0, 150),
    mobile: body.mobile.replace(/\s+/g, ''),
    disease: String(body.disease).slice(0, 100),
    message: body.message.trim().slice(0, 2000),
    status: 'new',
    followUpDate: '',
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  await updateCollection('leads', leads => [lead, ...leads]);
  return NextResponse.json({ ok: true });
}
