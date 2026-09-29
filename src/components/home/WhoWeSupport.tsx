'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, UserCheck, CheckCircle2, Heart } from 'lucide-react';
import { DoodleUnderline, DoodleHeart, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function WhoWeSupport() {
  const [activeTab, setActiveTab] = useState<'ndis' | 'aged-care' | 'dva' | 'private'>('ndis');

  const pathways = [
    {
      id: 'ndis' as const,
      title: 'NDIS Participants',
      badge: 'Plan & Self-Managed',
      icon: ShieldCheck,
      imageSrc: '/images/cohort-ndis.jpg',
      imageAlt: 'NDIS participants active rehabilitation and capacity building',
      imageTag: 'Active Rehabilitation & Capacity Building',
      summary:
        'Full clinical support for plan-managed and self-managed participants looking to achieve meaningful developmental and functional goals.',
      highlights: [
        'Plan-Managed and Self-Managed NDIS participants',
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
      imageSrc: '/images/cohort-aged-care.jpg',
      imageAlt: 'Older Australians in-home care and supported independence',
      imageTag: 'In-Home Care & Supported Independence',
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
      imageSrc: '/images/cohort-dva.jpg',
      imageAlt: 'Veterans and families dedicated community allied health support',
      imageTag: 'Dedicated Veteran & Community Support',
      summary:
        'Comprehensive clinical assessment and therapy interventions for DVA Gold Card and eligible White Card holders, with straightforward direct billing.',
      highlights: [
        'Gold Card holders (clinically indicated therapy support across all conditions)',
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
      badge: 'Direct Referrals',
      icon: UserCheck,
      imageSrc: '/images/cohort-private.jpg',
      imageAlt: 'Private clients wellness and physical conditioning',
      imageTag: 'Wellness, Movement & Prevention',
      summary:
        'Transparent fee structures for individuals and families requiring direct allied health care without referrals, waitlists, or third-party funding delays.',
      highlights: [
        'No GP referral, NDIS plan, or aged care package required',
        'Private health insurance extras rebates (itemised receipts issued)',
        'Comprehensive initial assessment and collaborative care planning',
        'Direct coordination with your GP or medical specialist',
        'Flexible in-home visits or telehealth video sessions',
      ],
      ctaText: 'Explore Private Care',
      ctaHref: '/funding#private',
    },
  ];

  const currentPathway = pathways.find((p) => p.id === activeTab) || pathways[0];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-brand-sky" />
            <span>Inclusive Care Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.02em] leading-tight mb-4">
            Who We{' '}
            <span className="relative inline-block">
              Support
              <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Whether funded through government schemes, aged care packages, or funded privately — our clinicians tailor support around your daily goals and living environment.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-canvas border border-slate-200 mb-8 max-w-4xl shadow-inner">
          {pathways.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[46px] ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-brand-sky' : 'text-slate-500'}`} />
                <span className="truncate">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Content Card */}
        <div className="rounded-[28px] bg-canvas border border-slate-200 p-7 sm:p-10 shadow-ambient transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>{currentPathway.badge}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                  {currentPathway.title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {currentPathway.summary}
                </p>
              </div>

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

            {/* Right Visual Image & Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {currentPathway.imageSrc && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs mb-1">
                  <Image
                    key={currentPathway.id}
                    src={currentPathway.imageSrc}
                    alt={currentPathway.imageAlt || currentPathway.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-xs font-semibold text-white border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{currentPathway.imageTag}</span>
                  </div>
                </div>
              )}

              <h4 className="font-bold text-base sm:text-lg text-slate-900">
                Start Care Under {currentPathway.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.65]">
                Our intake coordinators review your funding details within 24 business hours to match you with the right clinician in your Queensland region.
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href={`/referral?funding=${currentPathway.id}`}
                  className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-xs min-h-[46px]"
                >
                  <span>Refer for {currentPathway.title}</span>
                  <ArrowRight className="w-4 h-4 text-brand-sky" />
                </Link>

                <Link
                  href={currentPathway.ctaHref}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-navy transition-colors py-1"
                >
                  <span>{currentPathway.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DoodleWaveDivider fillColor="#FAF9F6" className="mt-16" />
    </section>
  );
}
