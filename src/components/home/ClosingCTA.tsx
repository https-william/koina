import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import KoinaLogo from '@/components/brand/KoinaLogo';
import { DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function ClosingCTA() {
  return (
    <section className="relative pt-16 md:pt-24 pb-0 bg-canvas overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Navy container with subtle ambient styling and high-contrast text */}
        <div className="rounded-[40px] bg-brand-navy text-white p-10 sm:p-16 text-center relative overflow-hidden shadow-ambient border border-brand-navy">
          {/* Subtle line art accents */}
          <DoodleBotanicalWatermark className="top-0 right-0 w-72 h-72 text-white opacity-[0.05] pointer-events-none" />
          <DoodleBotanicalWatermark className="bottom-0 left-0 w-72 h-72 text-white opacity-[0.04] -rotate-90 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-8">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Queensland Statewide Intake & Triage</span>
            </div>

            <div className="mb-8 flex justify-center">
              <KoinaLogo variant="dark" size="md" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white mb-6 leading-[1.2]">
              Let&apos;s Talk About What You Need
            </h2>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-100 max-w-2xl mx-auto leading-[1.75] mb-10 font-normal">
              Whether you are an individual planning your care, a family member supporting a loved one, or a support coordinator arranging services for a participant, we are here to help. Reach out today for an honest conversation with our intake team — no obligation, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href="/referral"
                className="btn-interactive w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-brand-navy font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4 text-brand-navy" />
              </Link>

              <a
                href="mailto:contact@koina.com.au"
                className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base border border-white/25 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-sky" />
                <span>contact@koina.com.au</span>
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-200">
              <Clock className="w-4 h-4 text-brand-sky" />
              <span>Monday to Friday, 9:00 AM – 5:00 PM AEST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into Deep Navy Footer */}
      <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" />
    </section>
  );
}
