import React, { Suspense } from 'react';
import { Metadata } from 'next';
import IntakeForm from '@/components/intake/IntakeForm';
import { Mail, Clock, ShieldCheck, CheckCircle2, HeartHandshake, Phone } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

export const metadata: Metadata = {
  title: 'Make a Referral | NDIS, Aged Care & DVA Allied Health Intake | Koina Allied Health',
  description:
    'Make an allied health referral for Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, or Clinical Assessments across Queensland. Rapid 24-hour intake.',
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
      {/* Hero Header */}
      <section className="relative bg-canvas pt-14 md:pt-20 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                <span>Queensland Statewide Intake</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-5">
                Make a{' '}
                <span className="relative inline-block">
                  Referral
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal mb-7 max-w-2xl">
                We accept referrals for NDIS participants, Home Care Package recipients, DVA cardholders, and private clients across Queensland. Our clinical intake team reviews each referral within 24 business hours.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  24-Hour Review Turnaround
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Direct NDIS & DVA Billing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  In-Home & Telehealth Statewide
                </span>
              </div>
            </div>

            {/* Right Clinical Intake Standards Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-ambient space-y-4">
                <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct Clinical Intake</h3>
                    <p className="text-xs text-slate-500">24-Hour Review Turnaround</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">AHPRA-Registered Clinicians</span>
                      <span className="text-slate-600">Experienced allied health therapists and RN specialists.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Simple Funding Setup</span>
                      <span className="text-slate-600">NDIS (Plan & Self), My Aged Care, DVA & Private billing.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Statewide Queensland Scheduling</span>
                      <span className="text-slate-600">In-home visits or secure video telehealth.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Referrals are reviewed within 24 business hours to confirm clinician capacity in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Form Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Main Grid: Referral Form & Intake Support */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Intake Information Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Channels Card */}
              <div className="rounded-[32px] bg-canvas border border-slate-200 p-8 sm:p-10 shadow-ambient space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Central Intake Office
                </h2>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@koina.com.au"
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-navy transition-all group shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <Mail className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Secure Email Referral
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 break-all mt-0.5">
                        contact@koina.com.au
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        Send plans, medical summaries or NDIS documents
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 shadow-xs">
                      <Clock className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Operating Hours
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        Monday – Friday: 9:00 AM – 5:00 PM (AEST)
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        Queensland-wide mobile & in-home service
                      </p>
                    </div>
                  </div>
                </div>

                {/* Who Can Refer Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Who Can Submit a Referral:
                  </span>
                  <ul className="text-xs sm:text-sm text-slate-800 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                      <span>Support Coordinators & Plan Managers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                      <span>General Practitioners (GPs) & Hospital Teams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                      <span>Home Care Package & Aged Care Providers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                      <span>Participants, Families & Self-Referrers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Referral Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-200">
                    Loading referral form...
                  </div>
                }
              >
                <IntakeForm />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning Seamlessly into Dark Footer */}
        <DoodleWaveDivider fillColor="#0B1E2E" className="mt-20" />
      </section>
    </div>
  );
}
