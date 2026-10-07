import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Reveal from '@/components/Reveal';
import CenterHeading from '@/components/CenterHeading';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import FaqList from '@/components/FaqList';
import { ChevronRight } from '@/components/Icons';
import { getSettings } from '@/lib/content';

export const metadata = {
  title: 'Male Infertility | Shukraveda Herbals',
  description: 'Understand the types, causes and symptoms of male infertility, and how Shukraveda Herbals offers personalised Ayurvedic and lifestyle guidance.'
};

const types = [
  ['Azoospermia', 'No measurable sperm is found in the semen. It may be present from birth or develop later in life, and its cause can lie in sperm production or in a blockage along the way.'],
  ['Oligospermia', 'A lower than normal sperm count. A healthy sample generally has a good concentration of sperm per millilitre, and counts well below that are described as oligospermia.'],
  ['Sexual Function Concerns', 'Difficulties such as premature ejaculation or erectile dysfunction can make conception harder, and often have both physical and emotional causes.']
];

const causes = [
  ['Defective sperm production', 'Sperm develop best when the scrotum is slightly cooler than the rest of the body. Disturbances in this balance or in hormones can affect production.'],
  ['Congenital factors', 'Conditions present from birth, such as undescended testes, can affect sperm development.'],
  ['Genetic conditions', 'Some chromosomal or inherited conditions can reduce sperm movement or production.'],
  ['Structural problems', 'Blockages or abnormalities in the reproductive tract can prevent sperm from reaching the semen.'],
  ['Heat factors', 'Raised temperature in the scrotum, for example from varicocele, can interfere with sperm production.'],
  ['Infections', 'Long-lasting bacterial or other infections of the reproductive tract can harm sperm quality.'],
  ['Lifestyle and other factors', 'Smoking, heavy alcohol use, poor nutrition, obesity, stress, certain medicines, radiation and exposure to toxins can all play a part.']
];

const symptoms = [
  ['Changes in sexual function', 'Difficulty with erections, problems with ejaculation or reduced desire.'],
  ['Changes in testicle size', 'Noticeable changes in the size or feel of the testicles.'],
  ['Pain while urinating', 'Discomfort that may point to an underlying problem.'],
  ['Swollen scrotal veins', 'A varicocele can affect sperm production.'],
  ['Undescended testicles', 'One or both testicles not having moved into the scrotum.'],
  ['Genital infections', 'Infections that may affect fertility if left untreated.'],
  ['Weight changes', 'Significant, unexplained gain or loss can reflect hormonal imbalance.'],
  ['Signs of low testosterone', 'Reduced muscle, increased body fat and low mood may point to a deficiency.']
];

const faqs = [
  ['What can cause male infertility?', 'Many things, including hormonal imbalance, infections, genetic conditions, varicocele, blockages, lifestyle habits and certain medicines. A proper evaluation helps find the cause.'],
  ['Does smoking affect sperm?', 'Yes. Smoking can lower sperm count and movement and may damage sperm quality. Quitting is one of the most helpful steps you can take.'],
  ['Can steroids used for body building affect fertility?', 'Yes. Using steroids can disturb the hormones needed to produce sperm and may reduce fertility. Please speak to a doctor about this.'],
  ['Can natural guidance help?', 'Diet, lifestyle changes and herbal support may help overall reproductive health. They work best alongside proper medical evaluation, and results vary between individuals.']
];

export default async function MaleInfertilityPage() {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <DiseaseBanner
          title="Male Infertility"
          text="Male fertility can be influenced by hormonal balance, infections and lifestyle habits such as smoking and alcohol. We offer personalised Ayurvedic and lifestyle guidance to support your reproductive wellness."
          image="/images/male-infertility.png"
          alt="Male fertility wellness illustration"
          secondary={['Explore Types', '#types']}
        />
        <Breadcrumb current="Male Infertility" />

        <section className="section-pad bg-white">
          <div className="container-shell max-w-5xl">
            <Reveal>
              <CenterHeading>What Is Male Infertility?</CenterHeading>
              <p className="mt-6 text-base leading-7 text-slate-600">Male infertility means a man has difficulty helping his partner conceive. It happens when there are problems with the sperm, such as a low count, poor movement or an abnormal shape, or with how sperm are carried in the semen. Age, lifestyle and certain medical conditions can contribute. Seeking advice early and exploring your options can help couples through the challenge of starting a family.</p>
            </Reveal>
          </div>
        </section>

        <section id="types" className="section-pad scroll-mt-24 bg-cream">
          <div className="container-shell">
            <Reveal><CenterHeading>Male Infertility Types</CenterHeading></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
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
            <Reveal><CenterHeading>Common Causes of Male Infertility</CenterHeading></Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                <CenterHeading light>Common Symptoms of Male Infertility</CenterHeading>
                <p className="mt-4 text-sm leading-7 text-white/75">Many men have no obvious symptoms, but the following signs are worth discussing with a doctor.</p>
              </div>
            </Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              <CenterHeading>Our Approach to Male Fertility Wellness</CenterHeading>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>At Shukraveda Herbals we focus on supporting natural balance and overall reproductive health. Our guidance combines herbal support, dietary and lifestyle changes and stress management, tailored to your history and routine.</p>
                <p>We place emphasis on a nutritious diet, regular physical activity and good sleep, and we follow up so that your plan can change as you progress. Our guidance works alongside, not instead of, proper medical evaluation.</p>
              </div>
              <Link href="/#contact" className="focus-ring mt-6 inline-flex rounded-xl bg-forest-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700">Book Consultation</Link>
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
