'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, HeartHandshake, MapPin } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';
import ValuePropsTicker from '@/components/home/ValuePropsTicker';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-14 pb-0 bg-canvas">
      {/* Dynamic Video Background with Soft Canvas Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter saturate-110 contrast-105"
        >
          <source src="/videos/home-hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/90 to-canvas/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Label with Handcrafted Sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold mb-3 shadow-xs">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Community & In-Home Healthcare Across Queensland</span>
            </div>

            {/* Main Headline: "Allied Health for Every Stage of Life" */}
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.14] mb-4">
              Allied Health for{' '}
              <span className="relative inline-block">
                Every Stage of Life
                <DoodleUnderline className="text-brand-sky w-full h-3.5 -bottom-2.5 sm:-bottom-3 left-0" />
              </span>
            </h1>

            {/* Subheadline with plain, warm terminology */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mb-6 font-normal">
              Koina Allied Health supports individuals, families, older Australians, and veterans across Queensland — through the NDIS, Aged Care, DVA, or privately. Allied health delivered where you feel most comfortable: in-home, mobile, or via telehealth across Queensland.
            </p>

            {/* CTA Button Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/referral"
                className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 min-h-[46px]"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-colors min-h-[46px] shadow-xs"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Dimension Column: Dynamic Video Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px] rounded-[28px] overflow-hidden bg-slate-900 border-2 border-white/80 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/home-hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

                {/* Live Status Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>In-Home & Mobile Care</span>
                </div>

                {/* Bottom Overlay Summary */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-navy mb-0.5">
                    <span>Queensland Outreach</span>
                    <span className="text-emerald-700 font-semibold">Immediate Capacity</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Therapists visit your home, school, aged care, or connect statewide via secure telehealth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Value Propositions Ticker Carousel */}
        <div className="mt-8 pt-4">
          <div className="mb-4">
            <ValuePropsTicker />
          </div>

          {/* Quick Trust Badges with Strict Legal Compliance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                NDIS (Plan & Self-Managed)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                My Aged Care & CHSP Partner
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <HeartHandshake className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                DVA Approved (Gold & White)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
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
