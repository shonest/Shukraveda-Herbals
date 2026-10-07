import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Reveal from '@/components/Reveal';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import FaqList from '@/components/FaqList';
import ImageRow from '@/components/ImageRow';
import CenterHeading from '@/components/CenterHeading';
import { ChevronRight } from '@/components/Icons';
import { getSettings } from '@/lib/content';

export const metadata = {
  title: 'Sexual Disorders | Shukraveda Herbals',
  description: 'Private, respectful Ayurvedic and lifestyle guidance for common sexual wellness concerns, from Shukraveda Herbals.'
};

const conditions = [
  {
    title: 'Erectile Dysfunction (ED)',
    text: 'Erectile dysfunction is one of the most common sexual concerns among men. It means difficulty achieving or maintaining an erection firm enough for satisfying intimacy. An occasional problem is normal, but when it keeps happening it may point to an underlying health issue.',
    causesTitle: 'Causes of Erectile Dysfunction',
    causes: 'The causes can be physical or psychological. Common physical factors include heart disease, diabetes, obesity and hormonal imbalance. On the other hand, anxiety, depression, stress and relationship difficulties can also trigger it.',
    approach: 'At Shukraveda Herbals, our approach focuses on understanding the root cause, whether physical or emotional, and supporting it through holistic care and natural remedies.'
  },
  {
    title: 'Premature Ejaculation (PE)',
    text: 'Premature ejaculation happens when ejaculation occurs sooner than a person or their partner would like, often causing frustration and straining the relationship. It is a common concern, and it is believed to affect a significant number of men at some point in life.',
    causesTitle: 'Causes of Premature Ejaculation',
    causes: 'Like ED, PE can be caused by psychological factors such as anxiety or stress. It can also have biological origins, such as hormonal changes or nerve sensitivity.',
    approach: 'Our guidance takes a holistic approach, combining herbal support, mindfulness practices and lifestyle adjustments to help manage the concern.'
  },
  {
    title: 'Low Sex Desire / Low Libido',
    text: 'Low libido, or low sexual desire, can affect both men and women. It often results from stress, fatigue, hormonal imbalances or relationship challenges, and it can come and go over time.',
    causesTitle: 'Causes of Low Libido',
    causes: 'Poor mental health, an unhealthy diet, a sedentary lifestyle and long-term illness can all lower desire. Declining testosterone in men or oestrogen in women are also common contributors.',
    approach: 'Rather than relying only on medicines with side effects, we offer natural, lifestyle-led guidance that helps rejuvenate the body and mind, with the help of herbs, dietary changes and stress-reducing techniques.'
  }
];

const help = [
  {
    title: 'Herbal & Integrative Support',
    paras: [
      'We follow a holistic and integrative approach to sexual health concerns, using traditional Ayurvedic herbs that are widely used to support vitality, stamina and balance.',
      'These herbs are used to help balance hormones, support circulation and ease stress, all of which matter for a healthy sexual life.'
    ]
  },
  {
    title: 'Dietary Changes',
    paras: [
      'Nutrition plays a key role in sexual vitality. A balanced diet rich in antioxidants, essential nutrients and herbal support can improve overall function and energy.',
      'Foods such as walnuts, pumpkin seeds, spinach and dark chocolate are commonly included for their support of circulation and general wellbeing.'
    ]
  },
  {
    title: 'Lifestyle Modifications',
    paras: [
      'Healthy habits such as regular exercise, stress management and enough sleep make a real difference. We guide you on adding physical activity such as yoga, meditation and cardio to your routine.',
      'Reducing smoking, alcohol and processed foods can also support better sexual performance and desire.'
    ]
  }
];

const why = [
  'Natural herbal support, personalised to you',
  'Tailored dietary plans to support vitality',
  'Effective lifestyle changes for long-lasting results',
  'A focus on underlying causes, so you do not have to depend only on medicines'
];

const faqs = [
  ['What are the causes of erectile dysfunction?', 'ED can be caused by physical or psychological factors, and often by a mix of both.'],
  ['How can natural guidance help with premature ejaculation?', 'Herbal support, stress management and lifestyle changes may help some people gain better control. Results vary from person to person.'],
  ['Can dietary changes improve low sex desire?', 'Yes. Good nutrition supports energy, hormones and circulation, which can help desire.'],
  ['What are the benefits of our natural approach to sexual disorders?', 'It offers a natural, holistic approach that looks at the whole person, with the aim of supporting wellbeing while limiting side effects.'],
  ['Can lifestyle changes alone help with sexual disorders?', 'Lifestyle changes can improve sexual health significantly, but they may not be enough on their own. Combining them with herbal guidance and dietary changes often works better.'],
  ['How long does it take to see results from natural guidance?', 'Results vary with individual circumstances, but many people notice improvements within a few weeks of steady care.'],
  ['Are natural approaches suitable for everyone?', 'They are suitable for many people, but if you have an underlying medical condition or take regular medicines, please talk to your doctor before starting.'],
  ['Can natural guidance help with fertility issues related to sexual disorders?', 'It can support reproductive wellbeing by addressing underlying factors such as hormonal imbalance, low sperm count and erectile dysfunction, alongside proper medical evaluation.'],
  ['What is the cost of natural guidance for sexual disorders?', 'The cost depends on individual needs and the plan suggested. Please get in touch and we will explain everything clearly.'],
  ['Do you offer online consultations for sexual disorders?', 'Yes. We offer confidential online consultations so you can talk to us from the comfort of your home.'],
  ['What follow-up support do you offer after the consultation?', 'We offer ongoing support and guidance to help you stay on track and review your progress.']
];

