'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider, DoodleUnderline } from '@/components/brand/Doodles';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Referrals & Intake',
      question: 'How do I make a referral to Koina Allied Health?',
      answer:
        'You can submit an online referral directly through our website at koina.com.au/referral in under two minutes, or email your plan details, medical summaries, or GP documentation to contact@koina.com.au. We accept referrals from Support Coordinators, Plan Managers, GPs, Aged Care Providers, and self-referring participants. Our Queensland clinical coordination team reviews every referral within 24 business hours.',
    },
    {
      category: 'Queensland Mobile Coverage',
      question: 'Does Koina provide in-home visits across Queensland?',
      answer:
        'Yes. Koina Allied Health operates a mobile-first care model. Qualified therapists travel directly to homes, workplaces, schools, day centres, and aged care facilities across Queensland — including South East Queensland (Brisbane, Gold Coast, Ipswich, Sunshine Coast, Logan), Darling Downs (Toowoomba), Wide Bay, Central Queensland, Townsville, and Cairns — supported by secure statewide telehealth.',
    },
    {
      category: 'Funding & Eligibility',
      question: 'Which funding categories does Koina Allied Health accept?',
      answer:
        'We support participants across four primary pathways: (1) NDIS participants (Plan-Managed, Self-Managed, and Agency/NDIA-Managed); (2) Home Care Packages (HCP Levels 1, 2, 3, 4 and CHSP); (3) Department of Veterans’ Affairs (DVA Gold and White Card direct billing); and (4) Private / Self-Funded clients eligible for private health insurance extras or Medicare Chronic Disease Management (CDM/EPC) rebates.',
    },
    {
      category: 'DVA Veterans',
      question: 'Are DVA Gold and White Card holders covered with zero out-of-pocket costs?',
      answer:
        'Yes. For DVA Gold Card holders (for all clinically indicated conditions) and eligible White Card holders (for accepted conditions), Koina Allied Health bills the Department of Veterans’ Affairs directly via Medicare/DVA schedules. There are zero out-of-pocket gap fees when referred by a GP with a valid D904 referral.',
    },
    {
      category: 'Clinical Disciplines',
      question: 'What allied health disciplines does Koina Allied Health provide?',
      answer:
        'Koina provides six core disciplines: Occupational Therapy (daily living skills, home modifications, assistive technology), Physiotherapy (mobility, falls prevention, neurological rehab), Speech Pathology (swallowing, dysphagia mealtime plans, speech & AAC), Positive Behaviour Support (Functional Behaviour Assessments and NDIS Behaviour Support Plans), Therapy Assistance (AHAs for routine reinforcement), and Clinical Assessments.',
    },
    {
      category: 'NDIS Plan Reviews',
      question: 'Can Koina complete Functional Capacity Assessments (FCA) for NDIS plan reviews?',
      answer:
        'Yes. Our AHPRA-registered Occupational Therapists complete comprehensive Functional Capacity Assessments (FCA), Specialist Disability Accommodation (SDA) and Supported Independent Living (SIL) housing suitability assessments, and complex Assistive Technology (AT Level 1–4) applications with thorough, NDIS-compliant clinical documentation.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-brand-sky" />
            <span>Questions & Clear Answers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
            Frequently Asked{' '}
            <span className="relative inline-block">
              Questions
              <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-[1.72] max-w-2xl mx-auto font-normal">
            Direct, plain-English answers about our Queensland in-home visits, NDIS billing, DVA coverage, and intake turnaround.
          </p>
        </div>

        {/* FAQ Accordion List with Strict WCAG Contrast and Semantic Markup */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-[24px] border transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? 'bg-canvas border-brand-navy/30 shadow-ambient'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-brand-navy text-white rotate-180' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-700 leading-[1.75] font-normal border-t border-slate-200/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Referral Banner below FAQs */}
        <div className="mt-12 rounded-[28px] bg-canvas border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Have another question for our clinical intake team?
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              Speak with a Queensland coordinator or submit your referral online.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:contact@koina.com.au"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-navy" />
              <span>Email Us</span>
            </a>
            <Link
              href="/referral"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span>Make a Referral</span>
              <ArrowRight className="w-4 h-4 text-brand-sky" />
            </Link>
          </div>
        </div>
      </div>

      {/* Organic Wave Divider Transitioning into Canvas Section */}
      <DoodleWaveDivider fillColor="#FAF9F6" accentColor="#5591B7" />
    </section>
  );
}
