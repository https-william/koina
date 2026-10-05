import React, { Suspense } from 'react';
import { Metadata } from 'next';
import IntakeForm from '@/components/intake/IntakeForm';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DoodleUnderline, DoodleWaveDivider } from '@/components/brand/Doodles';

export const metadata: Metadata = {
  title: 'Make an Allied Health Referral | NDIS, Aged Care & DVA Intake | Koina Allied Health',
  description:
    'Submit an allied health referral for Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, or RN Clinical Assessments across Queensland. 24-hour review turnaround.',
  alternates: {
    canonical: '/referral',
  },
  openGraph: {
    title: 'Make a Referral | Koina Allied Health Queensland',
    description:
      'Fast, simple allied health intake across Queensland. Direct clinical intake review within 24 hours for NDIS, Aged Care, DVA, and private referrals.',
    url: 'https://koina.com.au/referral',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function ReferralPage() {
  const referralJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://koina.com.au',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Make a Referral',
            item: 'https://koina.com.au/referral',
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://koina.com.au/referral#contact',
        name: 'Koina Allied Health Intake & Referrals',
        description:
          'Online referral and intake portal for allied health services across Queensland. 24-hour clinical intake review for NDIS, Aged Care, DVA, and private participants.',
        url: 'https://koina.com.au/referral',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Koina Allied Health Central Intake',
          email: 'contact@koina.com.au',
          areaServed: 'Queensland, Australia',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceType: 'Online Allied Health Referral',
            serviceUrl: 'https://koina.com.au/referral',
          },
        },
      },
    ],
  };

  return (
    <div className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(referralJsonLd),
        }}
      />

      {/* Focused Hero Header */}
      <section className="relative pt-10 md:pt-14 pb-6 overflow-hidden bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Make an{' '}
            <span className="relative inline-block text-brand-navy">
              Allied Health
              <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
            </span>{' '}
            Referral
          </h1>
        </div>

        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Main Form Section - Centered & Uncluttered */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="p-12 text-center text-slate-600 bg-white rounded-3xl border border-slate-200">
                Loading referral intake portal...
              </div>
            }
          >
            <IntakeForm />
          </Suspense>

          {/* Trust, Governance & Next Steps (Positioned below the form so it doesn't obstruct intake) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Who Can Refer */}
            <div className="p-6 rounded-2xl bg-canvas border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Who Can Submit Referrals
              </h2>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                  <span>Support Coordinators & Plan Managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                  <span>GPs, Hospital Teams & Medical Specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                  <span>Home Care Package & Aged Care Providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                  <span>Participants, Nominees & Family Carers</span>
                </li>
              </ul>
            </div>

            {/* Box 2: What Happens Next */}
            <div className="p-6 rounded-2xl bg-canvas border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                What Happens Next
              </h2>
              <ol className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Intake triage within 24 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Therapist capacity confirmed in client suburb.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Service agreement issued & first session booked.</span>
                </li>
              </ol>
            </div>

            {/* Box 3: Privacy & Security */}
            <div className="p-6 rounded-2xl bg-canvas border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Privacy & Data Security
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                All client health information is stored securely in accordance with the Australian Privacy Principles (APPs) and the Privacy Act 1988. Information is strictly used for clinical intake triage.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                <span>Australian Health Privacy Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <DoodleWaveDivider fillColor="#0B1E2E" className="mt-20" />
      </section>
    </div>
  );
}