export default async function SexualDisorderPage() {
  const settings = await getSettings();
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <DiseaseBanner
          title="Sexual Disorders"
          text="Intimate health concerns can quietly affect confidence, closeness and everyday happiness. We handle them with care and discretion, offering personalised herbal, dietary and lifestyle guidance to support your sexual wellness."
          image="/images/sexual-disorder.png"
          alt="Sexual wellness illustration"
          secondary={['Learn More', '#understanding']}
        />
        <Breadcrumb current="Sexual Disorders" />

        <section id="understanding" className="section-pad scroll-mt-24 bg-white">
          <div className="container-shell max-w-6xl">
            <Reveal>
              <CenterHeading>Understanding Sexual Disorders: Common Conditions and Their Causes</CenterHeading>
              <p className="mt-6 text-base leading-7 text-slate-600">Sexual concerns are far more common than most people think, and they can weigh on both body and mind. They are health concerns like any other, and seeking help is nothing to be embarrassed about. Here are the conditions people ask us about most:</p>
            </Reveal>
            <div className="mt-10 grid gap-14">
              {conditions.map((c, i) => (
                <ImageRow key={c.title} title={c.title} image={c.image} alt={c.title} reverse={i % 2 === 1}>
                  <p>{c.text}</p>
                  <h4 className="border-t border-forest-100 pt-3 font-sans text-base font-bold text-forest-800">{c.causesTitle}</h4>
                  <p>{c.causes}</p>
                  <p>{c.approach}</p>
                </ImageRow>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell max-w-4xl">
            <Reveal>
              <CenterHeading>How These Concerns Affect Relationships</CenterHeading>
              <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
                <p>Sexual concerns do not affect only one person. They impact relationships, often causing strain, miscommunication and emotional distance. When left untreated, conditions like ED, PE or low libido can damage self-esteem, intimacy and the overall relationship.</p>
                <p>Couples may feel a loss of emotional connection, and in some cases it can lead to feelings of guilt, shame or resentment. Addressing these concerns promptly is essential for maintaining a healthy, fulfilling relationship.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell max-w-6xl">
            <Reveal>
              <CenterHeading>Our Natural Approach to Support</CenterHeading>
              <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-7 text-slate-600">We believe sexual concerns can be supported without relying on invasive procedures or synthetic medicines. Instead, our focus is on natural approaches that look at the root of your concerns. Our guidance supports, and does not replace, your doctor’s advice.</p>
            </Reveal>
            <div className="mt-12 grid gap-14">
              {help.map((h, i) => (
                <ImageRow key={h.title} title={h.title} image={h.image} alt={h.title} reverse={i % 2 === 1}>
                  {h.paras.map(p => <p key={p}>{p}</p>)}
                </ImageRow>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell max-w-4xl">
            <Reveal>
              <CenterHeading>What Sets Shukraveda Herbals Apart</CenterHeading>
              <p className="mt-8 text-base leading-7 text-slate-600">Our mission is to help you take back control of your sexual health naturally and sustainably. We emphasise a holistic view, making sure every aspect of your wellbeing is considered. Your personalised plan combines:</p>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:text-base">
                {why.map(w => <li key={w} className="flex items-start gap-2"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gold" />{w}</li>)}
              </ul>
              <p className="mt-5 text-base leading-7 text-slate-600">We focus on the underlying causes of sexual concerns, helping you avoid dependency on medicines while promoting a healthier, happier intimate life.</p>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell max-w-3xl text-center">
            <Reveal>
              <CenterHeading>Take the First Step Towards Wellness</CenterHeading>
              <p className="mt-8 text-base leading-7 text-slate-600">If you are struggling with erectile dysfunction, premature ejaculation or low libido, don’t let these challenges hold you back any longer. Our natural approach is a safe, gentle and holistic way to reclaim your sexual health.</p>
              <p className="mt-3 text-base leading-7 text-slate-600">Contact us today to schedule a consultation and begin your journey to a more fulfilling and intimate life.</p>
              <Link href="/contact" className="focus-ring mt-6 inline-flex rounded-xl bg-forest-600 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700">Book Consultation</Link>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="container-shell max-w-4xl">
            <Reveal><CenterHeading>FAQs (Frequently Asked Questions)</CenterHeading></Reveal>
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
