import Image from 'next/image';
import Reveal from './Reveal';

// Text block with an optional image. Without an image it renders as a full-width text block.
export default function ImageRow({ title, image, alt, reverse = false, children }) {
  const text = (
    <div>
      <h3 className="text-2xl font-semibold text-amber-700 sm:text-3xl">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">{children}</div>
    </div>
  );
  if (!image) return <Reveal><div className="border-l-2 border-forest-200 pl-5 sm:pl-8">{text}</div></Reveal>;
  return (
    <Reveal>
      <div className={`grid items-center gap-6 md:gap-10 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {text}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-forest-50 to-forest-100 shadow-card">
          <Image src={image} alt={alt} fill sizes="(min-width:1024px) 448px, 90vw" className="object-contain p-4" />
        </div>
      </div>
    </Reveal>
  );
}
