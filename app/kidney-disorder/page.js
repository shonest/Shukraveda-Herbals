import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import CenterHeading from '@/components/CenterHeading';
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
        <DiseaseBanner
          title="Kidney Disorders"
          text="Healthy kidneys filter waste from your blood and keep your body in balance. Conditions such as high blood pressure and diabetes can strain them over time. We offer personalised Ayurvedic and lifestyle guidance to support your kidney wellness."
          image="/images/kidney-disorder.png"
          alt="Kidney illustration"
          secondary={['Know the Symptoms', '#symptoms']}
        />

        <Breadcrumb current="Kidney Disorders" />

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <CenterHeading>Why Do Kidneys Fail?</CenterHeading>
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
            <Reveal><CenterHeading>Common Causes</CenterHeading></Reveal>
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
              <CenterHeading>Symptoms of Kidney Problems</CenterHeading>
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
                <CenterHeading light>Types of Kidney Disease</CenterHeading>
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
              <CenterHeading>Who Can Benefit from Ayurvedic Guidance?</CenterHeading><p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-600">Ayurvedic and lifestyle guidance works best as a complement to your regular medical care. Please continue any prescribed treatment and consult your doctor before making changes.</p>
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
            <Reveal><CenterHeading>Why Choose Shukraveda Herbals?</CenterHeading></Reveal>
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
