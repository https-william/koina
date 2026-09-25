import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Compass, ShieldCheck } from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider, DoodleUnderline } from '@/components/brand/Doodles';

export default function WhyKoina() {
  const anchors = [
    {
      icon: HeartHandshake,
      title: 'Mutual Trust',
      body: 'Care shaped in genuine partnership. We listen first, understand what matters to your daily routine, and work collaboratively alongside you and your support network.',
    },
    {
      icon: Compass,
      title: 'Steady Clinical Presence',
      body: 'Qualified therapists delivering dependable in-home, mobile, and telehealth visits across Queensland — providing consistent clinical support when you need it.',
    },
    {
      icon: ShieldCheck,
      title: 'Practical Accountability',
      body: 'Clear communication, transparent funding usage across NDIS, Aged Care, and DVA, and actionable, jargon-free clinical reports delivered on time.',
    },
  ];

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
            <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
            <span>The Koina Difference</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-5">
            Healthcare Built on{' '}
            <span className="relative inline-block">
              Trust & Accountability
              <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-[1.72] max-w-2xl mx-auto font-normal">
            Healthcare works best when it is built on mutual trust, steady clinical presence, and practical accountability.
          </p>
        </div>

        {/* 3 Core Anchor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {anchors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[32px] bg-canvas border border-slate-200/90 p-8 sm:p-9 shadow-ambient flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm mb-6">
                    <Icon className="w-6 h-6 text-brand-navy" />
                  </div>

                  <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mb-2">
                    Focus 0{idx + 1}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-[1.72] font-normal">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Referral Action Bar */}
        <div className="rounded-[28px] bg-canvas border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Ready to arrange allied health support?
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              Immediate capacity for NDIS, Home Care Packages, DVA, and private referrals statewide.
            </p>
          </div>

          <Link
            href="/referral"
            className="btn-interactive shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm shadow-sm min-h-[46px]"
          >
            <span>Make a Referral</span>
            <ArrowRight className="w-4 h-4 text-brand-sky" />
          </Link>
        </div>
      </div>

      {/* Organic Wave Divider Transitioning into Service Area Checker */}
      <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
    </section>
  );
}
