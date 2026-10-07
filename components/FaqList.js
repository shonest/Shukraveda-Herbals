'use client';

import { useState } from 'react';
import { ChevronRight } from './Icons';

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-4">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={`rounded-2xl border bg-white shadow-card transition-all duration-300 ${isOpen ? 'border-forest-300 shadow-soft' : 'border-forest-100'}`}>
            <h3>
              <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} className="focus-ring flex w-full items-center gap-4 rounded-2xl p-5 text-left font-sans text-base font-bold text-forest-800">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-colors duration-300 ${isOpen ? 'bg-gold text-forest-950' : 'bg-forest-600 text-white'}`}>{i + 1}</span>
                <span className="flex-1">{q}</span>
                <ChevronRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-5 text-sm leading-6 text-slate-600 sm:pl-[4.25rem]">{a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
