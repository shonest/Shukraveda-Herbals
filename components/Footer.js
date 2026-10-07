import Image from 'next/image';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './Icons';

const socials = [
  ['Facebook', FacebookIcon],
  ['Instagram', InstagramIcon],
  ['YouTube', YoutubeIcon],
  ['LinkedIn', LinkedinIcon],
];

export default function Footer({ settings }) {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-2xl bg-white p-2"><Image src="/images/logo.png" alt="Shukraveda Herbals" width={139} height={127} unoptimized className="h-32 w-auto" /></div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">Ayurveda-inspired wellness support with a natural, respectful and personalized approach.</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70"><a href="#about" className="hover:text-white">About Us</a><a href="#diseases" className="hover:text-white">Diseases</a><a href="#contact" className="hover:text-white">Contact Us</a></div>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a href={`mailto:${settings.email}`} className="flex items-center gap-3 hover:text-white"><MailIcon className="h-5 w-5 shrink-0 text-gold" />{settings.email}</a>
            <a href={`tel:${settings.phone.split(' ').join('')}`} className="flex items-center gap-3 hover:text-white"><PhoneIcon className="h-5 w-5 shrink-0 text-gold" />{settings.phone}</a>
            <span className="flex items-center gap-3"><MapPinIcon className="h-5 w-5 shrink-0 text-gold" />{settings.address}</span>
          </div>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Follow</h3>
          <div className="mt-4 flex gap-4">
            {socials.map(([name, Icon]) => (
              <a key={name} href="#" aria-label={name} className="group relative focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-gold hover:bg-white/10 hover:text-white">
                <Icon className="h-6 w-6" />
                <span role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-forest-900 opacity-0 shadow-lg transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© {new Date().getFullYear()} Shukraveda Herbals. All rights reserved.</div>
    </footer>
  );
}
