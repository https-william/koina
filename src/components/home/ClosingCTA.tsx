import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Clock } from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function ClosingCTA() {
  return (
    <section className="relative pt-12 md:pt-16 pb-0 bg-canvas overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        {/* Navy container with clean proportion and balanced spacing */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-brand-navy text-white py-10 sm:py-14 px-6 sm:px-12 text-center relative overflow-hidden shadow-ambient border border-brand-navy">
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-4">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Connect with Our Intake Team</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white mb-3.5 leading-tight">
              Let&apos;s Talk About What You Need
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed mb-7 font-normal">
              Whether you are an individual planning allied health care, a family member supporting a loved one, or a support coordinator arranging services, we are here to help.
            </p>

            {/* Balanced CTA Pair */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <Link
                href="/referral"
                className="btn-interactive w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-brand-navy font-bold text-sm shadow-sm transition-all"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4 text-brand-navy" />
              </Link>

              <a
                href="mailto:contact@koina.com.au"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/25 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-sky" />
                <span>contact@koina.com.au</span>
              </a>
            </div>

            {/* Availability Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-sky" />
              <span>Monday to Friday, 9:00 AM – 5:00 PM AEST • Fast 24h Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into Deep Navy Footer */}
      <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" />
    </section>
  );
}
