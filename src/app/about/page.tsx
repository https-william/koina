import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, HeartHandshake, Compass, CheckCircle2, ArrowRight, Award, MapPin, Users, Sparkles } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider, DoodleHeart } from '@/components/brand/Doodles';
import { OpenDoodleConnectingHands, OpenDoodleCareHero } from '@/components/brand/OpenDoodlesArt';

export const metadata: Metadata = {
  title: 'About Us | Healthcare Built Around People | Koina Allied Health',
  description:
    'Learn about Koina Allied Health, our story, human-centered approach, guiding values (Reliability, Clarity, Respect, Craft), and our multidisciplinary clinical team serving Queensland.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Reliability',
      icon: Compass,
      description:
        "We show up when we say we will. We do what we say we'll do. Consistency matters, and we don't take your trust for granted.",
      highlight: 'Dependable, consistent presence',
    },
    {
      title: 'Clarity',
      icon: Sparkles,
      description:
        "No jargon. No fine-print surprises. We explain assessments, plans, and funding in plain English so you're always in control.",
      highlight: 'Plain-English communication',
    },
    {
      title: 'Respect',
      icon: HeartHandshake,
      description:
        "Every person's situation, culture, and goals are different. We meet you where you are and treat you with dignity, always.",
      highlight: 'Person-first dignity & pace',
    },
    {
      title: 'Craft',
      icon: Award,
      description:
        "We're clinicians who take pride in our work. We stay on top of the latest evidence, hone our skills, and hold ourselves to high clinical standards.",
      highlight: 'Evidence-based excellence',
    },
  ];

  const approaches = [
    {
      title: 'Person-centred, always',
      description:
        'Your goals, your preferences, your pace. We design your care around what matters to you, not a standard template.',
    },
    {
      title: 'Consistent clinicians',
      description:
        'We invest in our clinicians so you see the same familiar face visit after visit. No revolving door of therapists.',
    },
    {
      title: 'Joined-up care',
      description:
        'Our occupational therapists, physiotherapists, speech pathologists, and therapy assistants collaborate closely with each other and your broader care team.',
    },
    {
      title: 'Transparent & easy to work with',
      description:
        'Direct billing, clear service agreements, and upfront communication about costs and timelines.',
    },
  ];

  const clinicalRoles = [
    {
      title: 'Occupational Therapists',
      credentials: 'AHPRA Registered',
      description:
        'Specialising in functional capacity evaluations, complex assistive technology trials, SIL/SDA housing suitability, and customized home environmental modifications.',
    },
    {
      title: 'Physiotherapists',
      credentials: 'AHPRA Registered',
      description:
        'Experts in mobility rehabilitation, proactive falls prevention, musculoskeletal recovery, neurological therapies, and restoring practical physical function.',
    },
    {
      title: 'Speech Pathologists',
      credentials: 'SPA Certified',
      description:
        'Specialists in dysphagia swallowing assessments, mealtime safety management, complex AAC prescription, and expressive/receptive language therapy.',
    },
    {
      title: 'Positive Behaviour Support',
      credentials: 'NDIS Commission Registered',
      description:
        'Trained in trauma-informed functional behavior assessments, interim/comprehensive BSP formulations, and systemic reduction of restrictive practices.',
    },
    {
      title: 'Therapy Assistants (AHAs)',
      credentials: 'Clinically Supervised',
      description:
        'Dedicated therapy assistants working directly under primary clinician prescription to deliver high-frequency repetitions, community outings, and cost savings.',
    },
  ];

  return (
    <div className="bg-canvas min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-[0.035] -rotate-12 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.16] mb-6">
              Healthcare Built Around{' '}
              <span className="relative inline-block">
                People, Not Systems
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal">
              We started Koina Allied Health with a simple belief: the best care happens when clinicians listen first, treat people as individuals, and stick around long enough to make a real difference.
            </p>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Our Story Section with Open Doodles Connecting Hands Art */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-sm">
                <DoodleHeart className="w-3.5 h-3.5 text-brand-sky" />
                <span>Our Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25]">
                An Alternative to High-Turnover Care
              </h2>

              <div className="space-y-5 text-base sm:text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Koina was founded to offer an alternative to high-turnover, transactional healthcare. We saw too many people — NDIS participants, older Australians, veterans — dealing with a revolving door of clinicians, confusing paperwork, and care that felt impersonal.
                </p>
                <p>
                  We built Koina to be different: a team of dedicated allied health professionals who are genuinely invested in the communities we serve across Queensland.
                </p>
                <p className="font-medium text-slate-800 bg-canvas p-6 rounded-2xl border border-slate-200/90 leading-[1.72]">
                  The name <strong className="text-brand-navy font-bold">Koina</strong> comes from a shared sense of community and connection — and that&apos;s the standard we hold ourselves to every day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="rounded-[32px] bg-canvas border border-slate-200/90 p-8 sm:p-10 shadow-ambient space-y-6 w-full">
                <div className="flex justify-center pb-2">
                  <OpenDoodleConnectingHands className="w-full max-w-[260px] h-auto" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  The Koina Commitment
                </h3>
                <div className="space-y-4 text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                    <span><strong>Human First:</strong> We align clinical goals with your real-life routines, family dynamics, and home environment.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                    <span><strong>Compliance Fluent:</strong> We navigate NDIS item codes, My Aged Care package rules, and DVA D904 claiming with ease.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                    <span><strong>Continuous Presence:</strong> We prioritise permanent clinician placements so you never experience revolving therapist fatigue.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Canvas Section */}
        <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
      </section>

      {/* Our Approach */}
      <section className="relative py-16 md:py-24 bg-canvas overflow-hidden">
        <DoodleBotanicalWatermark className="bottom-8 left-4 w-72 h-72 text-brand-navy opacity-[0.03] rotate-45 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.75]">
              We reject cookie-cutter care plans. Every Koina program is designed session-by-session around your actual living environment, your personal support system, and your chosen lifestyle milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-ambient hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-[1.72] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Our Guiding Values */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              Our Guiding Values
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
              These four pillars direct every clinical evaluation, team interaction, and patient communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[32px] bg-canvas border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy mb-5 shadow-sm">
                      <Icon className="w-6 h-6 text-brand-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-[1.72] mb-6">
                      {v.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>{v.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Canvas Section */}
        <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
      </section>

      {/* Clinical Leadership & Disciplines */}
      <section className="relative py-16 md:py-24 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
                <Users className="w-3.5 h-3.5 text-brand-navy" />
                <span>Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25]">
                Multidisciplinary Clinical Team
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
              <MapPin className="w-4 h-4 text-brand-navy shrink-0" />
              <span>
                <strong>Headquarters:</strong> Gold Coast, Queensland. In-home and community visits statewide.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinicalRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-ambient flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 shadow-sm">
                      {role.credentials}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-[1.72] mb-6">
                    {role.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-700 font-semibold">
                  Verified Australian Registration
                </div>
              </div>
            ))}
          </div>

          {/* About Page CTA with Resolved Text Selection & High Contrast */}
          <div className="mt-16 rounded-[40px] bg-brand-navy text-white p-10 sm:p-14 text-center max-w-4xl mx-auto shadow-ambient border border-brand-navy relative overflow-hidden">
            <DoodleBotanicalWatermark className="top-0 right-0 w-64 h-64 text-white opacity-[0.05] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Experience Healthcare Centred on You
              </h3>
              <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto mb-8 font-normal leading-[1.75]">
                Speak with our clinical intake team to explore clinician availability in your Queensland suburb.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-interactive px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-brand-navy font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy" />
                </Link>
                <Link
                  href="/services"
                  className="px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base border border-white/20 transition-colors flex items-center justify-center min-h-[48px]"
                >
                  View Services & Scope
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Deep Navy Footer */}
        <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" />
      </section>
    </div>
  );
}
