import Link from 'next/link';
import { notFound } from 'next/navigation';
import { readCollection } from '@/lib/db';
import { LEAD_STATUSES } from '@/lib/leads';
import { updateLeadAction, deleteLeadAction } from '../../../actions';
import StatusBadge from '@/components/admin/StatusBadge';
import ConfirmButton from '@/components/admin/ConfirmButton';

const fmt = iso => new Date(iso).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

export default async function LeadPage({ params }) {
  const { id } = await params;
  const lead = (await readCollection('leads')).find(l => l.id === id);
  if (!lead) notFound();

  const field = 'focus-ring mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-2.5 text-sm';

  return (
    <div className="max-w-4xl">
      <Link href="/admin/leads" className="text-sm font-semibold text-forest-700">← Back to leads</Link>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold">{lead.name}</h1>
        <StatusBadge status={lead.status} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-semibold">Enquiry</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Mobile"><a className="text-forest-700 hover:underline" href={`tel:+91${lead.mobile}`}>{lead.mobile}</a></Row>
            <Row label="Email"><a className="break-all text-forest-700 hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a></Row>
            <Row label="Concern">{lead.disease}</Row>
            <Row label="Received">{fmt(lead.createdAt)}</Row>
            <Row label="Message"><span className="whitespace-pre-wrap">{lead.message}</span></Row>
          </dl>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-semibold">Follow-up</h2>
          <form action={updateLeadAction.bind(null, lead.id)} className="mt-4 space-y-4">
            <label className="block text-sm font-semibold">Status
              <select name="status" defaultValue={lead.status} className={field}>
                {LEAD_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold">Next follow-up date
              <input type="date" name="followUpDate" defaultValue={lead.followUpDate} className={field} />
            </label>
            <label className="block text-sm font-semibold">Add note
              <textarea name="note" rows="3" maxLength="1000" placeholder="Call summary, next step…" className={field} />
            </label>
            <button className="focus-ring rounded-xl bg-forest-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-700">Save</button>
          </form>
        </section>
      </div>

      <section className="mt-6 rounded-2xl bg-white p-6 shadow-card">
        <h2 className="font-semibold">Notes</h2>
        <ul className="mt-4 space-y-3">
          {(lead.notes || []).map(n => (
            <li key={n.id} className="rounded-xl bg-forest-50/60 p-4 text-sm"><p className="whitespace-pre-wrap">{n.text}</p><p className="mt-2 text-xs text-slate-500">{fmt(n.at)}</p></li>
          ))}
          {!lead.notes?.length && <li className="text-sm text-slate-500">No notes yet.</li>}
        </ul>
      </section>

      <form action={deleteLeadAction.bind(null, lead.id)} className="mt-6">
        <ConfirmButton message="Delete this lead permanently?" className="text-sm font-semibold text-red-600 hover:underline">Delete lead</ConfirmButton>
      </form>
    </div>
  );
}

function Row({ label, children }) {
  return <div className="grid grid-cols-[90px_1fr] gap-2"><dt className="text-slate-500">{label}</dt><dd>{children}</dd></div>;
}
