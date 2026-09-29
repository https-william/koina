import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import WhoWeSupport from '@/components/home/WhoWeSupport';
import ServicesBento from '@/components/home/ServicesBento';
import WhyKoina from '@/components/home/WhyKoina';
import HomeFAQ from '@/components/home/HomeFAQ';
import ClosingCTA from '@/components/home/ClosingCTA';

export const metadata: Metadata = {
  title: 'Koina Allied Health | Community & In-Home Healthcare Across Queensland',
  description:
    'Allied health care for every stage of life. In-home and mobile Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, and Therapy Assistants across Queensland.',
  alternates: {
    canonical: 'https://koina.com.au',
  },
  openGraph: {
    title: 'Koina Allied Health | Community & In-Home Healthcare Across Queensland',
    description:
      'Personalized in-home allied health care for NDIS participants, older Australians, veterans, and private clients across Queensland.',
    url: 'https://koina.com.au',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function HomePage() {
  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I make a referral to Koina Allied Health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can submit an online referral directly through our website at koina.com.au/referral in under two minutes, or email your plan details, medical summaries, or GP documentation to contact@koina.com.au. We accept referrals from Support Coordinators, Plan Managers, GPs, Aged Care Providers, and self-referring participants. Our Queensland clinical coordination team reviews every referral within 24 business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Koina provide in-home visits across Queensland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Koina Allied Health operates a mobile-first care model. Qualified therapists travel directly to homes, workplaces, schools, day centres, and aged care facilities across Queensland — including South East Queensland (Brisbane, Gold Coast, Ipswich, Sunshine Coast, Logan), Darling Downs (Toowoomba), Wide Bay, Central Queensland, Townsville, and Cairns — supported by secure statewide telehealth.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which funding categories does Koina Allied Health accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support participants across four primary pathways: (1) NDIS participants (Plan-Managed, Self-Managed, and Agency/NDIA-Managed); (2) Home Care Packages (HCP Levels 1, 2, 3, 4 and CHSP); (3) Department of Veterans’ Affairs (DVA Gold and White Card direct billing); and (4) Private / Self-Funded clients eligible for private health insurance extras or Medicare Chronic Disease Management (CDM/EPC) rebates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are DVA Gold and White Card holders covered with zero out-of-pocket costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. For DVA Gold Card holders (for all clinically indicated conditions) and eligible White Card holders (for accepted conditions), Koina Allied Health bills the Department of Veterans’ Affairs directly via Medicare/DVA schedules. There are zero out-of-pocket gap fees when referred by a GP with a valid D904 referral.',
        },
      },
      {
        '@type': 'Question',
        name: 'What allied health disciplines does Koina Allied Health provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Koina provides six core disciplines: Occupational Therapy (daily living skills, home modifications, assistive technology), Physiotherapy (mobility, falls prevention, neurological rehab), Speech Pathology (swallowing, dysphagia mealtime plans, speech & AAC), Positive Behaviour Support (Functional Behaviour Assessments and NDIS Behaviour Support Plans), Therapy Assistance (AHAs for routine reinforcement), and Clinical Assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Koina complete Functional Capacity Assessments (FCA) for NDIS plan reviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our AHPRA-registered Occupational Therapists complete comprehensive Functional Capacity Assessments (FCA), Specialist Disability Accommodation (SDA) and Supported Independent Living (SIL) housing suitability assessments, and complex Assistive Technology (AT Level 1–4) applications with thorough, NDIS-compliant clinical documentation.',
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Koina Allied Health',
    url: 'https://koina.com.au',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://koina.com.au/articles?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HeroSection />
      <WhoWeSupport />
      <ServicesBento />
      <WhyKoina />
      <HomeFAQ />
      <ClosingCTA />
    </>
  );
}
