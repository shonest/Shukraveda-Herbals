import Link from 'next/link';

export default function Breadcrumb({ current }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-forest-100 bg-white">
      <ol className="container-shell flex items-center gap-2 py-3 text-xs text-slate-500">
        <li><Link href="/" className="hover:text-forest-700">Home</Link></li><li aria-hidden="true">/</li>
        <li><Link href="/#diseases" className="hover:text-forest-700">Diseases</Link></li><li aria-hidden="true">/</li>
        <li className="font-semibold text-forest-700" aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
