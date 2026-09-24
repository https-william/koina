import React from 'react';
import { UserCheck, Compass, Home, MessageSquare, CheckCircle } from 'lucide-react';
import { DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function WhyKoina() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Clinicians who stay',
      body: 'We invest in our clinicians so you see the same familiar face visit after visit. No revolving door.',
      detail: 'Consistent therapist-client relationship throughout your whole journey',
    },
    {
      icon: Compass,
      title: 'Straightforward funding support',
      body: "We work across NDIS, Aged Care, DVA, and private care. We help you navigate the system so you don't have to figure it out alone.",
      detail: 'Zero out-of-pocket surprises and transparent service agreements',
    },
    {
      icon: Home,
      title: 'Home, clinic, or telehealth',
      body: 'Care delivered where it makes sense for you — at home, at work, in a local setting, or online.',
      detail: 'In-home, community visits, clinic rooms, or statewide telehealth',
    },
    {
      icon: MessageSquare,
      title: 'Honest communication',
      body: 'No jargon, no runaround. Clear reports, practical advice, and genuine conversations.',
      detail: 'Plain-language reports written for participants, families, and referrers',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle organic watermark */}
      <DoodleBotanicalWatermark className="bottom-12 right-6 w-80 h-80 text-brand-navy opacity-[0.035] -rotate-45 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
            <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
            <span>The Koina Difference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
            Why Choose Koina Allied Health
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.72] max-w-2xl mx-auto font-normal">
            Healthcare works best when it is built on mutual trust, steady clinical presence, and practical accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-[32px] bg-canvas border border-slate-200/90 p-8 sm:p-10 hover:border-slate-300 transition-all shadow-ambient group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-navy shadow-sm">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-[1.72] mb-8 font-normal">
                    {pillar.body}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-brand-sky shrink-0" />
                  <span>{pillar.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Organic Wave Divider Transitioning into Service Area Checker */}
      <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
    </section>
  );
}
