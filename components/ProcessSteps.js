import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ChevronRight } from './Icons';

const steps = [
  ['01', 'Connect', 'Call, message, or chat with our team.', '/images/connect.png'],
  ['02', 'Health Coach', 'A dedicated health coach is assigned to guide you.', '/images/health-coach.png'],
  ['03', 'Fix Appointment', 'Choose a convenient time for your consultation.', '/images/fix-appointment.png'],
  ['04', 'Consult', 'Receive your personalized Ayurvedic treatment plan.', '/images/consult.png'],
];

export default function ProcessSteps() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-cream">

      <div className="container-shell relative">
        <Reveal><SectionHeading center eyebrow="Nurture Your Body. Embrace a Healthier Life." title="Wellness That Begins With" highlight="Understanding You" text={<><strong className="font-semibold text-forest-800">Your body. Your needs. Your wellness journey.</strong><br />We believe effective wellness begins with understanding you. At Shukraveda Herbals, we consider your concerns, lifestyle, and overall wellbeing to provide personalized herbal guidance.</>} /></Reveal>

        <ol className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, text, icon], i) => (
            <li key={n} className="relative">
              <Reveal className="h-full">
                <div className="group relative h-full rounded-3xl border border-forest-600 bg-gradient-to-b from-forest-700 to-forest-800 px-5 pb-8 pt-12 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:border-gold hover:from-forest-600 hover:to-forest-800 hover:shadow-soft">
                  <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gold font-sans text-lg font-bold text-forest-950 ring-4 ring-cream transition duration-300 group-hover:scale-110">{n}</span>
                  <div className="relative mx-auto h-32 w-32 rounded-full bg-white p-3 shadow-inner transition duration-500 group-hover:scale-110"><Image src={icon} alt={title} fill sizes="128px" className="object-contain p-2" /></div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-white/80">{text}</p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <span className="absolute -right-5 top-1/2 hidden h-0.5 w-5 -translate-y-1/2 bg-gold/70 lg:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 text-center">
          <a href="#contact" className="focus-ring group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-forest-800 to-forest-600 px-8 py-4 font-serif text-lg font-semibold text-white shadow-soft ring-2 ring-gold/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:text-xl">
            Book a Consultation
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold transition group-hover:translate-x-1"><ChevronRight className="h-4 w-4" /></span>
          </a>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[.2em] text-slate-500 sm:text-xs">
            <span>Natural Care</span><span aria-hidden="true">•</span><span>Personalized Solutions</span><span aria-hidden="true">•</span><span>Long-term Wellness</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
