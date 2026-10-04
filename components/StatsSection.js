'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LeafLogo } from './Icons';

const stats = [
  { image: '/images/certified-new.png', end: 100, suffix: '+', label: 'Certified Ayurvedic Doctors' },
  { image: '/images/years-new.png', end: 80, suffix: '+', label: 'Years of Experience' },
  { image: '/images/patients-new.png', end: 5, suffix: ' Lakh', label: 'Patients Consulted' },
  { image: '/images/million-new.png', end: 100, suffix: ' Million', label: 'Hours of Consultation' },
];

function CountUp({ end, suffix, start, duration = 2000 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setValue(end); return; }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return <span aria-label={`${end}${suffix}`}>{value}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: .25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden py-12 sm:py-[54px] lg:py-[61px]">
      <div className="absolute inset-0 -z-20 [clip-path:inset(0)]" aria-hidden="true">
        <Image src="/images/green-bg.jpg" alt="" fill sizes="100vw" className="!fixed object-cover object-center" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/85 via-forest-900/80 to-forest-950/90" />

      <div className="container-shell">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-white backdrop-blur">
            <LeafLogo className="h-5 w-5 text-gold" />Trusted by patients
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Shukraveda Herbals Consultation <span className="relative inline-block text-gold">Advantages<svg className="absolute -bottom-2 left-0 h-2 w-full text-gold" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6C25 1 75 1 99 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">Every day, patients speak with our Ayurvedic experts to uncover the root causes of their health concerns and receive tailored treatment at their doorstep.</p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label} style={{ transitionDelay: `${i * 100}ms` }} className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <div className="group flex h-full flex-col items-center rounded-3xl border-2 border-white/40 bg-white/10 px-5 py-5 text-center shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-gold hover:bg-white/15 hover:shadow-soft">
                <div className="relative h-20 w-20 transition duration-500 group-hover:scale-110 sm:h-24 sm:w-24">
                  <Image src={s.image} alt="" fill sizes="96px" className="object-contain" />
                </div>
                <span className="my-3 h-0.5 w-10 rounded bg-gold transition-all duration-300 group-hover:w-16" />
                <p className="font-serif text-3xl font-bold tabular-nums text-white sm:text-4xl"><CountUp end={s.end} suffix={s.suffix} start={inView} /></p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[.14em] sm:text-sm text-white/90">{s.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
