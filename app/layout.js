import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.shukravedaherbals.com'),
  title: {
    default: 'Shukravedaherbals | Ayurvedic Wellness & Herbal Care',
    template: '%s | Shukravedaherbals'
  },
  description:
    'Explore Ayurveda-inspired wellness support for kidney health, skin concerns, sexual wellness and male infertility with Shukravedaherbals.',
  keywords: [
    'Shukravedaherbals',
    'Ayurvedic wellness',
    'herbal care',
    'kidney disorder ayurveda',
    'skin disorder ayurveda',
    'sexual wellness ayurveda',
    'male infertility ayurveda'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shukravedaherbals | Ayurvedic Wellness & Herbal Care',
    description:
      'A clean, natural wellness destination focused on personalized Ayurveda-inspired guidance.',
    url: 'https://www.shukravedaherbals.com',
    siteName: 'Shukravedaherbals',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shukravedaherbals',
    url: 'https://www.shukravedaherbals.com',
    email: 'shukravedaherbals@gmail.com',
    telephone: '+91-9319325065',
    description: 'Ayurveda-inspired herbal wellness and consultation support.'
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
