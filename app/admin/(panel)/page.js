import Link from 'next/link';
import { readCollection } from '@/lib/db';
import { LEAD_STATUSES } from '@/lib/leads';
import StatusBadge from '@/components/admin/StatusBadge';

export default async function Dashboard() {
  const leads = await readCollection('leads');
  const today = new Date().toISOString().slice(0, 10);
  const dueToday = leads.filter(l => l.followUpDate && l.followUpDate <= today && !['converted', 'closed', 'not_interested'].includes(l.status));

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Total leads" value={leads.length} href="/admin/leads" />
        <Stat label="Follow-ups due" value={dueToday.length} href="/admin/leads?due=1" accent />
        {LEAD_STATUSES.slice(0, 3).map(s => <Stat key={s.value} label={s.label} value={leads.filter(l => l.status === s.value).length} href={`/admin/leads?status=${s.value}`} />)}
        <Stat label="Converted" value={leads.filter(l => l.status === 'converted').length} href="/admin/leads?status=converted" />
      </div>

      <h2 className="mt-10 text-lg font-semibold">Latest leads</h2>
      <div className="mt-3 divide-y divide-slate-100 rounded-2xl bg-white shadow-card">
        {leads.slice(0, 5).map(l => (
          <Link key={l.id} href={`/admin/leads/${l.id}`} className="flex items-center justify-between gap-3 px-5 py-4 hover:bg-forest-50/50">
            <span className="min-w-0"><span className="block truncate font-semibold">{l.name}</span><span className="block truncate text-xs text-slate-500">{l.disease} · {l.mobile}</span></span>
            <StatusBadge status={l.status} />
          </Link>
        ))}
        {!leads.length && <p className="px-5 py-8 text-center text-sm text-slate-500">No leads yet. Submissions from the website contact form will appear here.</p>}
      </div>
    </div>
  );
}

function Stat({ label, value, href, accent }) {
  return (
    <Link href={href} className={`rounded-2xl p-5 shadow-card transition hover:-translate-y-0.5 ${accent ? 'bg-forest-800 text-white' : 'bg-white'}`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${accent ? 'text-gold' : 'text-slate-500'}`}>{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </Link>
  );
}
