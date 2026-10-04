import Link from 'next/link';

// Compact page list: 1 … 4 5 [6] 7 8 … 20
function pageList(page, total) {
  const set = new Set([1, total, page - 1, page, page + 1]);
  const nums = [...set].filter(n => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  nums.forEach((n, i) => { if (i && n - nums[i - 1] > 1) out.push('…'); out.push(n); });
  return out;
}

export default function Pagination({ page, totalPages, total, pageSize, params, basePath }) {
  const href = p => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v));
    if (p > 1) qs.set('page', p);
    const s = qs.toString();
    return s ? `${basePath}?${s}` : basePath;
  };
  const from = total ? (page - 1) * pageSize + 1 : 0;
  const to = Math.min(page * pageSize, total);
  const btn = 'rounded-lg px-3 py-2 text-sm font-semibold';

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
      <p>Showing {from}–{to} of {total}</p>
      {totalPages > 1 && (
        <nav aria-label="Pagination" className="flex flex-wrap items-center gap-1">
          {page > 1 ? <Link href={href(page - 1)} className={`${btn} bg-white shadow-sm hover:bg-forest-50`}>Prev</Link> : <span className={`${btn} text-slate-300`}>Prev</span>}
          {pageList(page, totalPages).map((n, i) => n === '…'
            ? <span key={`e${i}`} className="px-2">…</span>
            : <Link key={n} href={href(n)} aria-current={n === page ? 'page' : undefined} className={`${btn} ${n === page ? 'bg-forest-800 text-white' : 'bg-white shadow-sm hover:bg-forest-50'}`}>{n}</Link>)}
          {page < totalPages ? <Link href={href(page + 1)} className={`${btn} bg-white shadow-sm hover:bg-forest-50`}>Next</Link> : <span className={`${btn} text-slate-300`}>Next</span>}
        </nav>
      )}
    </div>
  );
}
