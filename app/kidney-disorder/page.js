import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ChevronRight } from '@/components/Icons';
import { getSettings } from '@/lib/content';

export const metadata = {
  title: 'Kidney Disorders | Shukraveda Herbals',
  description: 'Understand kidney health, common causes and symptoms, and how Shukraveda Herbals offers personalised Ayurvedic and lifestyle guidance for kidney wellness.'
};

const causes = [
  ['Glomerular Diseases', 'Glomeruli are tiny filters inside the kidneys. When they are inflamed or damaged, the kidneys struggle to clean the blood, and protein or blood may leak into the urine.'],
  ['Diabetes & High Blood Pressure', 'Long-standing high blood sugar can injure the delicate filtering units of the kidneys, while high blood pressure strains the blood vessels that supply them. Together they are the two most common contributors to kidney damage.'],
  ['Protein in Urine', 'Protein in the urine (proteinuria) is often an early sign that the filters are under stress. It is worth investigating promptly, as it can point to underlying kidney damage.']
];

const symptoms = [
  'Foamy, dark-coloured urine', 'Swelling in feet, ankles and face', 'Changes in how often you urinate', 'Persistent fatigue or weakness',
  'Trouble sleeping', 'Itchy or dry skin', 'Muscle cramps', 'Nausea or loss of appetite', 'Metallic taste in the mouth', 'Puffiness around the eyes'
];

const types = [
  ['Acute Kidney Injury', 'A sudden drop in kidney function, often linked to dehydration, infection or medication. It needs urgent medical attention.'],
  ['Chronic Kidney Disease', 'A gradual, long-term loss of kidney function that may show few symptoms in its early stages.'],
  ['IgA Nephropathy', 'An immune-related condition in which inflammation builds up in the kidney filters over time.'],
  ['Polycystic Kidney Disease', 'An inherited condition where fluid-filled cysts develop in the kidneys and may grow gradually.']
];

const support = [
  ['People noticing early signs', 'Foamy urine, swelling, tiredness or changes in urination are worth discussing early, alongside appropriate medical tests.'],
  ['Those on long-term medical care', 'Ayurvedic and lifestyle guidance can be explored as a complement to, not a replacement for, your nephrologist’s advice.'],
  ['People managing diabetes or blood pressure', 'Supporting these conditions well is one of the most important ways to protect kidney health.'],
  ['Anyone seeking a natural approach', 'Gentle herbal, dietary and daily-routine guidance tailored to your constitution and lifestyle.']
];

const why = [
  ['100% Natural Focus', 'Our guidance centres on herbs, diet and lifestyle, with a gentle and respectful approach.'],
  ['Root-Cause Thinking', 'We look at your history, habits and concerns rather than only the symptoms in front of us.'],
  ['A Complete Approach', 'Herbal support, diet and daily routine are considered together as one plan.'],
  ['Continued Follow-Up', 'We stay in touch, track how you are doing and adjust guidance as your needs change.'],
  ['Personalised Diet & Lifestyle', 'Practical, easy-to-follow suggestions that fit your food preferences and routine.']
];

const Check = () => <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold" />;

