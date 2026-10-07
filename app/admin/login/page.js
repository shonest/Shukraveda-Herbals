import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import LoginForm from '@/components/admin/LoginForm';

export const metadata = { title: 'Admin Login', robots: { index: false, follow: false } };

export default async function LoginPage() {
  if (await getSession()) redirect('/admin');
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-center text-2xl font-semibold text-forest-800">Shukraveda Herbals</h1>
        <p className="mt-1 text-center text-sm text-slate-500">Admin panel sign in</p>
        <LoginForm />
      </div>
    </main>
  );
}
