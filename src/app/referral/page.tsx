import React, { Suspense } from 'react';
import { Metadata } from 'next';
import IntakeForm from '@/components/intake/IntakeForm';
import { Mail, Clock, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

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
      <section className="relative pt-12 md:pt-16 pb-10 overflow-hidden bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
            <span>Queensland Allied Health Referral Intake</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Make an{' '}
            <span className="relative inline-block text-brand-navy">
              Allied Health
              <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
            </span>{' '}
            Referral
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto mb-6">
            Accepting referrals for NDIS participants, Home Care Package recipients, DVA cardholders, and private clients across Queensland. Clinically triaged within 24 business hours.
          </p>

          {/* Key Intake Assurances */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>24-Hour Review Turnaround</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct NDIS, Aged Care & DVA Billing</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>In-Home & Telehealth Statewide</span>
            </span>
          </div>

          {/* Quick Direct Email Option Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Prefer to send referral documentation directly?
                </p>
                <p className="text-xs text-slate-600">
                  Email NDIS plans, medical summaries or discharge notes to{' '}
                  <a href="mailto:contact@koina.com.au" className="text-brand-navy font-semibold underline hover:text-brand-navy-light">
                    contact@koina.com.au
                  </a>
                </p>
              </div>
            </div>
            <div className="text-xs text-slate-600 font-medium shrink-0 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon – Fri: 9:00 AM – 5:00 PM AEST</span>
            </div>
          </div>
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
