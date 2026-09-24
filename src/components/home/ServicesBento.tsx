import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Accessibility, Heart, MessageSquareText, Sparkles, CheckCircle2 } from 'lucide-react';
import { DoodleSparkle, DoodleUnderline, DoodleWaveDivider } from '@/components/brand/Doodles';
import { OpenDoodleDailyLiving, OpenDoodleMobility, OpenDoodleConversation } from '@/components/brand/OpenDoodlesArt';

export default function ServicesBento() {
  return (
    <section className="relative py-16 md:py-24 bg-canvas overflow-hidden" id="services-snapshot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Multidisciplinary Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25]">
              Core Clinical Disciplines
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-navy-light transition-colors group"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid: 2 Anchors (OT & Physio) + 3 Supporting Cards (PBS, Speech, AHAs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Card 1: Occupational Therapy (OT) - Anchor 1 with OpenDoodleDailyLiving */}
          <div className="lg:col-span-3 rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                  <Accessibility className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shadow-sm">
                    Primary Discipline
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Occupational Therapy
                </h3>
                <OpenDoodleDailyLiving className="w-24 h-24 hidden sm:block shrink-0 -mt-3 -mr-2" />
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-[1.72] mb-8 font-normal">
                Functional capacity evaluations, assistive technology prescription, sensory strategies, and tailored home modifications for independent living.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Functional Capacity Assessments (FCA) & SIL/SDA housing</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Complex assistive technology & equipment trials</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Minor & major home access modifications</span>
                </div>
              </div>
            </div>

            <Link
              href="/services#ot"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-5 border-t border-slate-100"
            >
              <span>Explore Occupational Therapy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Physiotherapy - Anchor 2 with OpenDoodleMobility */}
          <div className="lg:col-span-3 rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shadow-sm">
                  Primary Discipline
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Physiotherapy
                </h3>
                <OpenDoodleMobility className="w-24 h-24 hidden sm:block shrink-0 -mt-3 -mr-2" />
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-[1.72] mb-8 font-normal">
                Mobility rehabilitation, proactive falls prevention, strength rebuilding, and post-operative recovery tailored to realistic daily routines.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Gait re-training and safe community mobility</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Proactive falls prevention & environmental balance</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0 mt-0.5" />
                  <span>Neurological, orthopaedic & post-surgical rehabilitation</span>
                </div>
              </div>
            </div>

            <Link
              href="/services#physio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-5 border-t border-slate-100"
            >
              <span>Explore Physiotherapy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Speech Pathology with OpenDoodleConversation */}
          <div className="lg:col-span-2 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                  <MessageSquareText className="w-5 h-5" />
                </div>
                <OpenDoodleConversation className="w-16 h-12 shrink-0 -mt-1 -mr-1" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Speech Pathology
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.65] mb-5">
                Comprehensive swallowing assessments, speech and language articulation therapy, and augmentative communication (AAC) implementation.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 mb-6 font-medium">
                <p>• Mealtime & dysphagia plans</p>
                <p>• AAC device prescription & setup</p>
                <p>• Expressive & receptive communication</p>
              </div>
            </div>
            <Link
              href="/services#speech"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-4 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: Positive Behaviour Support */}
          <div className="lg:col-span-2 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors mb-5 shadow-sm">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Positive Behaviour Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.65] mb-5">
                Empathetic, evidence-based behaviour support plans designed to reduce restrictive practices and enhance quality of life.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 mb-6 font-medium">
                <p>• Functional Behaviour Assessments</p>
                <p>• Interim & Comprehensive BSPs</p>
                <p>• Carer & team coaching</p>
              </div>
            </div>
            <Link
              href="/services#pbs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-4 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 5: Allied Health Assistants */}
          <div className="lg:col-span-2 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors mb-5 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Therapy Assistants (AHAs)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-[1.65] mb-5">
                Cost-effective, consistent reinforcement of therapy routines under the direct guidance of your primary clinicians.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 mb-6 font-medium">
                <p>• Frequent routine reinforcement</p>
                <p>• Extends funding budget lifespan</p>
                <p>• Supervised community practice</p>
              </div>
            </div>
            <Link
              href="/services#aha"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-4 border-t border-slate-100"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into White Section */}
      <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
    </section>
  );
}
