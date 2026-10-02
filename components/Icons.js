export const LeafLogo = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M11 45C13 27 23 14 42 8c0 19-9 33-27 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M20 42c8-7 14-14 21-25M32 50c4-12 11-21 22-26 0 14-7 24-19 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const ArrowUp = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m6 15 6-6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round"/> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>}
  </svg>
);

export const ChevronRight = ({ className='h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const KidneyIcon = ({ className = 'h-7 w-7' }) => (
  <svg {...base} className={className}>
    <path d="M14.5 3.5C18 4 20.5 7 20.5 11c0 4.5-3 8.5-7 9.5-2.2.5-3.5-.8-3.5-2.5 0-1.6 1.5-2.5 1.5-4.5S10 10.5 10 9c0-2.8 1.8-5.8 4.5-5.5Z" />
    <path d="M9 11.5c-1.5.2-3 1-3 2.5" />
  </svg>
);

export const SkinIcon = ({ className = 'h-7 w-7' }) => (
  <svg {...base} className={className}>
    <path d="M12 3c3.5 4 6 6.8 6 10.5a6 6 0 0 1-12 0C6 9.8 8.5 7 12 3Z" />
    <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
);

export const HeartIcon = ({ className = 'h-7 w-7' }) => (
  <svg {...base} className={className}>
    <path d="M12 20.5s-8-4.8-8-10.7A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 2.8c0 5.9-8 10.7-8 10.7Z" />
  </svg>
);

export const FertilityIcon = ({ className = 'h-7 w-7' }) => (
  <svg {...base} className={className}>
    <circle cx="9.5" cy="14.5" r="5" />
    <path d="m13 11 6.5-6.5M14.5 4.5h5v5" />
  </svg>
);

export const SparkIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2c.6 5.4 3.6 8.4 10 10-6.4 1.6-9.4 4.6-10 10-.6-5.4-3.6-8.4-10-10 6.4-1.6 9.4-4.6 10-10Z" /></svg>
);

const strokeProps = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const MailIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" {...strokeProps}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const PhoneIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" {...strokeProps}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const MapPinIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" {...strokeProps}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const FacebookIcon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3C16.3 4.2 15.4 4 14.4 4 12.2 4 10.5 5.4 10.5 8v2.500H8v3h2.500V21h3Z" /></svg>
);
export const InstagramIcon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" {...strokeProps}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
);
export const YoutubeIcon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.200a2.5 2.5 0 0 0-1.8-1.800C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.200C2 8.8 2 12 2 12s0 3.2.4 4.800a2.5 2.5 0 0 0 1.8 1.800C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.800c.4-1.6.4-4.8.4-4.800s0-3.2-.4-4.800ZM10 15V9l5.2 3L10 15Z" /></svg>
);
export const LinkedinIcon = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.5 9h3v10.500h-3V9ZM6 4a1.8 1.8 0 1 1 0 3.600A1.8 1.8 0 0 1 6 4Zm3.5 5h2.900v1.400c.4-.8 1.5-1.7 3.1-1.7 3.2 0 3.8 2.1 3.8 4.900v5.900h-3v-5.200c0-1.2 0-2.8-1.7-2.800s-2 1.3-2 2.700v5.300h-3V9Z" /></svg>
);
