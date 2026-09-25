import React from 'react';
import Link from 'next/link';
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
      description:
        'Functional capacity evaluations, assistive technology prescription, home modifications, and daily living skills.',
      highlights: [
        'Functional Capacity Assessments (FCA)',
        'Home modifications & environmental access',
        'Assistive technology trials & prescription',
      ],
      href: '/services#ot',
      linkText: 'Explore Occupational Therapy',
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      badge: 'AHPRA Registered',
      icon: Activity,
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
      description:
        'Comprehensive swallowing assessments, speech articulation therapy, and augmentative communication (AAC).',
      highlights: [
        'Mealtime safety & dysphagia plans',
        'AAC device prescription & setup',
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
    <section className="relative py-14 md:py-20 bg-canvas overflow-hidden" id="services-snapshot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-3 shadow-xs">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Multidisciplinary Allied Health</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-tight">
              Core Clinical Disciplines
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors group"
          >
            <span>View Full Service Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Compact, Space-Efficient 3-Column Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center justify-between gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-navy-light transition-colors pt-3.5 border-t border-slate-100"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Referral CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/referral"
            className="btn-interactive inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm shadow-sm min-h-[46px]"
          >
            <span>Make a Referral</span>
            <ArrowRight className="w-4 h-4 text-brand-sky" />
          </Link>
        </div>
      </div>

      {/* Prominent Organic Wave Divider Transitioning into White Section */}
      <DoodleWaveDivider fillColor="#FFFFFF" accentColor="#5591B7" />
    </section>
  );
}
