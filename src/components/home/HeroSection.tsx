'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, HeartHandshake, Zap, MapPin, Users } from 'lucide-react';
import KoinaLogo from '@/components/brand/KoinaLogo';
import { DoodleUnderline, DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider, HeroBackgroundLineArt } from '@/components/brand/Doodles';
import AntiGravityHeroArt from '@/components/brand/AntiGravityHeroArt';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-0 bg-canvas">
      {/* Creative Subtle Background Line Art (Sun arc, continuous care wave, native eucalyptus fronds) */}
      <HeroBackgroundLineArt />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column: Proximity 12px / 16px / 24px */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Label with Handcrafted Sparkle (12px to headline: mb-3) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold mb-3 shadow-xs">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Community & In-Home Healthcare Across Queensland</span>
            </div>

            {/* Main Headline with Hand-Drawn Underline (16px to subtitle: mb-4) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.14] mb-4">
              Allied Health Care for{' '}
              <span className="relative inline-block">
                Every Stage of Life
                <DoodleUnderline className="text-brand-sky w-full h-3.5 -bottom-2.5 sm:-bottom-3 left-0" />
              </span>
            </h1>

            {/* Subheadline (24px to CTA: mb-6) */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mb-6 font-normal">
              Koina Allied Health supports individuals, families, older Australians, and veterans across Queensland — through the NDIS, Aged Care, DVA, or privately. Care delivered where you feel most comfortable: at home, in clinic, or via telehealth.
            </p>

            {/* CTA Button Pair with 2:1 Visual Dominance */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 min-h-[46px]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-colors min-h-[46px] shadow-xs"
              >
                <span>Explore Services & Funding</span>
              </Link>
            </div>

            {/* Fast Capacity Reassurance Callout */}
            <div className="mt-4 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-xs">
              <Zap className="w-4 h-4 text-brand-sky shrink-0" />
              <span>
                <strong className="text-slate-900 font-bold">Immediate Capacity:</strong> Accepting new NDIS, Aged Care, and DVA referrals statewide.
              </span>
            </div>
          </div>

          {/* Right Visual Dimension Column: Anti-Gravity Hero Line Art System */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px]">
              <AntiGravityHeroArt />
            </div>
          </div>
        </div>

        {/* 3 Core Delivery Highlights + Quick Trust Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/80">
          {/* 3 Core Delivery Highlights as a clean 3-card reassurance row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-6 h-6 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                01
              </div>
              <p className="text-xs font-semibold text-slate-800">
                In-Home & Mobile Visits across 13 QLD regions
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-6 h-6 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                02
              </div>
              <p className="text-xs font-semibold text-slate-800">
                Permanent clinical placements — familiar faces who stay
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <div className="w-6 h-6 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                03
              </div>
              <p className="text-xs font-semibold text-slate-800">
                Zero billing surprises — NDIS & DVA transparent pricing
              </p>
            </div>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <ShieldCheck className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                Registered NDIS Provider
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                My Aged Care & CHSP Partner
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <HeartHandshake className="w-4 h-4 text-brand-navy shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                DVA Approved (Gold & White)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <Zap className="w-4 h-4 text-brand-sky shrink-0" />
              <span className="text-xs font-semibold text-slate-800 leading-snug">
                Immediate Statewide Capacity
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
