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
    'Allied health care for every stage of life. In-home and mobile Occupational Therapy, Physiotherapy, Positive Behaviour Support, Speech Pathology, and AHAs across Queensland through NDIS, Aged Care, DVA, or privately.',
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
    'In-Home Physiotherapy Brisbane',
    'NDIS Occupational Therapy Gold Coast',
    'Functional Capacity Assessment QLD',
    'Mobile Physiotherapy Queensland',
    'Speech Pathology Sunshine Coast',
    'Positive Behaviour Support NDIS Brisbane',
    'Home Care Packages Allied Health HCP',
    'DVA Approved Allied Health Provider',
    'Allied Health Assistants NDIS Queensland',
    'In-Home Therapy Toowoomba Ipswich Cairns',
    'NDIS Provider Gold Coast Robina Southport',
  ],
  authors: [{ name: 'Koina Allied Health Pty Ltd' }],
  creator: 'Koina Allied Health',
  publisher: 'Koina Allied Health',
  alternates: {
    canonical: 'https://koina.com.au',
  },
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
      'Care delivered where you feel most comfortable: in-home, mobile, or via telehealth across Queensland.',
    images: ['/koina-logo.png'],
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
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
    legalName: 'Koina Pty Ltd',
    url: 'https://koina.com.au',
    logo: 'https://koina.com.au/koina-logo.png',
    image: 'https://koina.com.au/koina-logo.png',
    email: 'contact@koina.com.au',
    sameAs: [
      'https://abr.business.gov.au',
      'https://hopesway.com.au',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Hopesway Pty Ltd',
      url: 'https://hopesway.com.au',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@koina.com.au',
      contactType: 'Central Clinical Intake',
      areaServed: 'Queensland, Australia',
      availableLanguage: ['English'],
    },
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
    knowsAbout: [
      'National Disability Insurance Scheme (NDIS)',
      'Home Care Packages (HCP Levels 1-4)',
      'Department of Veterans Affairs (DVA)',
      'Australian Health Practitioner Regulation Agency (AHPRA)',
      'Speech Pathology Australia (SPA)',
      'Functional Capacity Assessment (FCA)',
      'IDDSI Mealtime Management',
      'Assistive Technology Level 1-4',
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en-AU" className={`${plusJakarta.variable} font-sans scroll-smooth`}>
      <head>
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Queensland, Australia" />
        <meta name="geo.position" content="-28.0167;153.4000" />
        <meta name="ICBM" content="-28.0167, 153.4000" />
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
