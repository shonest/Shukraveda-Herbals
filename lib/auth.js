import 'server-only';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE = 'sv_admin';
const MAX_AGE = 60 * 60 * 8; // 8 hours

const secret = () => {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 16) throw new Error('AUTH_SECRET (min 16 chars) is not set in .env.local');
  return s;
};

const sign = v => crypto.createHmac('sha256', secret()).update(v).digest('base64url');

const safeEqual = (a, b) => {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
};

export function checkCredentials(email, password) {
  const e = process.env.ADMIN_EMAIL, p = process.env.ADMIN_PASSWORD;
  if (!e || !p) throw new Error('ADMIN_EMAIL / ADMIN_PASSWORD are not set in .env.local');
  // Evaluate both so timing does not reveal which one was wrong.
  const okEmail = safeEqual(String(email).trim().toLowerCase(), e.trim().toLowerCase());
  const okPass = safeEqual(password, p);
  return okEmail && okPass;
}

export async function createSession(email) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + MAX_AGE * 1000 })).toString('base64url');
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: MAX_AGE
  });
}

export async function destroySession() {
  (await cookies()).delete(COOKIE);
}

export async function getSession() {
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return null;
  const [payload, sig] = raw.split('.');
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return data.exp > Date.now() ? data : null;
  } catch { return null; }
}

// Call at the top of every admin page and every server action.
export async function requireAdmin() {
  const s = await getSession();
  if (!s) redirect('/admin/login');
  return s;
}
