import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Accessibility,
  Activity,
  Heart,
  MessageSquareText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  CalendarCheck,
  HeartHandshake,
  Home,
  Building2,
  Video,
} from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleBotanicalWatermark, DoodleWaveDivider } from '@/components/brand/Doodles';
import {
  OpenDoodleDailyLiving,
  OpenDoodleMobility,
  OpenDoodleConversation,
  OpenDoodleConnectingHands,
  OpenDoodleCareHero,
} from '@/components/brand/OpenDoodlesArt';

export const metadata: Metadata = {
  title: 'Our Services | Allied Health Disciplines | Koina Allied Health',
  description:
    'Multidisciplinary allied health care across Queensland. Occupational Therapy, Physiotherapy, Speech Pathology, Positive Behaviour Support, and Therapy Assistants delivered at home, in clinic, or via telehealth.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'ot',
      title: 'Occupational Therapy',
      icon: Accessibility,
      art: OpenDoodleDailyLiving,
      tagline: 'Supporting you to do the things you want and need to do in everyday life.',
      inclusions: [
        'Functional Capacity Assessments (FCA) for NDIS plan reviews',
        'Home modification assessments',
        'Assistive technology (equipment) prescription and trials',
        'Daily living skills development (cooking, dressing, personal care)',
        'Sensory processing and regulation strategies',
        'Workplace and ergonomic assessments',
      ],
      delivered: 'At home, in clinic, in community settings, or via telehealth.',
      ctaService: 'Occupational Therapy',
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      icon: Activity,
      art: OpenDoodleMobility,
      tagline: 'Helping you move better, manage pain, and build strength and confidence.',
      inclusions: [
        'Mobility and gait assessments',
        'Falls prevention and balance training',
        'Post-surgery and post-hospital rehabilitation',
        'Pain management and musculoskeletal therapy',
        'Exercise programs tailored to your home environment',
        'Neurological rehabilitation (stroke, Parkinson’s, MS)',
      ],
      delivered: 'At home, in clinic, or via telehealth.',
      ctaService: 'Physiotherapy',
    },
    {
      id: 'speech',
      title: 'Speech Pathology',
      icon: MessageSquareText,
      art: OpenDoodleConversation,
      tagline: 'Supporting clear communication, safe swallowing, and confidence at every age.',
      inclusions: [
        'Swallowing assessments and dysphagia management',
        'Mealtime management plans (NDIS-compliant)',
        'Speech, language, and voice therapy',
        'Augmentative and Alternative Communication (AAC) — assessment, trial, and training',
        'Social communication and pragmatic language support',
        'Cognitive communication therapy following brain injury or stroke',
      ],
      delivered: 'At home, in clinic, or via telehealth.',
      ctaService: 'Speech Pathology',
    },
    {
      id: 'pbs',
      title: 'Positive Behaviour Support (PBS)',
      icon: Heart,
      art: OpenDoodleConnectingHands,
      tagline: 'Compassionate, person-centred behaviour support that respects dignity and builds on strengths.',
      inclusions: [
        'Functional Behaviour Assessments (FBA)',
        'Interim and Comprehensive Behaviour Support Plans (NDIS Commission-compliant)',
        'Restrictive practice reduction and elimination strategies',
        'Training and coaching for families, carers, and support teams',
        'Environment and routine adjustments to reduce stress and anxiety',
      ],
      delivered: 'In-home and community settings — where behaviours happen.',
      ctaService: 'Positive Behaviour Support',
    },
    {
      id: 'aha',
      title: 'Therapy Assistants (Allied Health Assistants)',
      icon: Sparkles,
      art: OpenDoodleCareHero,
      tagline: 'Making your therapy plan go further with structured, consistent support.',
      inclusions: [
        'Carrying out therapy programs designed by your OT, Physio, or Speech Pathologist',
        'More frequent sessions at a lower cost to stretch your funding',
        'Practising everyday skills in real-world settings (home, community, gym)',
        'Progress monitoring and regular check-ins with your supervising clinician',
      ],
      delivered: 'In-home and community settings, under clinical supervision.',
      ctaService: 'Therapy Assistants',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Get in touch',
      desc: "Reach out via our website or email. Tell us a bit about what you're looking for, your funding, and where you're located.",
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'First conversation',
      desc: 'Our intake team will talk through your needs, confirm funding and eligibility, and match you with the right clinician in your area.',
      icon: PhoneCall,
    },
    {
      number: '03',
      title: 'A plan that fits',
      desc: 'Your clinician meets you — at home, in clinic, or online — to understand your goals, conduct an assessment, and build a care plan that works for your life.',
      icon: CalendarCheck,
    },
    {
      number: '04',
      title: 'Ongoing care',
      desc: "Regular sessions, progress reviews, and joined-up communication with your support network. We're here for the long haul.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-canvas min-h-screen">
      {/* Header */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-[0.035] -rotate-12 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Confirmed Disciplines</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.16] mb-6">
              Our{' '}
              <span className="relative inline-block">
                Services
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal">
              We deliver multidisciplinary allied health care across Queensland. Each service is tailored to your individual goals, delivered where you feel most comfortable.
            </p>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Services List Deep-Dive with Open Doodles Monoline Art */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const ArtComponent = service.art;
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
                      {/* Monoline Art in Card Header */}
                      <ArtComponent className="w-20 h-16 sm:w-24 sm:h-20 shrink-0 hidden sm:block -mt-2 -mr-1" />
                    </div>

                    <p className="text-base sm:text-[17px] text-slate-800 font-semibold leading-[1.6]">
                      {service.tagline}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        What We Do:
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

                  <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-slate-200/90 space-y-5 shadow-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Where Delivered:
                      </span>
                      <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                        {service.delivered}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.ctaService)}`}
                        className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-sm min-h-[46px]"
                      >
                        <span>Enquire for {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>

                      <Link
                        href="/locations"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors min-h-[44px]"
                      >
                        <span>Check Regional Queensland Availability</span>
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

      {/* How It Works (4-Step Journey from Page 6) */}
      <section className="relative py-16 md:py-24 bg-canvas overflow-hidden">
        <DoodleBotanicalWatermark className="bottom-10 right-4 w-72 h-72 text-brand-navy opacity-[0.03] rotate-90 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Patient Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
              From your initial enquiry through to ongoing care, we make each step transparent, comfortable, and predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-[32px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-ambient hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy shadow-sm">
                        <StepIcon className="w-6 h-6 text-brand-navy" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-brand-navy shadow-sm">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-[1.7]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Section */}
        <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
      </section>

      {/* Delivery Modes */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Care Where You Feel Most Comfortable
            </h2>
            <p className="text-base text-slate-700 leading-[1.72]">
              Choose the delivery setting that best aligns with your health goals, routine, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-canvas rounded-[32px] p-8 border border-slate-200/90 shadow-ambient text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy mx-auto shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">In-Home & Mobile Visits</h3>
              <p className="text-sm text-slate-700 leading-[1.72]">
                Our clinicians travel directly to your home, school, day centre, or workplace across 13 Queensland regions.
              </p>
            </div>

            <div className="bg-canvas rounded-[32px] p-8 border border-slate-200/90 shadow-ambient text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy mx-auto shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Clinic Sessions</h3>
              <p className="text-sm text-slate-700 leading-[1.72]">
                Dedicated clinical facilities at our Gold Coast Headquarters with modern therapy equipment and sensory spaces.
              </p>
            </div>

            <div className="bg-canvas rounded-[32px] p-8 border border-slate-200/90 shadow-ambient text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-sky mx-auto shadow-sm">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Secure Telehealth</h3>
              <p className="text-sm text-slate-700 leading-[1.72]">
                High-definition, encrypted video sessions available statewide for regional communities and continuous check-ins.
              </p>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into Deep Navy Footer */}
        <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" />
      </section>
    </div>
  );
}
