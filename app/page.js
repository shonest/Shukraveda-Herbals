import Header from '@/components/Header';
import StatsSection from '@/components/StatsSection';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import SectionHeading from '@/components/SectionHeading';
import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import DiseaseCard from '@/components/DiseaseCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import { getSettings, getConditions, getTestimonials } from '@/lib/content';

export default async function HomePage() {
  const [settings, diseases, testimonials] = await Promise.all([getSettings(), getConditions(), getTestimonials()]);
  return (
    <>
      <Header />
      <main>
        <HeroSlider />

        <section id="diseases" className="section-pad bg-cream">
          <div className="container-shell">
            <Reveal><SectionHeading center eyebrow="Holistic wellness support" title="Conditions We" highlight="Focus On" text="Shukraveda Herbals focuses on four core wellness areas with a clean, personalized and privacy-conscious consultation experience." /></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
              {diseases.map((d, i) => <Reveal key={d.id} className="h-full"><DiseaseCard {...d} /></Reveal>)}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad bg-white">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <Reveal>
              <SectionHeading eyebrow="Why Shukraveda Herbals" title="Care That Matters to" highlight="Every Individual" text={<><strong className="font-semibold text-forest-800">Wellness made simple, guidance made personal.</strong><br />Clear information, thoughtful care, and easy access to the support you need—so you can take the next step with confidence.</>} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Personalized Approach','Guidance tailored to individual wellness goals.'],
                  ['Natural Focus','Herbal and lifestyle-led wellness support.'],
                  ['Private Consultation','Respectful conversations around sensitive concerns.'],
                  ['Easy Access','Online-first consultation flow designed for convenience.']
                ].map(([title,text]) => <div key={title} className="rounded-2xl border border-forest-100 bg-forest-50/50 p-5"><h3 className="font-sans text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-forest-900 p-8 text-white shadow-soft md:p-10">
                <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/5" />
                <p className="text-xs font-bold uppercase tracking-[.24em] text-gold">Your wellness journey</p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">A simple consultation process</h3>
                <ol className="mt-8 grid gap-4">
                  {['Choose your health concern','Share your details securely','Speak with a wellness expert','Receive personalized guidance'].map((x,i) => <li key={x} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-forest-950">0{i+1}</span><span className="text-sm font-semibold">{x}</span></li>)}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        <ProcessSteps />

        <StatsSection />

        <Testimonials items={testimonials.filter(t => t.published)} />

        <section id="contact" className="section-pad bg-forest-50">
          <div className="container-shell grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <SectionHeading eyebrow="Contact us" title="Start with a private consultation" highlight="request" text="Tell us what you would like to discuss. We will use the information only to understand your request and connect you with the right consultation flow." />
              <div className="mt-8 space-y-4 text-sm text-slate-700"><p><strong>Email:</strong> {settings.email}</p><p><strong>Phone:</strong> {settings.phone}</p><p><strong>Address:</strong> {settings.address}</p></div>
            </Reveal>
            <Reveal><ContactForm diseases={diseases.map(d => d.title)} /></Reveal>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
      <ScrollTop />
    </>
  );
}
