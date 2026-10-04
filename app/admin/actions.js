'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { checkCredentials, createSession, destroySession, requireAdmin } from '@/lib/auth';
import { updateCollection, newId } from '@/lib/db';
import { LEAD_STATUSES } from '@/lib/leads';
import { defaultConditions, defaultTestimonials } from '@/lib/content';

const str = (fd, k, max = 500) => String(fd.get(k) ?? '').trim().slice(0, max);

/* ---------- auth ---------- */
const attempts = new Map();

export async function loginAction(_prev, fd) {
  const key = 'login';
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter(t => now - t < 15 * 60_000);
  if (recent.length >= 10) return { error: 'Too many attempts. Try again in a few minutes.' };

  if (!checkCredentials(str(fd, 'email', 150), String(fd.get('password') ?? ''))) {
    attempts.set(key, [...recent, now]);
    return { error: 'Invalid email or password.' };
  }
  attempts.delete(key);
  await createSession(str(fd, 'email', 150).toLowerCase());
  redirect('/admin');
}

export async function logoutAction() {
  await destroySession();
  redirect('/admin/login');
}

/* ---------- leads ---------- */
export async function updateLeadAction(id, fd) {
  await requireAdmin();
  const status = str(fd, 'status', 30);
  if (!LEAD_STATUSES.some(s => s.value === status)) return;
  const followUpDate = str(fd, 'followUpDate', 10);
  const note = str(fd, 'note', 1000);
  await updateCollection('leads', leads => leads.map(l => {
    if (l.id !== id) return l;
    const notes = note ? [{ id: newId(), text: note, at: new Date().toISOString() }, ...(l.notes || [])] : l.notes || [];
    return { ...l, status, followUpDate, notes, updatedAt: new Date().toISOString() };
  }));
  revalidatePath('/admin', 'layout');
}

export async function quickStatusAction(id, status) {
  await requireAdmin();
  if (!LEAD_STATUSES.some(s => s.value === status)) return;
  await updateCollection('leads', leads => leads.map(l => l.id === id ? { ...l, status, updatedAt: new Date().toISOString() } : l));
  revalidatePath('/admin', 'layout');
}

export async function deleteLeadAction(id) {
  await requireAdmin();
  await updateCollection('leads', leads => leads.filter(l => l.id !== id));
  redirect('/admin/leads');
}

/* ---------- CMS ---------- */
export async function saveSettingsAction(fd) {
  await requireAdmin();
  await updateCollection('settings', () => ({
    email: str(fd, 'email', 150), phone: str(fd, 'phone', 40), address: str(fd, 'address', 250)
  }), {});
  revalidatePath('/');
}

export async function saveConditionAction(id, fd) {
  await requireAdmin();
  const title = str(fd, 'title', 80), text = str(fd, 'text', 300);
  if (!title) return;
  await updateCollection('conditions', list => list.map(c => c.id === id ? { ...c, title, text } : c), defaultConditions);
  revalidatePath('/');
}

export async function saveTestimonialAction(id, fd) {
  await requireAdmin();
  const data = { name: str(fd, 'name', 80), concern: str(fd, 'concern', 80), text: str(fd, 'text', 1500), published: fd.get('published') === 'on' };
  if (!data.name || !data.text) return;
  await updateCollection('testimonials', list => id === 'new'
    ? [...list, { id: newId(), ...data }]
    : list.map(t => t.id === id ? { ...t, ...data } : t), defaultTestimonials);
  revalidatePath('/');
  revalidatePath('/admin/cms');
}

export async function deleteTestimonialAction(id) {
  await requireAdmin();
  await updateCollection('testimonials', list => list.filter(t => t.id !== id), defaultTestimonials);
  revalidatePath('/');
  revalidatePath('/admin/cms');
}
