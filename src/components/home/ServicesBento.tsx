import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Activity,
  Accessibility,
  Heart,
  MessageSquareText,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
} from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function ServicesBento() {
  const disciplines = [
    {
      id: 'ot',
      title: 'Occupational Therapy',
      badge: 'AHPRA Registered',
      icon: Accessibility,
      imageSrc: '/images/service-ot.jpg',
      imageAlt: 'Occupational therapist conducting rehabilitation and daily living assessment',
      imageCaption: 'Clinical Rehabilitation',
      description:
        'Functional capacity evaluations, assistive technology recommendations, home modifications, and daily living skills.',
      highlights: [
        'Functional Capacity Assessments (FCA)',
        'Home modifications & environmental access',
        'Assistive technology trials & recommendations',
      ],
      href: '/services#ot',
      linkText: 'Explore Occupational Therapy',
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      badge: 'AHPRA Registered',
      icon: Activity,
      imageSrc: '/images/service-physio.jpg',
      imageAlt: 'Physiotherapy mobility rehabilitation and strength conditioning session',
      imageCaption: 'Mobility & Wellness',
      description:
        'Mobility rehabilitation, proactive falls prevention, strength rebuilding, and post-operative recovery.',
      highlights: [
        'Gait retraining & community mobility',
        'Proactive falls prevention & balance',
        'Neurological & orthopaedic recovery',
      ],
      href: '/services#physio',
      linkText: 'Explore Physiotherapy',
    },
    {
      id: 'speech',
      title: 'Speech Pathology',
      badge: 'SPA Certified',
      icon: MessageSquareText,
      imageSrc: '/images/service-speech.jpg',
      imageAlt: 'Speech pathologist guiding articulation and communication support',
      imageCaption: 'Communication & Articulation',
      description:
        'Comprehensive swallowing assessments, speech articulation therapy, and augmentative communication (AAC).',
      highlights: [
        'Mealtime safety & dysphagia plans',
        'AAC device assessment & trial',
        'Speech, voice & cognitive communication',
      ],
      href: '/services#speech',
      linkText: 'Explore Speech Pathology',
    },
    {
      id: 'pbs',
      title: 'Positive Behaviour Support',
      badge: 'NDIS Compliant',
      icon: Heart,
      imageSrc: '/images/service-pbs.jpg',
      imageAlt: 'Compassionate positive behaviour support consultation',
      imageCaption: 'Support & Community',
      description:
        'Empathetic, evidence-based behaviour support plans designed to reduce restrictive practices and uphold dignity.',
      highlights: [
        'Functional Behaviour Assessments (FBA)',
        'Interim & Comprehensive BSPs',
        'Support team & family coaching',
      ],
      href: '/services#pbs',
      linkText: 'Explore Behaviour Support',
    },
    {
      id: 'aha',
      title: 'Therapy Assistants (AHAs)',
      badge: 'Clinically Supervised',
      icon: Sparkles,
      imageSrc: '/images/service-aha.jpg',
      imageAlt: 'Allied health assistant reinforcing therapy routine practice',
      imageCaption: 'Community & Routine Practice',
      description:
        'Cost-effective reinforcement of therapy routines under the direct supervision of primary clinicians.',
      highlights: [
        'Frequent exercise & routine practice',
        'Maximises funding budget lifespan',
        'Real-world community skill sessions',
      ],
      href: '/services#aha',
      linkText: 'Explore Therapy Assistance',
    },
    {
      id: 'assessments',
      title: 'Clinical Assessments',
      badge: 'RN & Allied Health',
      icon: ClipboardCheck,
      imageSrc: '/images/service-assessments.jpg',
      imageAlt: 'Registered Nurse performing comprehensive clinical health evaluation',
      imageCaption: 'Clinical Reporting & Reviews',
      description:
        'Rigorous diagnostic assessments, functional capacity reporting, and funding review documentation with fast turnaround.',
      highlights: [
        'Comprehensive Continence Assessments',
        'Supported Independent Living (SIL/SDA)',
        'Assistive Technology Level 1–4 reports',
      ],
      href: '/services#assessments',
      linkText: 'Explore Clinical Assessments',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-xs">
            <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
            <span>Multidisciplinary Allied Health Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Specialised Clinical Services Across Queensland
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Delivering in-home assessments, mobile therapy sessions, and secure telehealth tailored to your individual goals and funding arrangements.
          </p>
        </div>

        {/* 6-Card Services Grid with Fixed Visual Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between shadow-ambient hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  {item.imageSrc && (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-3.5 shadow-xs">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-[10px] font-medium text-white border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{item.imageCaption}</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-700 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-xs font-bold text-brand-navy hover:text-brand-navy-light inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-sky group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/referral?service=${encodeURIComponent(item.title)}`}
                    className="text-[11px] font-semibold text-slate-500 hover:text-brand-navy"
                  >
                    Refer
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Track Referral Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need a multidisciplinary assessment or combined therapy plan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Our clinical intake coordinators collaborate across disciplines to build an integrated care plan with immediate capacity across 13 Queensland hubs.
            </p>
          </div>
          <Link
            href="/referral"
            className="btn-interactive min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-brand-navy-light shrink-0"
          >
            <span>Submit a Referral</span>
            <ArrowRight className="w-4 h-4 text-brand-sky" />
          </Link>
        </div>
      </div>

      <DoodleWaveDivider fillColor="#FFFFFF" className="mt-16" />
    </section>
  );
}
