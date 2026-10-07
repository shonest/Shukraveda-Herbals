'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/hero-online.png',
    mobileImage: '/images/hero-online-mobile.png',
    alt: 'Ayurveda-inspired online wellness consultation with an experienced practitioner',
    title: 'Personalized Ayurvedic Wellness for Modern Life'
  },
  {
    image: '/images/hero-kidney-skin.png',
    mobileImage: '/images/hero-kidney-skin-mobile.png',
    alt: 'Ayurveda-inspired consultation for kidney and skin wellness',
    title: 'Focused Herbal Wellness for Kidney and Skin Concerns'
  },
  {
    image: '/images/hero-male-wellness.png',
    mobileImage: '/images/hero-male-wellness-mobile.png',
    alt: 'Private Ayurveda-inspired wellness consultation for male health',
    title: 'Private Support for Male Wellness and Fertility Concerns'
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative mt-[calc(var(--header-h)+var(--strip-h))] overflow-hidden bg-forest-950" aria-label="Shukraveda Herbals wellness highlights">
      <h1 className="sr-only">Shukraveda Herbals Ayurvedic Wellness and Herbal Care</h1>
      <div className="relative aspect-[4/5] w-full sm:aspect-[1920/700] sm:min-h-[360px] lg:min-h-0 lg:max-h-[78vh]">
        {slides.map((slide, i) => (
          <div key={slide.image} className={`absolute inset-0 transition-all duration-700 ease-out ${i === index ? 'scale-100 opacity-100' : 'scale-[1.015] opacity-0'}`} aria-hidden={i !== index}>
            <Image src={slide.mobileImage} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover object-center sm:hidden" />
            <Image src={slide.image} alt="" fill priority={i === 0} sizes="100vw" className="hidden object-cover object-center sm:block" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 sm:bottom-6 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button key={slide.title} onClick={() => setIndex(i)} className={`focus-ring h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60'}`} aria-label={`Show slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
