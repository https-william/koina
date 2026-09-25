import React, { Suspense } from 'react';
import { Metadata } from 'next';
import IntakeForm from '@/components/intake/IntakeForm';
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider, HeroBackgroundLineArt, CareConnectionLineArt } from '@/components/brand/Doodles';
import { OpenDoodleConversation } from '@/components/brand/OpenDoodlesArt';

export const metadata: Metadata = {
  title: 'Contact Us | Start the Conversation | Koina Allied Health',
  description:
    "Let's talk about what you need. Reach out to Koina Allied Health for NDIS, Aged Care, DVA, or private allied health services across Queensland.",
};

export default function ContactPage() {
  const regions = [
    {
      zone: 'South East Queensland',
      cities: 'Gold Coast, Brisbane, Ipswich, Sunshine Coast, Moreton Bay, Redland, Logan',
    },
    {
      zone: 'Darling Downs',
      cities: 'Toowoomba and surrounds',
    },
    {
      zone: 'Wide Bay & Central',
      cities: 'Bundaberg, Rockhampton, Mackay',
    },
    {
      zone: 'North & Far North Queensland',
      cities: 'Townsville, Cairns',
    },
  ];

  return (
    <div className="bg-canvas min-h-screen">
      {/* Hero Header with Two-Column Open Doodles Monoline Art */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        {/* Subtle Background Line Art */}
        <HeroBackgroundLineArt />
        <CareConnectionLineArt className="top-8 right-6 w-96 h-80 hidden lg:block" />
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-20 -rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                <span>Start the Conversation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-6">
                Let&apos;s Talk About{' '}
                <span className="relative inline-block">
                  What You Need
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-[1.75] font-normal mb-8 max-w-2xl">
                Whether you&apos;re ready to get started, exploring options for a family member, or looking for allied health support for a client — reach out. We&apos;re here to help you navigate every step.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  24-Hour Response
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Direct Intake Support
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  No Complex Waiting Lists
                </span>
              </div>
            </div>

            {/* Right Open Doodles Monoline Art */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-[36px] bg-white border border-slate-200 shadow-ambient flex flex-col items-center text-center">
                <div className="w-full flex justify-center">
                  <OpenDoodleConversation className="w-64 h-56 text-brand-navy" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 w-full">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                    Warm, Open Communication
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Speak directly with a caring coordinator who understands Queensland allied health funding and care delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Form Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Main Grid: Contact Info & Interactive Intake Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Contact & Regional Details Column (5 cols) */}
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
                        Direct Email
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 break-all mt-0.5">
                        contact@koina.com.au
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        Secure referrals & general enquiries
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
                        Excluding Queensland public holidays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Operational Headquarters
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        Gold Coast, Queensland
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        In-home & community visits delivered statewide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Locations Across Queensland */}
              <div className="rounded-[32px] bg-canvas border border-slate-200 p-8 sm:p-10 shadow-ambient space-y-5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-navy" />
                  <span>Queensland Service Regions</span>
                </h3>
                <p className="text-sm text-slate-800 leading-relaxed">
                  Our mobile clinicians provide comprehensive community coverage across:
                </p>

                <div className="space-y-3 pt-2">
                  {regions.map((reg) => (
                    <div key={reg.zone} className="border-b border-slate-200 pb-3">
                      <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        {reg.zone}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 mt-0.5 font-medium leading-relaxed">
                        {reg.cities}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs sm:text-sm text-slate-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                  <span>Immediate capacity available across all zones</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Intake Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-12 text-center text-slate-600 font-medium">Loading intake form...</div>}>
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
