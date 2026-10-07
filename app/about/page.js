import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Reveal from '@/components/Reveal';
import CenterHeading from '@/components/CenterHeading';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import { ChevronRight } from '@/components/Icons';
import { getSettings } from '@/lib/content';

export const metadata = {
  title: 'About Us | Shukraveda Herbals',
  description: 'Learn about Shukraveda Herbals, our Ayurvedic philosophy, mission and vision, and how we support natural wellness.'
};

const offerings = [
  ['Herbal Support', 'Traditional Ayurvedic herbs chosen for your constitution and concerns, to support your body’s natural balance and everyday vitality.'],
  ['Yoga & Movement', 'Simple yoga and gentle movement routines that support circulation, flexibility and calm, and fit easily into your day.'],
  ['Personalised Diet', 'Practical dietary guidance that suits your needs and preferences, because what you eat plays a central role in how you feel.']
];

const values = [
  ['Health', 'A body that feels strong, comfortable and energetic in daily life.'],
  ['Happiness', 'A calm, positive mind that is supported by good routines and good rest.'],
  ['Peace', 'A sense of balance between body, mind and the life you lead.']
];

const points = ['Guidance personalised to you', 'Natural, herbal and lifestyle-led support', 'Private and respectful consultations', 'Follow-up as your needs change'];

const missionVision = [
  ['Our Mission', 'To make natural, personalised wellness guidance simple to understand and easy to reach, so that every individual feels heard, respected and supported on their wellness journey.'],
  ['Our Vision', 'To be a trusted name in Ayurveda-inspired wellness, bringing together traditional healing wisdom and modern understanding to help people live healthier, more balanced lives.']
];

export default async function AboutPage() {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <DiseaseBanner
          title="About Us"
          text="Holistic care is not just about treating a symptom. It is a complete approach that nurtures the body, calms the mind and supports long-term wellbeing. That is the thinking behind everything we do at Shukraveda Herbals."
          image="/images/prakriti-analysis.png"
          alt="Ayurvedic consultation with herbs illustration"
          secondary={['Our Mission', '#mission']}
        />
        <Breadcrumb current="About Us" section={null} />

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <CenterHeading>Who We Are</CenterHeading>
              <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
                <p>Shukraveda Herbals is rooted in Ayurveda and natural wellness. We believe that lasting wellbeing comes from looking at the whole person, not only the part that is troubling you, and that care should feel respectful, private and easy to access.</p>
                <p>Our approach brings together time-tested herbal knowledge, mindful eating and healthy daily habits. We take the time to understand your concerns, lifestyle and overall wellbeing, and then offer guidance that is personal to you, alongside the care of your doctor.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell">
            <Reveal><CenterHeading>How We Support You</CenterHeading></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {offerings.map(([t, d], i) => (
                <Reveal key={t} className="h-full">
                  <article className="h-full rounded-2xl border border-forest-100 bg-white p-8 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-soft">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-600 text-lg font-bold text-white">0{i + 1}</span>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">{t}</h3>
                    <span className="mx-auto mt-3 block h-0.5 w-10 bg-gold" />
                    <p className="mt-4 text-sm leading-6 text-slate-600">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest-700 text-white">
          <div className="container-shell grid items-center gap-8 py-14 lg:grid-cols-[1.3fr_.7fr] lg:py-20">
            <Reveal>
              <CenterHeading light>Holistic Care for Healthy Living</CenterHeading>
              <p className="mt-8 text-base leading-7 text-white/85">We are committed to supporting people with natural, thoughtful care that respects individuality. By combining Ayurvedic wisdom with simple, practical lifestyle guidance, we aim to help you feel better, step by step.</p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {points.map(p => <li key={p} className="flex items-start gap-2"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold" />{p}</li>)}
              </ul>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center">
                <p className="text-5xl font-semibold text-gold">100%</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/80">Natural focus</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="mission" className="section-pad scroll-mt-24 bg-white">
          <div className="container-shell grid gap-6 md:grid-cols-2">
            {missionVision.map(([t, d]) => (
              <Reveal key={t} className="h-full">
                <article className="h-full rounded-2xl border-l-4 border-forest-600 bg-forest-50/60 p-8 shadow-card">
                  <h2 className="text-2xl font-semibold uppercase tracking-[.06em] text-forest-700">{t}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell">
            <Reveal>
              <CenterHeading>What We Stand For</CenterHeading>
              <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-600">Health, happiness and peace are three simple things everyone wants, yet they can feel hard to reach in modern life. We help people move towards all three.</p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <div className="h-full rounded-2xl bg-white p-8 text-center shadow-card">
                    <h3 className="text-2xl font-semibold text-forest-700">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-12 text-center">
                <Link href="/contact" className="focus-ring inline-flex rounded-xl bg-forest-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700">Book Consultation</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <ScrollTop />
    </>
  );
}