export default async function KidneyDisorderPage() {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <section className="relative overflow-hidden bg-gradient-to-br from-forest-950 via-forest-700 to-forest-500 bg-[length:200%_200%] text-white animate-gradient-shift motion-reduce:animate-none">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10 animate-spin-slow motion-reduce:animate-none" />
          <div className="pointer-events-none absolute left-[8%] top-[15%] h-40 w-40 rounded-full bg-gold/15 blur-2xl animate-drift motion-reduce:animate-none" />
          <div className="pointer-events-none absolute right-[30%] bottom-[10%] h-56 w-56 rounded-full bg-forest-300/20 blur-3xl animate-drift-rev motion-reduce:animate-none" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/5 animate-soft-float motion-reduce:animate-none" />
          <div className="container-shell relative grid items-center gap-6 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h1 className="motion-reduce:animate-none animate-slide-in-left text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Kidney Disorders</h1>
              <p style={{ animationDelay: ".2s" }} className="motion-reduce:animate-none animate-fade-up mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">Healthy kidneys filter waste from your blood and keep your body in balance. Conditions such as high blood pressure and diabetes can strain them over time. Shukraveda Herbals offers personalised Ayurvedic and lifestyle guidance to support your kidney wellness, alongside regular medical care.</p>
              <div style={{ animationDelay: ".4s" }} className="motion-reduce:animate-none animate-fade-up mt-10 flex flex-nowrap gap-3 sm:gap-4">
                <Link href="/#contact" className="focus-ring flex-1 whitespace-nowrap rounded-xl bg-gold px-3 py-3 text-center text-sm font-bold sm:flex-none sm:px-6 sm:text-base text-forest-950 shadow-card transition hover:-translate-y-0.5 hover:bg-white">Book Consultation</Link>
                <Link href="#symptoms" className="focus-ring flex-1 whitespace-nowrap rounded-xl border border-white/40 px-3 py-3 text-center text-sm font-bold sm:flex-none sm:px-6 sm:text-base text-white transition hover:-translate-y-0.5 hover:bg-white/10">Know the Symptoms</Link>
              </div>
            </div>
            <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:-my-14 lg:h-[26rem] lg:w-[26rem]">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
              <div className="absolute inset-0 rounded-full border border-white/30 animate-ping [animation-duration:3.5s] motion-reduce:animate-none" aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-gold/40 animate-ping [animation-duration:3.5s] [animation-delay:1.7s] motion-reduce:animate-none" aria-hidden="true" />
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-white/30 animate-spin-slow motion-reduce:animate-none" aria-hidden="true" />
              <div className="absolute -inset-8 animate-spin-slow [animation-direction:reverse] [animation-duration:24s] motion-reduce:animate-none" aria-hidden="true">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_16px_4px_rgba(199,162,77,.7)]" />
                <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-200 shadow-[0_0_14px_3px_rgba(186,230,253,.7)]" />
                <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-forest-300 shadow-[0_0_12px_3px_rgba(169,204,160,.7)]" />
              </div>
              <Image src="/images/kidney-disorder.png" alt="Kidney illustration" fill priority sizes="384px" className="object-contain p-2 drop-shadow-2xl" />
            </div>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="border-b border-forest-100 bg-white">
          <ol className="container-shell flex items-center gap-2 py-3 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-forest-700">Home</Link></li><li aria-hidden="true">/</li>
            <li><Link href="/#diseases" className="hover:text-forest-700">Diseases</Link></li><li aria-hidden="true">/</li>
            <li className="font-semibold text-forest-700" aria-current="page">Kidney Disorders</li>
          </ol>
        </nav>

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <h2 className="border-l-4 border-forest-600 pl-4 text-3xl font-semibold text-forest-800 sm:text-4xl">Why Do Kidneys Fail?</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>Kidney failure, also called renal failure, happens when the kidneys can no longer filter waste and excess fluid from the blood effectively. When this happens, waste products such as creatinine and urea build up, which can cause nausea, swelling, fatigue and other problems. Left unaddressed, it can become serious.</p>
                <p>Many conditions can damage the kidneys, but diabetes and high blood pressure are the two leading causes. Regular check-ups, a balanced diet, good hydration, healthy blood pressure and sugar levels, and early attention to symptoms are the foundations of protecting kidney health.</p>
                <p><strong className="text-forest-800">In broad terms, kidney failure is of two kinds:</strong></p>
                <p><strong className="text-forest-800">1. Temporary (acute):</strong> kidney function drops suddenly, often because of dehydration, infection or certain medicines. With timely treatment it is often reversible.</p>
                <p><strong className="text-forest-800">2. Long-term (chronic):</strong> kidney function declines gradually over months or years. Early attention and steady lifestyle care can help slow its progress.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell">
            <Reveal><h2 className="border-l-4 border-forest-600 pl-4 text-3xl font-semibold text-forest-800 sm:text-4xl">Common Causes</h2></Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {causes.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <article className="h-full rounded-2xl border border-forest-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="text-xl font-semibold text-forest-700">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="symptoms" className="section-pad scroll-mt-24 bg-white">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <h2 className="border-l-4 border-forest-600 pl-4 text-3xl font-semibold text-forest-800 sm:text-4xl">Symptoms of Kidney Problems</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">Kidney problems rarely appear overnight. They often begin quietly and progress slowly, so subtle changes are easy to miss. Watch for the following signs and speak to a doctor if they persist.</p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm text-slate-700 sm:grid-cols-2">
                {symptoms.map(s => <li key={s} className="flex items-start gap-2"><Check />{s}</li>)}
              </ul>
            </Reveal>
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-forest-900 p-8 text-white shadow-soft">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                <p className="text-xs font-bold uppercase tracking-[.24em] text-gold">Don’t wait</p>
                <h3 className="mt-3 text-2xl font-semibold">Early attention makes a difference</h3>
                <p className="mt-4 text-sm leading-6 text-white/80">If you notice any of these signs, get your kidney function tests done and talk to us about supportive guidance that suits your condition.</p>
                <Link href="/#contact" className="focus-ring mt-6 inline-flex rounded-xl bg-gold px-5 py-3 text-sm font-bold text-forest-950 transition hover:bg-white">Talk to our team</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-forest-900 text-white">
          <div className="container-shell">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold sm:text-4xl">Types of Kidney Disease</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">The kidneys remove waste and excess fluid from your blood. When their ability to do this is impaired, other organs are affected too. Here are some common conditions.</p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {types.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <article className="h-full rounded-2xl bg-white p-6 text-center text-ink shadow-card transition duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-semibold text-forest-700">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <SectionHeading center eyebrow="Natural support" title="Who Can Benefit from" highlight="Ayurvedic Guidance?" text="Ayurvedic and lifestyle guidance works best as a complement to your regular medical care. Please continue any prescribed treatment and consult your doctor before making changes." />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {support.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <div className="h-full rounded-2xl border border-forest-100 bg-forest-50/60 p-6">
                    <h3 className="font-sans text-lg font-bold text-forest-800">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell">
            <Reveal><SectionHeading center eyebrow="Why choose us" title="Why Choose" highlight="Shukraveda Herbals?" /></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {why.map(([t, d], i) => (
                <Reveal key={t} className="h-full">
                  <article className="h-full rounded-2xl border border-forest-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 font-bold text-white">0{i + 1}</span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <p className="bg-white px-4 py-6 text-center text-xs leading-5 text-slate-500"><strong>Disclaimer:</strong> This page is for general information only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified doctor about your health.</p>
      </main>
      <Footer settings={settings} />
      <ScrollTop />
    </>
  );
}
