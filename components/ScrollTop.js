'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from './Icons';

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`focus-ring fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-forest-700 ${show ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'}`} aria-label="Scroll to top">
      <ArrowUp />
    </button>
  );
}
