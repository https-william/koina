import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://koina.com.au'),
  title: {
    default: 'Koina Allied Health | Community & In-Home Healthcare Across Queensland',
    template: '%s | Koina Allied Health',
  },
  description:
    'Allied health care for every stage of life. Providing Occupational Therapy, Physiotherapy, Positive Behaviour Support, Speech Pathology, and AHAs across Queensland through NDIS, Aged Care, DVA, or privately.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/koina-icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.svg' }],
  },
  keywords: [
    'Allied Health Queensland',
    'NDIS Provider Gold Coast',
    'NDIS Occupational Therapy Brisbane',
    'Mobile Physiotherapy Queensland',
    'Aged Care Allied Health',
    'DVA Approved Allied Health',
    'Positive Behaviour Support QLD',
    'Speech Pathology Gold Coast',
    'In-Home Therapy Queensland',
  ],
  authors: [{ name: 'Koina Allied Health Pty Ltd' }],
  creator: 'Koina Allied Health',
  publisher: 'Koina Allied Health',
  openGraph: {
    title: 'Koina Allied Health | Allied Health Care for Every Stage of Life',
    description:
      'Community & in-home allied health care across Queensland. Occupational Therapy, Physiotherapy, Behaviour Support, and Speech Pathology.',
    url: 'https://koina.com.au',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/koina-logo.png',
        width: 1200,
        height: 630,
        alt: 'Koina Allied Health Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koina Allied Health | Community & In-Home Healthcare Across Queensland',
    description:
      'Care delivered where you feel most comfortable: at home, in clinic, or via telehealth across Queensland.',
    images: ['/koina-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Koina Allied Health',
    alternateName: 'Koina Allied Health Pty Ltd',
    url: 'https://koina.com.au',
    logo: 'https://koina.com.au/koina-logo.png',
    image: 'https://koina.com.au/koina-logo.png',
    email: 'contact@koina.com.au',
    description:
      'Koina Allied Health provides personalized Occupational Therapy, Physiotherapy, Positive Behaviour Support, Speech Pathology, and Allied Health Assistant supports across Queensland.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gold Coast',
      addressRegion: 'QLD',
      postalCode: '4217',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -28.0167,
      longitude: 153.4,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    medicalSpecialty: [
      'Occupational Therapy',
      'Physiotherapy',
      'Speech Pathology',
      'Positive Behaviour Support',
    ],
    areaServed: [
      'Gold Coast',
      'Brisbane',
      'Ipswich',
      'Toowoomba',
      'South Burnett',
      'Cairns',
      'Townsville',
      'Mackay',
      'Hervey Bay',
      'Gympie',
      'Sunshine Coast',
      'Caboolture',
      'Gladstone',
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en-AU" className={`${plusJakarta.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
