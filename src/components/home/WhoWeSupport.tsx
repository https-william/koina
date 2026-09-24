'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, UserCheck, CheckCircle2 } from 'lucide-react';
import { DoodleUnderline, DoodleHeart, DoodleBotanicalWatermark, DoodleWaveDivider } from '@/components/brand/Doodles';
import { OpenDoodleConnectingHands } from '@/components/brand/OpenDoodlesArt';

export default function WhoWeSupport() {
  const [activeTab, setActiveTab] = useState<'ndis' | 'aged-care' | 'dva' | 'private'>('ndis');

  const pathways = [
    {
      id: 'ndis' as const,
      title: 'NDIS Participants',
      badge: 'Registered Provider',
      icon: ShieldCheck,
      summary:
        'Full clinical support for plan-managed, self-managed, and agency-managed participants looking to achieve meaningful developmental and functional goals.',
      highlights: [
        'Plan-Managed, Self-Managed & Agency-Managed participants',
        'Capacity Building (Improved Daily Living & Relationships)',
        'Core Supports (Allied Health Assistant supervision)',
        'Transparent line-item billing strictly aligned with the NDIS Price Guide',
        'Detailed Functional Capacity Assessments (FCA) for annual plan reviews',
      ],
      ctaText: 'Explore NDIS Pathways',
      ctaHref: '/funding#ndis',
    },
    {
      id: 'aged-care' as const,
      title: 'Older Australians',
      badge: 'HCP & CHSP Partner',
      icon: HeartHandshake,
      summary:
        'Supporting Home Care Package (HCP Levels 1–4), Commonwealth Home Support Programme (CHSP), and privately funded clients to remain safe, capable, and confident at home.',
      highlights: [
        'Home Care Packages (HCP Levels 1, 2, 3, and 4)',
        'Commonwealth Home Support Programme (CHSP)',
        'Proactive falls prevention, balance training & mobility aids',
        'Minor & major home modifications (grab rails, ramps, accessible bathrooms)',
        'Direct coordination with your Care Manager or package provider',
      ],
      ctaText: 'Explore Aged Care Pathways',
      ctaHref: '/funding#aged-care',
    },
    {
      id: 'dva' as const,
      title: 'Veterans & Families',
      badge: 'DVA Approved',
      icon: Award,
      summary:
        'Comprehensive clinical assessment and treatments for DVA Gold Card and eligible White Card holders, with straightforward direct billing.',
      highlights: [
        'Gold Card holders (clinically indicated treatment across all conditions)',
        'Eligible White Card holders (accepted service-related conditions)',
        'Direct claiming through Medicare/DVA with zero out-of-pocket gaps',
        'Rehabilitation, chronic pain management & assistive technology',
        'Simple GP referral processing (Form D904)',
      ],
      ctaText: 'Explore DVA Services',
      ctaHref: '/funding#dva',
    },
    {
      id: 'private' as const,
      title: 'Private Clients',
      badge: 'Direct Booking',
      icon: UserCheck,
      summary:
        'Transparent fee structures for individuals and families requiring direct allied health care without referrals, waitlists, or third-party funding delays.',
      highlights: [
        'No GP referral, NDIS plan, or aged care package required',
        'Private health insurance extras rebates (itemised receipts issued)',
        'Medicare Chronic Disease Management (CDM / EPC) plans',
        'Direct clinical bookings with rapid appointment turnaround',
        'Clear upfront fee transparency with zero hidden costs',
      ],
      ctaText: 'Explore Private Care',
      ctaHref: '/funding#private',
    },
  ];

  const currentPathway = pathways.find((p) => p.id === activeTab) || pathways[0];
  const IconComponent = currentPathway.icon;

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle organic watermark */}
      <DoodleBotanicalWatermark className="top-12 left-4 w-72 h-72 text-brand-navy opacity-[0.03] rotate-12 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        {/* Intro: Care Centred on People, Not Paperwork with Hand-drawn Underline & Connecting Hands Art */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-slate-100">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleHeart className="w-4 h-4 text-brand-sky" />
              <span>Our Foundation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-6">
              Care Centred on{' '}
              <span className="relative inline-block">
                People, Not Paperwork
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-[17px] text-slate-700 leading-[1.75]">
              <p>
                Koina Allied Health was built around one foundational truth: genuine healthcare depends entirely on the relationship behind it. Our clinicians take the time to understand what actually matters to your day-to-day life — whether that is maintaining independence at home, regaining functional movement, supporting communication, or simply having a reliable, familiar face to call on.
              </p>
              <p>
                We work seamlessly alongside NDIS participants, older Australians accessing Aged Care supports, veterans and their families through the DVA, and private clients. One dedicated team, holding the same unwavering clinical standard, whichever door you walk through.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-6 rounded-[28px] bg-canvas border border-slate-200/80 shadow-soft w-full max-w-sm flex flex-col items-center text-center">
              <OpenDoodleConnectingHands className="w-full max-w-[240px] h-auto" />
              <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-800">
                Shared Purpose & Respect
              </p>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                Care that is a true partnership with you and your family.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading for Funding Pathways */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-brand-navy block mb-1.5">
              Funding Pathways
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Who We Support
            </h3>
          </div>
          <p className="text-sm text-slate-700 max-w-md leading-relaxed">
            Select a pathway to see how we streamline intake and billing for your specific circumstances.
          </p>
        </div>

        {/* Audience Pathway Tabs with Generous Spacing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pathways.map((pathway) => {
            const isCurrent = pathway.id === activeTab;
            const TabIcon = pathway.icon;
            return (
              <button
                key={pathway.id}
                onClick={() => setActiveTab(pathway.id)}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between min-h-[104px] ${
                  isCurrent
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                    : 'bg-canvas text-slate-800 hover:bg-slate-100 border-slate-200/90 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <TabIcon className={`w-5 h-5 ${isCurrent ? 'text-brand-sky' : 'text-brand-navy'}`} />
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                      isCurrent ? 'bg-white/20 text-white' : 'bg-white text-slate-800 border border-slate-200'
                    }`}
                  >
                    {pathway.badge}
                  </span>
                </div>
                <span className="font-semibold text-sm sm:text-base leading-snug">
                  {pathway.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pathway Details Card with Relaxed Spacing & High Contrast */}
        <div className="rounded-[32px] bg-canvas border border-slate-200/80 p-7 sm:p-10 shadow-ambient">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                  <IconComponent className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {currentPathway.title}
                  </h4>
                  <span className="text-xs font-semibold text-brand-navy">
                    {currentPathway.badge}
                  </span>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-[1.72]">
                {currentPathway.summary}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Support Inclusions & Workflow:
                </p>
                <ul className="space-y-3">
                  {currentPathway.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-800 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center gap-5 bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <h5 className="font-bold text-base sm:text-lg text-slate-900">
                Start Care Under {currentPathway.title}
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.65]">
                Our intake coordinators review your funding details within 24 business hours to match you with the right clinician in your Queensland region.
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href={`/contact?funding=${currentPathway.id}`}
                  className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm min-h-[46px]"
                >
                  <span>Submit {currentPathway.title} Referral</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  href={currentPathway.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors min-h-[44px]"
                >
                  <span>{currentPathway.ctaText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into Canvas Section */}
      <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
    </section>
  );
}
