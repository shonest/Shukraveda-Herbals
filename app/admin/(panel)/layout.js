import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { logoutAction } from '../actions';
import AdminNav from '@/components/admin/AdminNav';

export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }) {
  const session = await requireAdmin();
  return (
    <div className="min-h-screen bg-slate-50 text-ink md:flex">
      <aside className="border-b border-forest-100 bg-forest-900 p-4 text-white md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-b-0">
        <Link href="/admin" className="block font-serif text-lg font-semibold">Shukravedaherbals</Link>
        <p className="text-xs text-white/60">Admin panel</p>
        <AdminNav />
        <div className="mt-4 border-t border-white/10 pt-4 text-xs md:absolute md:inset-x-4 md:bottom-4 md:mt-0">
          <p className="truncate text-white/60">{session.email}</p>
          <div className="mt-2 flex gap-4">
            <Link href="/" target="_blank" className="font-semibold hover:text-gold">View site</Link>
            <form action={logoutAction}><button className="font-semibold hover:text-gold">Log out</button></form>
          </div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
