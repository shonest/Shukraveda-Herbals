'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  ['/admin', 'Dashboard'],
  ['/admin/leads', 'Leads'],
  ['/admin/cms', 'Website Content']
];

export default function AdminNav() {
  const path = usePathname();
  return (
    <nav className="mt-4 flex gap-2 md:flex-col">
      {items.map(([href, label]) => {
        const active = href === '/admin' ? path === href : path.startsWith(href);
        return (
          <Link key={href} href={href} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${active ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10'}`}>{label}</Link>
        );
      })}
    </nav>
  );
}
