import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Mail,
} from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider, HeroBackgroundLineArt, CareConnectionLineArt } from '@/components/brand/Doodles';
import { OpenDoodleConnectingHands, OpenDoodleCareHero } from '@/components/brand/OpenDoodlesArt';

export const metadata: Metadata = {
  title: 'Funding & Eligibility | NDIS, Aged Care, DVA & Private | Koina Allied Health',
  description:
    'However you are funded, Koina Allied Health can help. Navigating healthcare funding across NDIS, Home Care Packages, DVA Gold/White Cards, and Private care in Queensland.',
};

export default function FundingPage() {
  const fundingStreams = [
    {
      id: 'ndis',
      title: 'NDIS (National Disability Insurance Scheme)',
      badge: 'Registered Provider',
      icon: ShieldCheck,
      whoItsFor:
        'NDIS participants with self-managed, plan-managed, or NDIA-managed (agency-managed) funding.',
      coveredServices: [
        'Capacity Building (Improved Daily Living, Improved Relationships)',
        'Core Supports (via Therapy Assistants)',
        'Functional Capacity Assessments (FCA) for plan reviews',
        'Assistive Technology assessments and trials',
        'Home modification assessments',
      ],
      howToStart:
        'Send us your plan details or have your Support Coordinator / Plan Manager reach out.',
    },
    {
      id: 'aged-care',
      title: 'Aged Care (Home Care Packages & CHSP)',
      badge: 'HCP Levels 1–4 & CHSP',
      icon: HeartHandshake,
      whoItsFor:
        'Older Australians with a Home Care Package (Levels 1–4), Commonwealth Home Support Programme (CHSP) referral, or residential aged care funding.',
      coveredServices: [
        'Mobility and falls prevention',
        'Home safety and modification assessments',
        'Chronic condition management',
        'Equipment prescription (walkers, shower chairs, transfer aids)',
        'Ongoing allied health assistant visits',
      ],
      howToStart:
        'Speak with your Care Manager or package provider, or contact us directly.',
    },
    {
      id: 'dva',
      title: "DVA (Department of Veterans' Affairs)",
      badge: 'DVA Approved Provider',
      icon: Award,
      whoItsFor:
        'DVA Gold Card holders (all clinically necessary conditions); DVA White Card holders (for accepted conditions).',
      coveredServices: [
        'Physiotherapy, Occupational Therapy, Speech Pathology',
        'Assistive equipment prescription and home safety trials',
        'Direct billing to DVA with zero out-of-pocket costs for eligible services',
      ],
      howToStart:
        'Obtain a referral from your GP (D904 form) and contact our intake team.',
    },
    {
      id: 'private',
      title: 'Private & Self-Funded',
      badge: 'Direct Bookings & Rebates',
      icon: UserCheck,
      whoItsFor:
        'Anyone who wants to access allied health services without a third-party funding body.',
      coveredServices: [
        'All allied health services available privately with zero waitlists',
        'Health fund rebates may apply through your private health insurance (extras cover) — itemised receipts provided',
        'Medicare Chronic Disease Management (CDM / EPC) plans accepted with a GP referral',
      ],
      howToStart:
        'Book directly online or via email — no referral needed for private self-funded care.',
    },
  ];

  const faqs = [
    {
      q: 'Do I need a doctor referral to see a Koina clinician?',
      a: 'If you are paying privately or using an NDIS plan, no referral is required — you can book directly. If you are accessing services through the DVA, an eligible GP referral (Form D904) is required. For Medicare CDM/EPC rebates, your GP must prepare a Chronic Disease Management plan prior to treatment.',
    },
    {
      q: 'How does billing work for NDIS participants?',
      a: 'For plan-managed participants, we send invoices directly to your nominated plan management agency. For self-managed participants, we issue itemized receipts for reimbursement via the myplace portal. For NDIA-managed participants, we claim directly through the PRODA provider portal. All rates align strictly with the official NDIS Price Guide.',
    },
    {
      q: 'Can Koina clinicians bill directly to my Home Care Package provider?',
      a: 'Yes. We establish a third-party billing agreement directly with your Home Care Package provider or Care Manager. Invoices are settled straight from your package budget without requiring out-of-pocket payments.',
    },
    {
      q: 'What if I am unsure which funding pathway I qualify for?',
      a: 'Our intake team is specially trained to assist you. Simply reach out via our contact form or email contact@koina.com.au, and we will walk through your circumstances and outline available options.',
    },
  ];

  return (
    <div className="bg-canvas min-h-screen">
      {/* Hero Header with Two-Column Open Doodles Monoline Art */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        {/* Subtle Background Line Art */}
        <HeroBackgroundLineArt />
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-20 -rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                <span>Funding & Eligibility Guide</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-6">
                However You&apos;re Funded,{' '}
                <span className="relative inline-block">
                  We Can Help
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-[1.75] font-normal mb-8 max-w-2xl">
                Navigating healthcare funding in Australia can be complicated. We keep it straightforward. Here&apos;s a clear breakdown of the funding streams we work with, what&apos;s covered, and how to get started.
              </p>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap gap-2.5">
                {fundingStreams.map((stream) => (
                  <a
                    key={stream.id}
                    href={`#${stream.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:border-brand-navy hover:text-brand-navy transition-all shadow-xs"
                  >
                    <span>{stream.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3 text-brand-sky" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Open Doodles Monoline Art */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-[36px] bg-white border border-slate-200 shadow-ambient flex flex-col items-center text-center">
                <div className="w-full flex justify-center">
                  <OpenDoodleConnectingHands className="w-64 h-56 text-brand-navy" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 w-full">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                    Care Coordination
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    We bridge communication between participants, care managers, and funding bodies seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Stream Cards */}
        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Funding Stream Cards with Generous Spacing & WCAG AAA Contrast */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {fundingStreams.map((stream) => {
            const Icon = stream.icon;
            return (
              <div
                key={stream.id}
                id={stream.id}
                className="scroll-mt-28 rounded-[32px] bg-canvas border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-ambient transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shrink-0 shadow-sm p-3">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mb-0.5">
                          {stream.badge}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {stream.title}
                        </h2>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Who It&apos;s For:
                      </h3>
                      <p className="text-sm sm:text-base text-slate-800 leading-[1.7] font-normal">
                        {stream.whoItsFor}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3.5">
                        Covered Services & Support:
                      </h3>
                      <ul className="space-y-3">
                        {stream.coveredServices.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 leading-snug">
                            <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
                    <div>
                      <h4 className="font-bold text-base text-slate-900 mb-2">
                        How to Get Started:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-[1.7]">
                        {stream.howToStart}
                      </p>
                    </div>

                    <div className="space-y-3 pt-5 border-t border-slate-100">
                      <Link
                        href={`/contact?funding=${stream.id}`}
                        className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm transition-all min-h-[48px]"
                      >
                        <span>Start Referral Under {stream.badge}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>

                      <a
                        href="mailto:contact@koina.com.au"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors min-h-[46px]"
                      >
                        <Mail className="w-4 h-4 text-brand-navy" />
                        <span>contact@koina.com.au</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organic Wave Divider Transitioning into FAQs Canvas */}
        <DoodleWaveDivider fillColor="#FBF8F2" className="mt-20" />
      </section>

      {/* Funding FAQs & Guidance */}
      <section className="relative py-20 md:py-28 bg-canvas overflow-hidden">
        <DoodleBotanicalWatermark className="bottom-12 right-6 w-80 h-80 text-brand-navy opacity-20 -rotate-45" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-brand-navy" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight">
              Frequently Asked Funding Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-[28px] bg-white border border-slate-200 p-7 sm:p-9 space-y-3 shadow-sm hover:shadow-ambient transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-slate-800 leading-[1.72]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Not Sure Where You Fit? Callout with Open Doodles Monoline Art */}
          <div className="mt-16 rounded-[36px] bg-white border border-slate-200 p-10 sm:p-14 shadow-ambient">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                  <DoodleSparkle className="w-3.5 h-3.5 text-brand-navy" />
                  <span>Personalized Guidance</span>
                </div>
                <h3 className="font-bold text-2xl sm:text-3xl text-slate-900">
                  Not Sure Where You Fit?
                </h3>
                <p className="text-base text-slate-800 leading-[1.75]">
                  Many of the people we speak to aren&apos;t sure which funding stream applies, or have multiple types of support in place. That&apos;s completely normal. Get in touch with our intake team — we&apos;ll help you figure out what you&apos;re eligible for and the best way to access the care you need.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="btn-interactive inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm sm:text-base shadow-sm transition-all min-h-[50px]"
                  >
                    <span>Contact Intake Team</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <OpenDoodleCareHero className="w-56 h-48 text-brand-navy" />
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning Seamlessly into Dark Footer */}
        <DoodleWaveDivider fillColor="#0B1E2E" className="mt-20" />
      </section>
    </div>
  );
}
