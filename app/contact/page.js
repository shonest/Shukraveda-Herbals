import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';
import Reveal from '@/components/Reveal';
import CenterHeading from '@/components/CenterHeading';
import DiseaseBanner from '@/components/DiseaseBanner';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/Icons';
import { getSettings, getConditions } from '@/lib/content';

export const metadata = {
  title: 'Contact Us | Shukraveda Herbals',
  description: 'Get in touch with Shukraveda Herbals for a private consultation. Call, email or visit us.'
};

export default async function ContactPage() {
  const [settings, diseases] = await Promise.all([getSettings(), getConditions()]);
  const tel = settings.phone.split(' ').join('');
  const cards = [
    [PhoneIcon, 'Call Us', settings.phone, `tel:${tel}`, 'Talk to our team directly'],
    [MailIcon, 'Email Us', settings.email, `mailto:${settings.email}`, 'We reply as soon as we can'],
    [MapPinIcon, 'Visit Us', settings.address, `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.address)}`, 'Get directions on the map']
  ];
  return (
    <>
      <Header />
      <main className="pt-[calc(var(--strip-h)+var(--header-h))]">
        <DiseaseBanner
          title="Contact Us"
          text="Have a question or want to book a consultation? Reach out to us in whichever way is easiest for you. We are here to support you on your wellness journey, and every conversation is private."
          image="/images/health-coach.png"
          alt="Phone and message illustration"
          secondary={['Send a Message', '#message']}
        />
        <Breadcrumb current="Contact Us" section={null} />

        <section className="section-pad bg-white">
          <div className="container-shell">
            <Reveal><CenterHeading>Let’s Start Your Wellness Journey</CenterHeading></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {cards.map(([Icon, title, value, href, hint]) => (
                <Reveal key={title} className="h-full">
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="focus-ring group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-forest-100 bg-white p-8 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:border-forest-300 hover:shadow-soft">
                    <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-forest-50 transition-transform duration-500 group-hover:scale-[2.2]" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-forest-600 text-white shadow-card transition duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-forest-950"><Icon className="h-7 w-7" /></span>
                    <h3 className="relative mt-5 text-xl font-semibold text-ink">{title}</h3>
                    <p className="relative mt-2 break-words text-base font-semibold text-forest-700">{value}</p>
                    <p className="relative mt-1 text-sm text-slate-500">{hint}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="message" className="section-pad scroll-mt-24 bg-forest-50">
          <div className="container-shell grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] bg-forest-900 p-8 text-white shadow-soft md:p-10">
                <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/5" />
                <p className="relative text-xs font-bold uppercase tracking-[.24em] text-gold">Our location</p>
                <p className="relative mt-4 text-lg leading-8">{settings.address}</p>
                <ol className="relative mt-8 grid gap-3">
                  {['Share your concern in the form', 'Our team gets in touch with you', 'Receive personalised guidance'].map((x, i) => (
                    <li key={x} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-forest-950">0{i + 1}</span>
                      <span className="text-sm font-semibold">{x}</span>
                    </li>
                  ))}
                </ol>
                <p className="relative mt-6 text-sm leading-6 text-white/70">Your details are used only to understand and respond to your request.</p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="mb-5 text-center text-2xl font-semibold uppercase tracking-[.06em] text-forest-700 lg:text-left">Book an Appointment</h2>
              <ContactForm diseases={diseases.map(d => d.title)} />
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell">
            <Reveal><CenterHeading>Find Us on the Map</CenterHeading></Reveal>
            <Reveal className="mt-10">
              <div className="overflow-hidden rounded-[28px] border-4 border-forest-200 shadow-soft">
                <iframe
                  title="Shukraveda Herbals location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
                  className="h-[22rem] w-full md:h-[28rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
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
