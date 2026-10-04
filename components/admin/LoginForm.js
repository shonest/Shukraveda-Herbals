'use client';

import { useActionState } from 'react';
import { loginAction } from '@/app/admin/actions';

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, null);
  const field = 'focus-ring mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm shadow-sm focus:border-forest-400';
  return (
    <form action={action} className="mt-8 space-y-5">
      <label className="block text-sm font-semibold">Email
        <input name="email" type="email" required autoComplete="username" className={field} />
      </label>
      <label className="block text-sm font-semibold">Password
        <input name="password" type="password" required autoComplete="current-password" className={field} />
      </label>
      {state?.error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}
      <button disabled={pending} className="focus-ring w-full rounded-xl bg-forest-800 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-forest-700 disabled:opacity-60">
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
