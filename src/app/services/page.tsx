import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Accessibility,
  Activity,
  Heart,
  MessageSquareText,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  CalendarCheck,
  HeartHandshake,
  Home,
  Video,
  Compass,
  Award,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider, DoodleHeart } from '@/components/brand/Doodles';

export const metadata: Metadata = {
  title: 'Allied Health Services Queensland | OT, Physio, Speech, PBS & Assessments',
  description:
    'Multidisciplinary in-home, mobile & telehealth allied health services across Queensland. Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support (PBS), AHAs, and Clinical Assessments.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Allied Health Services Queensland | Koina Allied Health',
    description:
      'In-home, mobile and telehealth allied health disciplines across Queensland. Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, and Clinical Assessments.',
    url: 'https://koina.com.au/services',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: 'ot',
      title: 'Occupational Therapy',
      icon: Accessibility,
      videoSrc: '/videos/physical-therapy.mp4',
      videoTag: 'Rehabilitation & Everyday Skills',
      tagline: 'Functional capacity evaluations, equipment trials, and home modifications supporting everyday independence.',
      inclusions: [
        'Functional Capacity Assessments (FCA) for NDIS plan reviews and funding justification',
        'Assistive technology & equipment trials, clinical justification, and recommendations',
        'Home modification assessments (grab rails, access ramps, accessible bathrooms)',
        'Daily living skills development (cooking, dressing, personal routines, and community access)',
        'Sensory processing, regulation and ergonomic home strategies',
        'Supported Independent Living (SIL) and SDA housing suitability assessments',
      ],
      delivered: 'In-home visits, mobile community settings, or via telehealth across Queensland.',
      ctaService: 'Occupational Therapy',
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      icon: Activity,
      videoSrc: '/videos/yoga-mobility.mp4',
      videoTag: 'Mobility, Strength & Balance',
      tagline: 'Mobility rehabilitation, musculoskeletal recovery, and physical conditioning delivered in your home.',
      inclusions: [
        'Mobility, gait, transfers, and posture assessments',
        'Musculoskeletal recovery, pain management, and physical conditioning programs',
        'Proactive falls prevention and balance retraining',
        'Post-surgery, post-hospital and injury rehabilitation',
        'Home-tailored exercise programs to maintain functional independence',
        'Neurological rehabilitation (stroke, Parkinson’s, MS, cerebral palsy)',
      ],
      delivered: 'In-home visits, mobile visits, or via telehealth across Queensland.',
      ctaService: 'Physiotherapy',
    },
    {
      id: 'speech',
      title: 'Speech Pathology',
      icon: MessageSquareText,
      videoSrc: '/videos/speech-therapy.mp4',
      videoTag: 'Swallowing, Feeding & Communication',
      tagline: 'Specialised support for dysphagia, swallowing safety, and clear communication therapy.',
      inclusions: [
        'Comprehensive dysphagia swallowing assessments and safe feeding management',
        'Mealtime management plans (NDIS Quality & Safeguards compliant)',
        'Communication therapy, speech articulation, and voice rehabilitation',
        'Augmentative and Alternative Communication (AAC) — assessment, trial, and setup',
        'Social communication and pragmatic language support across all ages',
        'Cognitive communication therapy following stroke or acquired brain injury',
      ],
      delivered: 'In-home visits, mobile visits, or via telehealth across Queensland.',
      ctaService: 'Speech Pathology',
    },
    {
      id: 'pbs',
      title: 'Positive Behaviour Support (PBS)',
      icon: Heart,
      videoSrc: '/videos/group-therapy.mp4',
      videoTag: 'Empathetic Behaviour Support',
      tagline: 'Compassionate, person-centred behaviour support that respects dignity and builds on strengths.',
      inclusions: [
        'Functional Behaviour Assessments (FBA)',
        'Interim and Comprehensive Behaviour Support Plans (NDIS Commission-compliant)',
        'Restrictive practice reduction and elimination strategies',
        'Hands-on coaching and guidance for families, carers, and support teams',
        'Environmental and routine adjustments to reduce stress and anxiety',
        'Trauma-informed, neuroaffirming clinical approaches',
      ],
      delivered: 'In-home and mobile community settings — where daily life happens.',
      ctaService: 'Positive Behaviour Support',
    },
    {
      id: 'aha',
      title: 'Therapy Assistants (Allied Health Assistants)',
      icon: Sparkles,
      videoSrc: '/videos/therapy-assistant.mp4',
      videoTag: 'Routine Practice & Community Engagement',
      tagline: 'Making your therapy plan go further with structured, consistent support.',
      inclusions: [
        'Carrying out exercise and skill programs developed by your OT, Physio, or Speech Pathologist',
        'More frequent sessions at a lower cost to stretch your funding budget',
        'Practising everyday skills in real-world settings (home, local shops, community)',
        'Ongoing progress monitoring with regular supervising clinician check-ins',
        'Assisting with mobility routines and assistive technology practice',
      ],
      delivered: 'In-home and mobile community visits, under clinical supervision.',
      ctaService: 'Therapy Assistants',
    },
    {
      id: 'assessments',
      title: 'Clinical Assessment Specialists (RN & Allied Health)',
      icon: ClipboardCheck,
      videoSrc: '/videos/clinical-assessment.mp4',
      videoTag: 'RN Evaluations & Diagnostic Reports',
      tagline: 'Registered Nurse (RN) led complex clinical evaluations, continence assessments, and comprehensive diagnostic reports.',
      inclusions: [
        'Registered Nurse (RN) led complex clinical health and nursing assessments',
        'Comprehensive Continence Assessments, product trials, and tailored recommendations',
        'Functional Capacity Assessments (FCA) for NDIS scheduled plan reviews',
        'Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA) assessments',
        'Assistive Technology (AT Level 1–4) clinical evidence and scope-of-works reports',
        'Aged Care (Home Care Package Levels 1–4) nursing reviews and reablement plans',
      ],
      delivered: 'In-home, mobile visits, or via telehealth across Queensland with prompt turnaround.',
      ctaService: 'Clinical Assessments',
    },
  ];

  const values = [
    {
      title: 'Reliability',
      icon: Compass,
      description:
        "We show up when scheduled. Consistency and steady clinical presence build the foundation of meaningful progress.",
      highlight: 'Dependable, steady presence',
    },
    {
      title: 'Clarity',
      icon: Sparkles,
      description:
        "No jargon or surprises. We explain assessments, care plans, and funding usage in plain English so you remain in control.",
      highlight: 'Plain-English communication',
    },
    {
      title: 'Respect',
      icon: HeartHandshake,
      description:
        "Every person’s routine, culture, and goals are unique. We meet you where you are and respect your dignity at all times.",
      highlight: 'Person-first dignity',
    },
    {
      title: 'Craft',
      icon: Award,
      description:
        "Our clinicians take genuine pride in their clinical craft, holding high standards of evidence-based allied healthcare.",
      highlight: 'Evidence-based excellence',
    },
  ];

  const approaches = [
    {
      title: 'Person-centred, always',
      description:
        'Your goals, your preferences, and your pace. We design your care around what actually matters to your everyday routine.',
    },
    {
      title: 'Joined-up care',
      description:
        'Our occupational therapists, physiotherapists, speech pathologists, PBS practitioners, and therapy assistants collaborate closely with each other and your support network.',
    },
    {
      title: 'Transparent & accountable',
      description:
        'Direct billing, clear service agreements, and upfront communication about clinical goals, reports, and funding timelines.',
    },
  ];

  const clinicalDisciplinesOverview = [
    {
      title: 'Occupational Therapists',
      credentials: 'AHPRA Registered',
      description:
        'Functional capacity evaluations, equipment trials, SIL/SDA housing suitability, and home environmental modifications.',
    },
    {
      title: 'Physiotherapists',
      credentials: 'AHPRA Registered',
      description:
        'Mobility rehabilitation, falls prevention, musculoskeletal recovery, neurological therapies, and functional conditioning.',
    },
    {
      title: 'Speech Pathologists',
      credentials: 'SPA Certified',
      description:
        'Dysphagia swallowing assessments, mealtime safety management, AAC trials & recommendations, and communication therapy.',
    },
    {
      title: 'Positive Behaviour Support',
      credentials: 'NDIS Compliant Behaviour Support',
      description:
        'Functional behaviour assessments, comprehensive BSP formulations, and practical reduction of restrictive practices.',
    },
    {
      title: 'Therapy Assistants (AHAs)',
      credentials: 'Clinically Supervised',
      description:
        'Supervised assistants delivering high-frequency repetitions, exercise routines, community practice, and cost-effective support.',
    },
    {
      title: 'Registered Nurses (RN) & Assessment Specialists',
      credentials: 'AHPRA Registered Nurses',
      description:
        'Registered Nurse (RN) led complex clinical assessments, continence evaluations, Functional Capacity Assessments (FCA), and detailed review reports.',
    },
  ];

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://koina.com.au',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://koina.com.au/services',
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Koina Allied Health Clinical Services & Disciplines',
        description:
          'Multidisciplinary in-home, mobile, and telehealth allied health services delivered across Queensland.',
        itemListElement: services.map((svc, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: svc.title,
          url: `https://koina.com.au/services#${svc.id}`,
          description: svc.tagline,
        })),
      },
    ],
  };

  return (
    <div className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      {/* Header with Dynamic Video Background */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        {/* Dynamic Video Background with High Visibility and Readable Contrast Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 filter saturate-105 contrast-105"
          >
            <source src="/videos/physical-therapy.mp4" type="video/mp4" />
          </video>
          {/* Gentle gradient wash ensuring crystal-clear readability while video is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-canvas/95 via-canvas/80 to-canvas/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Multidisciplinary Allied Health</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.16] mb-6">
              Our{' '}
              <span className="relative inline-block">
                Services
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal">
              We deliver comprehensive in-home, mobile, and telehealth allied health care across Queensland. Each service is tailored around your individual routine, goals, and funding pathway.
            </p>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Services List Deep-Dive */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-[32px] bg-canvas border border-slate-200/90 p-8 sm:p-10 shadow-ambient hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                            Discipline 0{index + 1}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-base sm:text-[17px] text-slate-800 font-semibold leading-[1.6]">
                      {service.tagline}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        What We Deliver:
                      </h3>
                      <ul className="space-y-3">
                        {service.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 leading-snug">
                            <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 space-y-4 shadow-sm overflow-hidden">
                    {service.videoSrc && (
                      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xs">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={service.videoSrc} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-xs font-semibold text-white border border-white/20">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{service.videoTag}</span>
                        </div>
                      </div>
                    )}

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Service Delivery:
                      </span>
                      <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                        {service.delivered}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                      <Link
                        href={`/referral?service=${encodeURIComponent(service.ctaService)}`}
                        className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm min-h-[46px]"
                      >
                        <span>Make a Referral for {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>

                      <Link
                        href="/locations"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors min-h-[44px]"
                      >
                        <span>Check Queensland Coverage</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organic Wave Divider Transitioning into Canvas Section */}
        <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
      </section>

      {/* How It Works (With Embedded Referral CTA in Step 01 Tile as Mandated by CEO) */}
      <section className="relative py-16 md:py-24 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Referral & Intake Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
              From your initial referral through to ongoing sessions, we keep each step straightforward, transparent, and predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Step 1 with Embedded Make a Referral Button */}
            <div className="rounded-[32px] bg-white border-2 border-brand-navy/20 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all relative">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-navy text-white shadow-sm">
                    STEP 01
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Get in touch
                </h3>
                <p className="text-sm text-slate-700 leading-[1.7] mb-6">
                  Submit an online referral with your contact details, funding category, and requested allied health discipline.
                </p>
              </div>

              {/* CEO Action Mandate: Direct Make a Referral Button inside Step 1 */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/referral"
                  className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm"
                >
                  <span>Make a Referral</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-sky" />
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm">
                    <PhoneCall className="w-6 h-6 text-brand-navy" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-brand-navy shadow-sm">
                    STEP 02
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  First conversation
                </h3>
                <p className="text-sm text-slate-700 leading-[1.7]">
                  Our clinical intake team reviews your details, confirms funding verification, and matches you with a qualified clinician.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm">
                    <CalendarCheck className="w-6 h-6 text-brand-navy" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-brand-navy shadow-sm">
                    STEP 03
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  A plan that fits
                </h3>
                <p className="text-sm text-slate-700 leading-[1.7]">
                  Your clinician visits in-home or connects via telehealth to understand your goals, complete assessments, and build a tailored care plan.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm">
                    <HeartHandshake className="w-6 h-6 text-brand-navy" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-brand-navy shadow-sm">
                    STEP 04
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Ongoing care
                </h3>
                <p className="text-sm text-slate-700 leading-[1.7]">
                  Regular sessions, clear reporting, and collaborative communication with your family, support coordinators, and care team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Multidisciplinary Clinical Team Section (Moved from About into Services) */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
              <span>Clinical Qualifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              Our Multidisciplinary Team
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
              All Koina clinicians are fully qualified, insured, and registered with their respective Australian regulatory boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinicalDisciplinesOverview.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-canvas border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      {item.credentials}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-navy" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-[1.7] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Canvas Section */}
        <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
      </section>

      {/* Our Approach & Guiding Values (Moved from About into Services) */}
      <section className="relative py-16 md:py-24 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Our Approach */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleHeart className="w-3.5 h-3.5 text-brand-sky" />
              <span>Clinical Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              Our Clinical Approach
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
              Healthcare works best when it is built on mutual trust, steady clinical presence, and practical accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {approaches.map((app) => (
              <div
                key={app.title}
                className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-200 shadow-ambient"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {app.title}
                </h3>
                <p className="text-sm text-slate-700 leading-[1.7]">
                  {app.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guiding Values */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Our Guiding Values
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              The four principles that guide every client interaction, assessment, and therapy session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white rounded-[28px] p-7 border border-slate-200 shadow-ambient flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm mb-5">
                      <ValIcon className="w-5 h-5 text-brand-navy" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-[1.65] mb-5">
                      {val.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-brand-navy">
                    {val.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Delivery Modes Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Service Delivery Modes (Mobile-only: In-Home & Telehealth, NO Clinic Sessions) */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Care Where You Feel Most Comfortable
            </h2>
            <p className="text-base text-slate-700 leading-[1.72]">
              Our mobile model means high-quality allied health care comes directly to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-canvas rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-ambient space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900">In-Home & Mobile Visits</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.72]">
                Our clinicians travel directly to your home, school, day program, or workplace across Queensland. Practising skills in your natural environment produces the best functional outcomes.
              </p>
            </div>

            <div className="bg-canvas rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-ambient space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-sky shadow-sm">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900">Secure Statewide Telehealth</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.72]">
                High-definition, encrypted video sessions available for participants across regional Queensland, facilitating fast intake, interim reviews, and continuous therapy without travel delays.
              </p>
            </div>
          </div>

          {/* Bottom Make a Referral Banner */}
          <div className="mt-16 text-center">
            <Link
              href="/referral"
              className="btn-interactive inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-base shadow-sm min-h-[50px]"
            >
              <span>Make a Referral</span>
              <ArrowRight className="w-4 h-4 text-brand-sky" />
            </Link>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Deep Navy Footer */}
        <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" />
      </section>
    </div>
  );
}
