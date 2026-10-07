import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import CenterHeading from '@/components/CenterHeading';
import FaqList from '@/components/FaqList';
import { ChevronRight } from '@/components/Icons';
import { getSettings } from '@/lib/content';

export const metadata = {
  title: 'Skin Disorders | Shukraveda Herbals',
  description: 'Learn about common skin disorders, their causes and symptoms, and how Shukraveda Herbals offers personalised Ayurvedic and lifestyle guidance for healthy skin.'
};

const types = [
  ['Vitiligo', 'An auto-immune skin condition in which the cells that make pigment (melanocytes) are damaged or stop working, leading to pale or white patches on the skin.'],
  ['Psoriasis', 'A long-term immune-related condition in which skin cells multiply too quickly, forming thick, scaly, silvery-white patches. Stress, diet, infections and genetics can all play a role.'],
  ['Hyper-pigmentation', 'Darkening of patches of skin caused by excess melanin. It can follow sun exposure, hormonal changes, inflammation or injury to the skin.'],
  ['Acne', 'A common condition in which clogged pores lead to blackheads, whiteheads, pimples and cysts. Hormones, stress, diet and skincare habits can all contribute.']
];

const causes = [
  ['Genetics', 'Some skin conditions run in families and can be passed down through genes.'],
  ['Immune System Issues', 'When the body’s defence system mistakenly attacks healthy skin cells, conditions such as psoriasis or vitiligo can develop.'],
  ['Infections', 'Bacteria, viruses or fungi can infect the skin and cause rashes, itching or other changes.'],
  ['Allergies', 'Reactions to certain foods, chemicals or substances can trigger skin problems.'],
  ['Environmental Factors', 'Harsh weather, pollution and irritating substances can aggravate the skin.'],
  ['Medical Conditions', 'Underlying health issues such as diabetes, thyroid or autoimmune conditions can show up on the skin.'],
  ['Age & Background', 'Skin concerns can affect people of any age or background, so no one is immune.']
];

const symptoms = [
  ['Rashes', 'Redness or inflammation, often with a change in the texture of the skin.'],
  ['Itching', 'Persistent or on-and-off itching that can be widespread.'],
  ['Pain & discomfort', 'Some conditions cause soreness, burning or tenderness.'],
  ['Changes in colour', 'Darkening or lightening of the skin, or white patches.'],
  ['Scaling & peeling', 'Shedding of the outer skin layer, causing flaking or peeling.'],
  ['Dry skin', 'Low moisture levels that leave the skin rough, tight or cracked.']
];

const faqs = [
  ['Do eating habits affect skin disorders?', 'Yes. Diet can influence skin health, and some foods may aggravate certain conditions. A balanced, fresh and mostly home-cooked diet generally supports healthier skin.'],
  ['Can skin disorders be managed naturally?', 'Many skin conditions can be supported with natural measures such as a suitable diet, herbal care, stress management and a regular routine. Results vary from person to person, so we suggest keeping your doctor informed.'],
  ['Can I take steroid medicines for skin disorders?', 'Steroids should only be used as advised by your doctor. Long-term or unsupervised use can cause side effects, so please do not start or stop any medicine without medical advice.'],
  ['How long does it take to see improvement?', 'It depends on the condition, how long you have had it and your overall health. Some people notice changes in a few weeks, while others need several months of steady care.']
];

export default async function SkinDisorderPage() {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <DiseaseBanner
          title="Skin Disorders"
          text="Skin conditions range from mild and temporary to long-lasting, and can affect comfort and confidence. We offer personalised Ayurvedic and lifestyle guidance to support healthy skin, alongside the regular care of your doctor."
          image="/images/skin-disorder.png"
          alt="Skin wellness illustration"
          secondary={['Explore Types', '#types']}
        />

        <Breadcrumb current="Skin Disorders" />

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <CenterHeading>What Are Skin Disorders?</CenterHeading>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>A skin disorder is any abnormality or disturbance in the structure or function of the skin. The skin is the body’s largest organ and works as a protective barrier between your internal organs and the outside world.</p>
                <p>Conditions such as psoriasis, vitiligo and pigmentation can change how the skin looks and feels, causing rashes, itching, swelling or discolouration. Because skin is so closely tied to our appearance, these conditions can also affect confidence and quality of life.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="types" className="section-pad scroll-mt-24 bg-cream">
          <div className="container-shell">
            <Reveal><CenterHeading>Different Types of Skin Disorders</CenterHeading></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {types.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <article className="h-full rounded-2xl border border-forest-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="text-2xl font-semibold text-forest-700">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell">
            <Reveal><CenterHeading>Common Causes of Skin Disorders</CenterHeading></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {causes.map(([t, d]) => (
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

        <section className="section-pad bg-forest-900 text-white">
          <div className="container-shell">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <CenterHeading light>Common Symptoms of Skin Disorders</CenterHeading>
                <p className="mt-4 text-sm leading-7 text-white/75">Symptoms vary with the type and cause of the condition. Here are some of the most common signs. Please see a doctor if they persist or worsen.</p>
              </div>
            </Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map(([t, d]) => (
                <Reveal key={t} className="h-full">
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <div><h3 className="font-sans text-base font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-white/75">{d}</p></div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <CenterHeading>Why Choose Shukraveda Herbals for Skin Care?</CenterHeading>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>At Shukraveda Herbals we believe skin health reflects overall balance. Our approach is rooted in Ayurvedic thinking, looking at your constitution, diet, stress and daily habits instead of treating the surface alone.</p>
                <p>We combine herbal guidance with simple dietary and lifestyle suggestions that fit your routine, and we follow up so that your plan can be adjusted as you progress. Our guidance supports, and does not replace, the care of your dermatologist.</p>
              </div>
              <Link href="/contact" className="focus-ring mt-6 inline-flex rounded-xl bg-forest-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700">Book Consultation</Link>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell max-w-4xl">
            <Reveal><CenterHeading>Frequently Asked Questions</CenterHeading></Reveal>
            <Reveal className="mt-10"><FaqList items={faqs} /></Reveal>
          </div>
        </section>

        <p className="bg-white px-4 py-6 text-center text-xs leading-5 text-slate-500"><strong>Disclaimer:</strong> This page is for general information only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified doctor about your health.</p>
      </main>
      <Footer settings={settings} />
      <ScrollTop />
    </>
  );
}
