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
    default: 'Koina Allied Health | Community, In-Home & Telehealth Healthcare Across Queensland',
    template: '%s | Koina Allied Health',
  },
  description:
    'Queensland allied health provider delivering in-home, mobile, and telehealth care for NDIS participants, Aged Care (HCP/CHSP), DVA veterans, and private clients. Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support (PBS), AHAs, and Clinical Assessments.',
  applicationName: 'Koina Allied Health',
  category: 'Health & Medical',
  classification: 'Allied Health Services Queensland',
  keywords: [
    'Koina Allied Health',
    'Allied Health Queensland',
    'NDIS Provider Queensland',
    'NDIS Occupational Therapy Brisbane',
    'Mobile Physiotherapy Gold Coast',
    'Speech Pathology In-Home QLD',
    'Positive Behaviour Support NDIS Queensland',
    'Functional Capacity Assessment FCA QLD',
    'Home Modifications NDIS Occupational Therapy',
    'Allied Health Assistants AHA Queensland',
    'Aged Care Allied Health Home Visits',
    'Home Care Package Physiotherapy Queensland',
    'DVA Approved Allied Health Gold Card',
    'In-Home Therapy Sunshine Coast',
    'Statewide Telehealth Allied Health Queensland',
    'Supported Independent Living SIL SDA Assessments',
    'Swallowing Dysphagia Speech Pathology',
    'Falls Prevention Mobility Physiotherapy QLD',
  ],
  authors: [{ name: 'Koina Allied Health Pty Ltd', url: 'https://koina.com.au' }],
  creator: 'Koina Allied Health Pty Ltd',
  publisher: 'Koina Allied Health Pty Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/koina-icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.svg' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Koina Allied Health | Community, In-Home & Telehealth Healthcare Across Queensland',
    description:
      'In-home and mobile allied health care across Queensland. Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, Therapy Assistants, and Clinical Assessments.',
    url: 'https://koina.com.au',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/koina-logo.png',
        width: 1200,
        height: 630,
        alt: 'Koina Allied Health - Queensland In-Home & Telehealth Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koina Allied Health | Community & In-Home Healthcare Across Queensland',
    description:
      'Care delivered where you feel most comfortable: in-home, mobile, or via telehealth across Queensland. NDIS, Aged Care, DVA & Private.',
    images: ['/koina-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'AU-QLD',
    'geo.placename': 'Queensland, Australia',
    'geo.position': '-27.4698;153.0251',
    'ICBM': '-27.4698, 153.0251',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://koina.com.au/#organization',
        name: 'Koina Allied Health',
        alternateName: ['Koina Allied Health Pty Ltd', 'Koina Care'],
        url: 'https://koina.com.au',
        logo: {
          '@type': 'ImageObject',
          url: 'https://koina.com.au/koina-logo.png',
          width: 512,
          height: 512,
        },
        image: 'https://koina.com.au/koina-logo.png',
        email: 'contact@koina.com.au',
        description:
          'Koina Allied Health is an Australian healthcare organization delivering multidisciplinary in-home, mobile, and telehealth allied health services across Queensland. Disciplines include Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support (PBS), Therapy Assistance (AHAs), and Clinical Assessments for NDIS participants, Aged Care (HCP/CHSP), DVA veterans, and private clients.',
        priceRange: '$$',
        currenciesAccepted: 'AUD',
        paymentAccepted: 'NDIS Funding, Home Care Package (HCP), DVA Direct Billing, Private Health Insurance, Medicare CDM/EPC, Credit Card, Electronic Funds Transfer',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'QLD',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -27.4698,
          longitude: 153.0251,
        },
        areaServed: [
          {
            '@type': 'State',
            name: 'Queensland',
            sameAs: 'https://en.wikipedia.org/wiki/Queensland',
          },
          { '@type': 'AdministrativeArea', name: 'South East Queensland' },
          { '@type': 'AdministrativeArea', name: 'Brisbane' },
          { '@type': 'AdministrativeArea', name: 'Gold Coast' },
          { '@type': 'AdministrativeArea', name: 'Sunshine Coast' },
          { '@type': 'AdministrativeArea', name: 'Ipswich' },
          { '@type': 'AdministrativeArea', name: 'Logan' },
          { '@type': 'AdministrativeArea', name: 'Moreton Bay' },
          { '@type': 'AdministrativeArea', name: 'Toowoomba & Darling Downs' },
          { '@type': 'AdministrativeArea', name: 'Wide Bay & Central Queensland' },
          { '@type': 'AdministrativeArea', name: 'Townsville & North Queensland' },
          { '@type': 'AdministrativeArea', name: 'Cairns & Far North Queensland' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        medicalSpecialty: [
          'OccupationalTherapy',
          'Physiotherapy',
          'SpeechPathology',
          'BehavioralHealth',
          'PhysicalTherapy',
        ],
        availableService: [
          {
            '@type': 'MedicalTherapy',
            name: 'Occupational Therapy',
            description: 'Functional capacity assessments, home modifications, assistive technology prescription, and daily living skills development.',
            url: 'https://koina.com.au/services#ot',
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Physiotherapy',
            description: 'Mobility rehabilitation, falls prevention, strength conditioning, and neurological recovery in-home across Queensland.',
            url: 'https://koina.com.au/services#physio',
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Speech Pathology',
            description: 'Comprehensive dysphagia swallowing assessments, mealtime plans, speech and language articulation, and AAC device prescription.',
            url: 'https://koina.com.au/services#speech',
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Positive Behaviour Support (PBS)',
            description: 'Evidence-based functional behaviour assessments (FBA), comprehensive behaviour support plans, and restrictive practice reduction.',
            url: 'https://koina.com.au/services#pbs',
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Therapy Assistants (AHAs)',
            description: 'Supervised routine reinforcement and community practice to stretch funding budgets cost-effectively.',
            url: 'https://koina.com.au/services#aha',
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Clinical Assessments',
            description: 'Functional Capacity Assessments (FCA), SIL/SDA housing assessments, and complex Assistive Technology (AT Level 1–4) reporting.',
            url: 'https://koina.com.au/services#assessments',
          },
        ],
        knowsAbout: [
          'National Disability Insurance Scheme (NDIS)',
          'Department of Veterans\' Affairs (DVA) Health Care',
          'My Aged Care Home Care Packages (HCP Levels 1-4)',
          'Commonwealth Home Support Programme (CHSP)',
          'Functional Capacity Assessments (FCA)',
          'Specialist Disability Accommodation (SDA)',
          'Supported Independent Living (SIL)',
          'AHPRA Clinical Governance',
          'Speech Pathology Australia Standards',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://koina.com.au/#website',
        url: 'https://koina.com.au',
        name: 'Koina Allied Health',
        description: 'Community, In-Home & Telehealth Healthcare Across Queensland',
        publisher: {
          '@id': 'https://koina.com.au/#organization',
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://koina.com.au/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I make a referral to Koina Allied Health?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can submit an online referral directly through the Koina website at https://koina.com.au/referral in under two minutes, or email relevant plans and clinical documents to contact@koina.com.au. Referrals are accepted from Support Coordinators, Plan Managers, GPs, Aged Care Providers, and self-referring participants. Our intake team reviews all referrals within 24 business hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Koina Allied Health provide in-home visits across Queensland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Koina Allied Health operates a mobile-first care delivery model. Qualified clinicians travel directly to your home, workplace, school, day program, or aged care residence across Queensland, including South East Queensland, Darling Downs, Wide Bay, Central Queensland, Townsville, and Cairns, supported by secure statewide telehealth.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which funding categories does Koina Allied Health accept?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Koina Allied Health works with NDIS participants (Plan-Managed, Self-Managed, and Agency/NDIA-Managed), Home Care Package recipients (HCP Levels 1–4 and CHSP), Department of Veterans\' Affairs (DVA) Gold and White Card holders, and private self-funded clients (with private health insurance or Medicare CDM/EPC rebate eligibility).',
            },
          },
          {
            '@type': 'Question',
            name: 'Are DVA Gold and White Card holders covered without out-of-pocket costs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. For DVA Gold Card holders (for all clinically necessary conditions) and eligible White Card holders (for accepted service-related conditions), Koina Allied Health bills the Department of Veterans\' Affairs directly via Medicare/DVA schedules with zero out-of-pocket gap fees when referred by a GP with a valid D904 referral.',
            },
          },
          {
            '@type': 'Question',
            name: 'What clinical disciplines are available through Koina Allied Health?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Koina provides six core clinical disciplines across Queensland: (1) Occupational Therapy, (2) Physiotherapy, (3) Speech Pathology, (4) Positive Behaviour Support (PBS), (5) Therapy Assistants (AHAs), and (6) Clinical Assessments (including Functional Capacity Assessments and SIL/SDA housing reports).',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the intake turnaround time for new referrals?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Koina Allied Health maintains immediate capacity statewide. Our clinical coordination team reviews every referral within 24 business hours, confirms funding verification, and matches the participant with a qualified local therapist for prompt initial consultation and assessment.',
            },
          },
        ],
      },
    ],
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
