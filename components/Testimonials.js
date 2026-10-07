'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { LeafLogo, ChevronRight } from './Icons';



const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);

const QuoteMark = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 48 40" fill="currentColor" aria-hidden="true"><path d="M0 40V24C0 10 8 2 22 0v8C14 10 11 14 11 20h11v20H0Zm26 0V24C26 10 34 2 48 0v8c-8 2-11 6-11 12h11v20H26Z" /></svg>
);

export default function Testimonials({ items }) {
  const testimonials = items.map(t => ({ ...t, text: t.text.split(/\n\s*\n/).filter(Boolean) }));
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const go = (n) => setIndex((n + count) % count);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex(i => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [paused, count]);

  if (!count) return null;

  return (
    <section id="testimonials" className="section-pad relative isolate overflow-hidden bg-gradient-to-br from-cream via-white to-forest-50">

      <div className="container-shell grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-forest-700 shadow-sm">
            <LeafLogo className="h-5 w-5 text-forest-600" />Real stories. Real healing.
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Our Happy <span className="relative inline-block text-forest-700">Patients<svg className="absolute -bottom-2 left-0 h-2 w-full text-gold" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6C25 1 75 1 99 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span></h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-700">At Shukraveda Herbals, we embrace the philosophy of ‘Balance’, the harmony of body, mind and environment. Our commitment is to deliver comprehensive, personalized care to every patient with ‘sadbhaav’ (good intentions).</p>
          <div className="mt-8 hidden gap-4 lg:flex">
            <button onClick={() => go(index - 1)} aria-label="Previous testimonial" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-forest-600"><ChevronRight className="h-5 w-5 rotate-180" /></button>
            <button onClick={() => go(index + 1)} aria-label="Next testimonial" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-white shadow-card transition hover:-translate-y-0.5 hover:bg-forest-600"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <div className="min-w-0" role="region" aria-roledescription="carousel" aria-label="Patient testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <div className="flex transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <figure key={i} aria-hidden={i !== index} aria-label={`${i + 1} of ${count}`} className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-forest-800 to-forest-950 p-6 text-white sm:p-10">
                    <QuoteMark className="h-10 w-10 text-gold sm:h-12 sm:w-12" />
                    <blockquote className="mt-4 space-y-3 text-[15px] leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
                      {t.text.map((p, j) => <p key={j}>{p}</p>)}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4 border-t border-white/15 pt-5 sm:mt-8 sm:pt-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-sans text-base font-bold text-forest-950"><UserIcon className="h-6 w-6" /></span>
                      <span>
                        <span className="block font-sans text-lg font-bold">{t.name}</span>
                        <span className="block text-xs font-semibold uppercase tracking-[.18em] text-gold">{t.concern}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 lg:mt-6 lg:justify-end lg:gap-4">
              <button onClick={() => go(index - 1)} aria-label="Previous testimonial" className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800 text-white shadow-card transition hover:bg-forest-600 lg:hidden"><ChevronRight className="h-5 w-5 rotate-180" /></button>
              <div className="flex items-center gap-3 lg:gap-4">
              <span className="font-sans text-sm font-semibold tabular-nums text-forest-700">{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
              <span className="flex gap-2">
              {testimonials.map((x, i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Show testimonial ${i + 1}`} aria-current={i === index} className={`focus-ring h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-gold' : 'w-2.5 bg-forest-300 hover:bg-forest-500'}`} />
              ))}
              </span>
              </div>
              <button onClick={() => go(index + 1)} aria-label="Next testimonial" className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800 text-white shadow-card transition hover:bg-forest-600 lg:hidden"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
