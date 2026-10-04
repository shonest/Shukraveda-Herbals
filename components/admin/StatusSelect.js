'use client';

import { useTransition } from 'react';
import { LEAD_STATUSES, statusMeta } from '@/lib/leads';
import { quickStatusAction } from '@/app/admin/actions';

export default function StatusSelect({ id, status }) {
  const [pending, start] = useTransition();
  return (
    <select
      value={status}
      disabled={pending}
      aria-label="Lead status"
      onChange={e => start(() => quickStatusAction(id, e.target.value))}
      className={`focus-ring cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset disabled:opacity-50 ${statusMeta(status).tone}`}
    >
      {LEAD_STATUSES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
    </select>
  );
}
