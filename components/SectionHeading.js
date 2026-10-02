import { LeafLogo } from './Icons';

export default function SectionHeading({ eyebrow, title, highlight, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : ''}>
      <p className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-forest-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-forest-400 hover:shadow-card">
        <LeafLogo className="h-5 w-5 text-forest-600" />{eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title} <span className="relative inline-block text-forest-700">{highlight}<svg className="absolute -bottom-2 left-0 h-2 w-full text-gold" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6C25 1 75 1 99 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span>
      </h2>
      {text && <p className={`mt-4 text-base leading-7 text-slate-600 ${center ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{text}</p>}
    </div>
  );
}
