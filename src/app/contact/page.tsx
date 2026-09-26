import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  DoodleUnderline,
  DoodleSparkle,
  DoodleWaveDivider,
} from '@/components/brand/Doodles';
import ContactFormClient from '@/components/contact/ContactFormClient';

export const metadata: Metadata = {
  title: 'Contact Us | Koina Allied Health Queensland',
  description:
    'Get in touch with Koina Allied Health central coordination. Direct email, operating hours, client referral intake, and in-home care delivery across Queensland.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Koina Allied Health Queensland',
    description:
      'Contact our clinical coordination team for general inquiries or to discuss in-home allied health care across Queensland.',
    url: 'https://koina.com.au/contact',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function ContactPage() {
  const contactJsonLd = {
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
            name: 'Contact Us',
            item: 'https://koina.com.au/contact',
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': 'https://koina.com.au/contact#webpage',
        name: 'Contact Koina Allied Health',
        description:
          'Contact details and general inquiry channel for Koina Allied Health in Queensland.',
        url: 'https://koina.com.au/contact',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'Koina Allied Health',
          email: 'contact@koina.com.au',
          telephone: '+61',
          areaServed: 'Queensland, Australia',
        },
      },
    ],
  };

  return (
    <div className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd),
        }}
      />

      {/* Main Header & Immediate Contact Spots */}
      <section className="relative pt-12 md:pt-16 pb-12 overflow-hidden bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Title & Subtitle */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-xs">
              <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
              <span>Central Queensland Care Coordination</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Get in Touch with{' '}
              <span className="relative inline-block text-brand-navy">
                Koina
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Have questions regarding clinical disciplines, funding arrangements, or local therapist capacity? Reach out to our central team directly or send an inquiry below.
            </p>
          </div>

          {/* High-Visibility Contact Spotlight Cards (Above the fold) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Card 1: Direct Email */}
            <a
              href="mailto:contact@koina.com.au"
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-navy shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              aria-label="Send direct email to contact@koina.com.au"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-3 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                  Direct Email
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-navy transition-colors mt-0.5 break-all">
                  contact@koina.com.au
                </p>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Reviewed within 24 business hours</span>
              </p>
            </a>

            {/* Card 2: Operating Hours */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                  Operating Hours
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  Mon – Fri: 9:00 AM – 5:00 PM
                </p>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 font-medium">
                Australian Eastern Standard Time (AEST)
              </p>
            </div>

            {/* Card 3: Fast-Track Referral */}
            <Link
              href="/referral"
              className="group p-5 rounded-2xl bg-brand-navy text-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              aria-label="Go to the client referral page"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-sky mb-3 group-hover:bg-white group-hover:text-brand-navy transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-sky block">
                  Client Intake
                </span>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Make a Referral
                </p>
              </div>
              <p className="text-xs text-slate-200 mt-3 pt-3 border-t border-white/15 flex items-center gap-1.5 font-medium">
                <span>Immediate capacity across 13 regions</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-sky group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>

            {/* Card 4: Service Delivery */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                  Delivery Model
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  In-Home, Mobile & Telehealth
                </p>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 font-medium">
                Therapists visit homes across Queensland
              </p>
            </div>
          </div>
        </div>

        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-4" />
      </section>

      {/* Main Content: Care Image, Support Journey & Inquiry Form */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Team Photo & Intake Process (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Care Team Image Card */}
              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 shadow-ambient bg-slate-100 group">
                <div className="relative w-full h-[360px] sm:h-[420px]">
                  <Image
                    src="/images/contact-team.jpg"
                    alt="Koina Allied Health care coordination team member assisting client referrals in Queensland"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  {/* Image Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <p className="text-xs font-semibold text-slate-900">
                        Queensland Care Intake Active
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Direct clinician triage for NDIS, Aged Care, DVA & Private participants
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens After You Reach Out */}
              <div className="rounded-[28px] bg-canvas border border-slate-200 p-6 sm:p-7 space-y-4">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-navy" />
                  <span>What happens next?</span>
                </h2>

                <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Clinician Review:</strong>
                      <span>Your inquiry or referral is assessed within 24 business hours.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Local Matching:</strong>
                      <span>We confirm clinician capacity in your specific Queensland suburb.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Booking & Care Plan:</strong>
                      <span>We confirm appointment times and provide clear service agreements.</span>
                    </div>
                  </li>
                </ol>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href="/referral"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-navy-light underline"
                  >
                    <span>Have full client details ready? Use the 3-step referral form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: General Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-white border border-slate-200 p-7 sm:p-10 shadow-ambient space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-1">
                    Send a Message
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    General Inquiries & Support
                  </h2>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Fill out the form below and our care coordination team will respond within 24 business hours.
                  </p>
                </div>

                <ContactFormClient />
              </div>
            </div>
          </div>
        </div>

        <DoodleWaveDivider fillColor="#0B1E2E" className="mt-20" />
      </section>
    </div>
  );
}
