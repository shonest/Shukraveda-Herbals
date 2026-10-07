import Image from 'next/image';
import Link from 'next/link';

export default function DiseaseBanner({ title, text, image, alt, secondary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-950 via-forest-700 to-forest-500 bg-[length:200%_200%] text-white animate-gradient-shift motion-reduce:animate-none">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10 animate-spin-slow motion-reduce:animate-none" />
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-40 w-40 rounded-full bg-gold/15 blur-2xl animate-drift motion-reduce:animate-none" />
      <div className="pointer-events-none absolute right-[30%] bottom-[10%] h-56 w-56 rounded-full bg-forest-300/20 blur-3xl animate-drift-rev motion-reduce:animate-none" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/5 animate-soft-float motion-reduce:animate-none" />
      <div className="container-shell relative grid items-center gap-6 py-14 md:py-20 md:min-h-[28rem] lg:h-[30rem] lg:min-h-0 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <h1 className="motion-reduce:animate-none animate-slide-in-left text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p style={{ animationDelay: '.2s' }} className="motion-reduce:animate-none animate-fade-up mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">{text}</p>
          <div style={{ animationDelay: '.4s' }} className="motion-reduce:animate-none animate-fade-up mt-10 flex flex-nowrap gap-3 sm:gap-4">
            <Link href="/#contact" className="focus-ring flex-1 whitespace-nowrap rounded-xl bg-gold px-3 py-3 text-center text-sm font-bold text-forest-950 shadow-card transition hover:-translate-y-0.5 hover:bg-white sm:flex-none sm:px-6 sm:text-base">Book Consultation</Link>
            <Link href={secondary[1]} className="focus-ring flex-1 whitespace-nowrap rounded-xl border border-white/40 px-3 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:flex-none sm:px-6 sm:text-base">{secondary[0]}</Link>
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:-my-14 lg:h-[26rem] lg:w-[26rem]">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
          <div className="absolute inset-0 animate-ping rounded-full border border-white/30 [animation-duration:3.5s] motion-reduce:animate-none" aria-hidden="true" />
          <div className="absolute inset-0 animate-ping rounded-full border border-gold/40 [animation-delay:1.7s] [animation-duration:3.5s] motion-reduce:animate-none" aria-hidden="true" />
          <div className="absolute -inset-3 animate-spin-slow rounded-full border-2 border-dashed border-white/30 motion-reduce:animate-none" aria-hidden="true" />
          <div className="absolute -inset-8 animate-spin-slow [animation-direction:reverse] [animation-duration:24s] motion-reduce:animate-none" aria-hidden="true">
            <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_16px_4px_rgba(199,162,77,.7)]" />
            <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-200 shadow-[0_0_14px_3px_rgba(186,230,253,.7)]" />
            <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-forest-300 shadow-[0_0_12px_3px_rgba(169,204,160,.7)]" />
          </div>
          <Image src={image} alt={alt} fill priority sizes="416px" className="object-contain p-2 drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
