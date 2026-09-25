'use client';

import React from 'react';
import {
  MapPin,
  ShieldCheck,
  Video,
  Activity,
  ClipboardCheck,
  HeartHandshake,
  Sparkles,
  Clock,
} from 'lucide-react';

const TICKER_ITEMS = [
  {
    icon: MapPin,
    text: 'In-Home & Mobile Visits Across Queensland',
    highlight: 'Statewide',
  },
  {
    icon: ShieldCheck,
    text: 'Zero Billing Surprises — Transparent Pricing',
    highlight: 'Direct Billing',
  },
  {
    icon: Video,
    text: 'Secure Telehealth Available Statewide',
    highlight: 'Flexible',
  },
  {
    icon: Activity,
    text: 'Occupational Therapy • Physiotherapy • Speech Pathology',
    highlight: 'Multidisciplinary',
  },
  {
    icon: ClipboardCheck,
    text: 'RN-Led Clinical & Continence Assessments',
    highlight: 'Nursing & FCA',
  },
  {
    icon: HeartHandshake,
    text: 'Positive Behaviour Support & Therapy Assistants',
    highlight: 'Compassionate',
  },
  {
    icon: Sparkles,
    text: 'NDIS (Plan & Self-Managed), Aged Care & DVA Support',
    highlight: 'All Funding',
  },
  {
    icon: Clock,
    text: 'Fast 24-Hour Clinical Intake Review',
    highlight: 'Rapid Response',
  },
];

export default function ValuePropsTicker() {
  return (
    <div className="relative w-full overflow-hidden py-3 bg-white/90 backdrop-blur-sm border-y border-slate-200/90 shadow-xs">
      {/* Subtle fade edges for smooth entrance/exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-canvas to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-canvas to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-3 select-none">
        {/* Render twice for continuous infinite seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-canvas border border-slate-200 hover:border-brand-navy hover:bg-white transition-all shadow-xs group shrink-0 cursor-default"
            >
              <div className="w-6 h-6 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-sky/15 text-brand-navy shrink-0">
                {item.highlight}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
