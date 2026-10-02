'use client';

import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from './Icons';

const diseases = [
  ['Kidney Disorder', '#kidney-disorder'],
  ['Skin Disorder', '#skin-disorder'],
  ['Sexual Disorder', '#sexual-disorder'],
  ['Male Infertility', '#male-infertility'],
];

const links = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Diseases', '#diseases', diseases],
  ['Our Patients', '#testimonials'],
  ['Contact Us', '#contact'],
];

const Chevron = ({ className = '' }) => (
  <svg className={`h-3.5 w-3.5 ${className}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 5 5 5-5" /></svg>
);

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const lastY = useRef(0);

  const navigating = useRef(false);
  const navTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (navigating.current) {
        setVisible(y < 40);
        clearTimeout(navTimer.current);
        navTimer.current = setTimeout(() => { navigating.current = false; }, 150);
      } else if (y < 40 || y < lastY.current) setVisible(true);
      else if (y > lastY.current) setVisible(false);
      lastY.current = y;
    };
    // Menu jumps: keep the header hidden while smooth-scrolling so the target section lands flush at the top.
    const onNavClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      navigating.current = true;
      clearTimeout(navTimer.current);
      navTimer.current = setTimeout(() => { navigating.current = false; }, 1500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onNavClick);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('click', onNavClick); clearTimeout(navTimer.current); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-forest-100 bg-white/95 backdrop-blur transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div lang="hi" className="flex h-[var(--strip-h)] items-center justify-center bg-forest-700 px-4 text-center text-xs font-semibold text-white sm:text-sm">
        <span className="truncate">🌿 शुद्ध आयुर्वेदिक उपचार • प्रमाणित वैद्यों से निःशुल्क परामर्श 🌿</span>
      </div>
      <div className="container-shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-lg text-forest-800" aria-label="Shukravedaherbals home">
          <div className="leading-none tracking-tight">
            <span className="text-xl font-light sm:text-2xl">Shukraveda</span><span className="text-xl font-bold sm:text-2xl">Herbals</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[.22em] text-forest-600">Natural wellness</span>
          </div>
        </a>

        <nav className="hidden xl:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-10 text-[1.0625rem] 2xl:gap-16 font-medium text-ink">
            {links.map(([label, href, sub]) => sub ? (
              <li key={href} className="group relative">
                <a className="nav-link focus-ring flex items-center gap-1 rounded-md py-2 transition hover:text-forest-600 group-hover:text-forest-600" href={href} aria-haspopup="true">
                  <span className="nav-label">{label}</span><Chevron className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full z-50 w-max min-w-[16rem] max-w-[calc(100vw-2rem)] translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-forest-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                    {sub.map(([l, h]) => (
                      <li key={h}>
                        <a href={h} className="focus-ring block whitespace-nowrap rounded-xl px-4 py-2 text-base font-medium text-ink transition-all duration-200 hover:translate-x-1 hover:bg-forest-50 hover:text-forest-700">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={href}><a className="nav-link focus-ring rounded-md py-2 transition hover:text-forest-600" href={href}><span className="nav-label">{label}</span></a></li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="focus-ring hidden rounded-xl bg-forest-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-card lg:inline-flex">Book Consultation</a>
        <button onClick={() => setMenuOpen(v => !v)} className="focus-ring rounded-lg border border-forest-200 p-2 text-forest-800 xl:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation">
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div className={`xl:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300 ${menuOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="container-shell border-t border-forest-100 py-4" aria-label="Mobile navigation">
          <ul className="grid gap-1">
            {links.map(([label, href, sub]) => sub ? (
              <li key={href}>
                <div className="flex items-center">
                  <a onClick={() => setMenuOpen(false)} className="block flex-1 rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-forest-50 hover:text-forest-700" href={href}>{label}</a>
                  <button onClick={() => setSubOpen(v => !v)} aria-expanded={subOpen} aria-label="Toggle diseases submenu" className="focus-ring rounded-lg p-3 text-forest-800">
                    <Chevron className={`transition-transform duration-300 ${subOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <ul className={`ml-4 grid gap-1 overflow-hidden border-l-2 border-forest-100 pl-2 transition-[max-height,opacity] duration-300 ${subOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {sub.map(([l, h]) => (
                    <li key={h}><a onClick={() => setMenuOpen(false)} tabIndex={subOpen ? 0 : -1} className="block rounded-xl px-3 py-2.5 text-sm text-ink/80 transition hover:bg-forest-50 hover:text-forest-700" href={h}>{l}</a></li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={href}><a onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-forest-50 hover:text-forest-700" href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
