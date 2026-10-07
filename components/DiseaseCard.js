import Image from 'next/image';
import { ChevronRight } from './Icons';

const imageMap = {
  kidney: '/images/kidney-disorder.png',
  skin: '/images/skin-disorder.png',
  sexual: '/images/sexual-disorder.png',
  fertility: '/images/male-infertility.png'
};

export default function DiseaseCard({ id, type, title, text }) {
  return (
    <article id={id} className="group relative h-full scroll-mt-4 overflow-hidden rounded-2xl border border-forest-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:border-forest-300 hover:shadow-soft focus-within:-translate-y-2 focus-within:border-forest-300">
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-forest-500 to-gold transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100" />
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-forest-50 transition-transform duration-500 group-hover:scale-[2.2] group-focus-within:scale-[2.2]" />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-4 h-32 w-32 sm:h-36 sm:w-36 transition duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_12px_14px_rgba(62,113,55,.35)] group-hover:animate-icon-float">
          <Image src={imageMap[type]} alt={title} fill sizes="(min-width:1800px) 200px, 144px" className="object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
        <a href={type === "kidney" ? "/kidney-disorder" : "#contact"} className="focus-ring mt-5 inline-flex items-center gap-1 rounded-md text-sm font-bold text-forest-700 transition-all group-hover:gap-3 group-hover:text-forest-900">
          {type === "kidney" ? "Learn more" : "Talk to us"} <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
