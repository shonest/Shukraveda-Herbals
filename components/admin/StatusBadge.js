import { statusMeta } from '@/lib/leads';

export default function StatusBadge({ status }) {
  const m = statusMeta(status);
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${m.tone}`}>{m.label}</span>;
}
