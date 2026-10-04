import Link from 'next/link';
import { readCollection } from '@/lib/db';
import { LEAD_STATUSES } from '@/lib/leads';
import StatusSelect from '@/components/admin/StatusSelect';
import Pagination from '@/components/admin/Pagination';

const PAGE_SIZE = 10;
const OPEN = ['new', 'contacted', 'follow_up'];

const fmt = iso => new Date(iso).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

export default async function LeadsPage({ searchParams }) {
  const sp = await searchParams;
  const status = LEAD_STATUSES.some(s => s.value === sp.status) ? sp.status : '';
  const q = String(sp.q || '').trim().toLowerCase();
  const due = sp.due === '1';
  const today = new Date().toISOString().slice(0, 10);

  let leads = await readCollection('leads');
  if (status) leads = leads.filter(l => l.status === status);
  if (due) leads = leads.filter(l => l.followUpDate && l.followUpDate <= today && OPEN.includes(l.status));
  if (q) leads = leads.filter(l => [l.name, l.email, l.mobile, l.disease].some(v => v.toLowerCase().includes(q)));

  const totalPages = Math.max(1, Math.ceil(leads.length / PAGE_SIZE));
  const page = Math.min(Math.max(parseInt(sp.page) || 1, 1), totalPages);
  const rows = leads.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const params = { status, q: sp.q || '', due: due ? '1' : '' };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Leads <span className="text-base font-normal text-slate-500">({leads.length})</span></h1>

      <form className="mt-5 flex flex-wrap gap-3" action="/admin/leads">
        <input name="q" defaultValue={sp.q || ''} placeholder="Search name, email, mobile…" className="focus-ring min-w-0 flex-1 rounded-xl border border-forest-100 bg-white px-4 py-2.5 text-sm sm:max-w-xs" />
        <select name="status" defaultValue={status} className="focus-ring rounded-xl border border-forest-100 bg-white px-3 py-2.5 text-sm">
          <option value="">All statuses</option>
          {LEAD_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="due" value="1" defaultChecked={due} /> Follow-up due</label>
        <button className="focus-ring rounded-xl bg-forest-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-700">Filter</button>
        {(status || q || due) && <Link href="/admin/leads" className="self-center text-sm font-semibold text-forest-700">Clear</Link>}
      </form>

      <div className="mt-5 overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-forest-50 text-xs uppercase tracking-wider text-slate-600">
            <tr><th className="px-4 py-3">Lead</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Concern</th><th className="px-4 py-3">Received</th><th className="px-4 py-3">Follow-up</th><th className="px-4 py-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map(l => (
              <tr key={l.id} className="hover:bg-forest-50/40">
                <td className="px-4 py-3"><Link href={`/admin/leads/${l.id}`} className="font-semibold text-forest-800 hover:underline">{l.name}</Link></td>
                <td className="px-4 py-3"><span className="block">{l.mobile}</span><span className="block text-xs text-slate-500">{l.email}</span></td>
                <td className="px-4 py-3">{l.disease}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-600">{fmt(l.createdAt)}</td>
                <td className={`whitespace-nowrap px-4 py-3 ${l.followUpDate && l.followUpDate <= today && OPEN.includes(l.status) ? 'font-semibold text-red-600' : 'text-slate-600'}`}>{l.followUpDate || '—'}</td>
                <td className="px-4 py-3"><StatusSelect id={l.id} status={l.status} /></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="px-4 py-10 text-center text-slate-500">No leads found.</td></tr>}
          </tbody>
        </table>
      </div>

      <Pagination page={page} totalPages={totalPages} total={leads.length} pageSize={PAGE_SIZE} params={params} basePath="/admin/leads" />
    </div>
  );
}
