import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Mail, Clock, MapPin, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import {
  DoodleUnderline,
  DoodleSparkle,
  DoodleBotanicalWatermark,
  DoodleWaveDivider,
  HeroBackgroundLineArt,
} from '@/components/brand/Doodles';
import { OpenDoodleConversation } from '@/components/brand/OpenDoodlesArt';
import ContactFormClient from '@/components/contact/ContactFormClient';

export const metadata: Metadata = {
  title: 'Contact Us | Koina Allied Health Queensland',
  description:
    'Get in touch with the Koina Allied Health central team. Inquiries for in-home, mobile, and telehealth allied health services across Queensland.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Koina Allied Health',
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

      {/* Hero Header */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        <HeroBackgroundLineArt />
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-20 -rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
                <DoodleSparkle className="w-3.5 h-3.5 text-brand-sky" />
                <span>Central Queensland Office</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-6">
                Contact{' '}
                <span className="relative inline-block">
                  Koina
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal mb-8 max-w-2xl">
                Have a question about our allied health disciplines, funding pathways, or scheduling? Reach out to our central team today. We are here to help.
              </p>

              {/* Direct Referral Highlight */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Looking to refer a client?
                  </p>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Use our direct 3-step referral form for prompt 24-hour review.
                  </p>
                </div>
                <Link
                  href="/referral"
                  className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-semibold shrink-0 shadow-sm"
                >
                  <span>Make a Referral</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Open Doodles Art */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-[36px] bg-white border border-slate-200 shadow-ambient flex flex-col items-center text-center">
                <div className="w-full flex justify-center">
                  <OpenDoodleConversation className="w-64 h-56 text-brand-navy" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 w-full">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                    Warm, Helpful Guidance
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    We explain funding and therapy options in plain English without corporate jargon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Main Grid: Contact Channels & General Inquiry Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-[32px] bg-canvas border border-slate-200 p-8 sm:p-10 shadow-ambient space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@koina.com.au"
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-navy transition-all group shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <Mail className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Email Central Office
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 break-all mt-0.5">
                        contact@koina.com.au
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        We respond to all inquiries within 24 business hours
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 shadow-xs">
                      <Clock className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Operating Hours
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        Monday – Friday: 9:00 AM – 5:00 PM (AEST)
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        Queensland Statewide Care & Telehealth
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-slate-200 text-brand-navy flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-navy uppercase font-bold tracking-wider">
                        Service Delivery
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                        Mobile, In-Home & Telehealth
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5">
                        Delivering care directly to homes across Queensland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right General Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-white border border-slate-200 p-8 sm:p-10 shadow-ambient space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-1">
                    Send a Message
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    General Inquiries
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Fill out the form below and our team will get back to you shortly.
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
