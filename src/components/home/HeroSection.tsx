'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, HeartHandshake, MapPin } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';
import ValuePropsTicker from '@/components/home/ValuePropsTicker';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 md:pt-18 pb-0 bg-canvas">
      {/* Dynamic Full-Width Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[75%_center] scale-105 filter saturate-105"
        >
          <source src="/videos/general-care-hero.mp4" type="video/mp4" />
        </video>

        {/* Directional scrim: Solid, crystal-clear readable base on left for text; open & transparent on right so the family walking in golden light shines through */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/92 sm:via-canvas/85 md:via-canvas/70 to-canvas/20 md:to-transparent" />
        {/* Soft top and bottom fades for organic visual blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px] sm:min-h-[480px]">
          {/* Main Hero Content (Left Column with High Legibility Scrim) */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start pt-2 sm:pt-4">
            {/* Eyebrow Label with Handcrafted Sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Community & In-Home Healthcare Across Queensland</span>
            </div>

            {/* Main Headline: "Allied Health for Every Stage of Life" */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.12] mb-5">
              Allied Health for{' '}
              <span className="relative inline-block whitespace-nowrap">
                Every Stage of Life
                <DoodleUnderline className="text-brand-sky w-full h-4 -bottom-2 sm:-bottom-2.5 left-0" />
              </span>
            </h1>

            {/* Subheadline with plain, warm terminology */}
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-2xl mb-7 font-medium">
              Koina Allied Health supports individuals, families, older Australians, and veterans across Queensland — through the NDIS, Aged Care, DVA, or privately. Care delivered where you feel most comfortable: in-home, in the community, or via secure telehealth.
            </p>

            {/* CTA Button Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <Link
                href="/referral"
                className="btn-interactive inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-base shadow-md focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 min-h-[48px]"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 text-slate-800 font-semibold text-base hover:bg-white transition-all min-h-[48px] shadow-xs"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Quick Capacity Signal */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Immediate Capacity Across 13 Queensland Hubs</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">Available Within 48–72h</span>
            </div>
          </div>

          {/* Right Column: Kept completely open so the general care background video breathes dynamically */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:block" aria-hidden="true" />
        </div>

        {/* Dynamic Value Propositions Ticker Carousel */}
        <div className="mt-8 pt-4">
          <div className="mb-4">
            <ValuePropsTicker />
          </div>

          {/* Quick Trust Badges with Strict Legal Compliance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                NDIS (Plan & Self-Managed)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                My Aged Care & CHSP Partner
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
              <HeartHandshake className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                DVA Approved (Gold & White)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
              <MapPin className="w-4 h-4 text-brand-sky shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                Telehealth & Mobile QLD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into White Section */}
      <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
    </section>
  );
}
