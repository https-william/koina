import React from 'react';
import { Metadata } from 'next';
import { MapPin, CheckCircle2 } from 'lucide-react';
import {
  DoodleUnderline,
  DoodleBotanicalWatermark,
  DoodleWaveDivider,
  HeroBackgroundLineArt,
  QueenslandJourneyLineArt,
} from '@/components/brand/Doodles';
import { OpenDoodleMobility } from '@/components/brand/OpenDoodlesArt';
import LocationsDirectoryClient from '@/components/locations/LocationsDirectoryClient';
import { QUEENSLAND_REGIONS } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Queensland Locations & In-Home Allied Health Coverage | Koina Allied Health',
  description:
    'Mobile, in-home, and telehealth allied health coverage across Queensland. Servicing Brisbane, Gold Coast, Sunshine Coast, Ipswich, Caboolture, Toowoomba, Wide Bay, Townsville, and Cairns.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Queensland Locations & In-Home Coverage | Koina Allied Health',
    description:
      'In-home and mobile allied health care delivered directly across Queensland communities. Immediate capacity for NDIS, Aged Care & DVA referrals.',
    url: 'https://koina.com.au/locations',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function LocationsPage() {
  const locationsJsonLd = {
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
            name: 'Locations',
            item: 'https://koina.com.au/locations',
          },
        ],
      },
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://koina.com.au/#organization',
        name: 'Koina Allied Health',
        url: 'https://koina.com.au/locations',
        areaServed: QUEENSLAND_REGIONS.map((region) => ({
          '@type': 'AdministrativeArea',
          name: region.name,
          containedInPlace: {
            '@type': 'State',
            name: 'Queensland',
          },
          description: `Servicing suburbs including ${region.suburbs.join(', ')} with in-home visits and telehealth.`,
        })),
      },
      {
        '@type': 'ItemList',
        name: 'Koina Allied Health Service Delivery Regions in Queensland',
        description:
          'Comprehensive mobile and telehealth allied health service coverage throughout Queensland.',
        itemListElement: QUEENSLAND_REGIONS.map((region, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `${region.name} Allied Health Region`,
          description: `${region.zone} - Mobile in-home visits and telehealth across ${region.suburbs.slice(0, 5).join(', ')} and surrounding communities. Lead time: ${region.estimatedTravelLead}.`,
        })),
      },
    ],
  };

  return (
    <div className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationsJsonLd),
        }}
      />

      {/* Hero Header with Two-Column Open Doodles Monoline Art */}
      <section className="relative bg-canvas pt-16 md:pt-24 pb-0 overflow-hidden">
        {/* Subtle Background Line Art */}
        <HeroBackgroundLineArt />
        <QueenslandJourneyLineArt className="top-8 right-6 w-96 h-80 hidden lg:block" />
        <DoodleBotanicalWatermark className="top-8 right-6 w-80 h-80 text-brand-navy opacity-20 -rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-6 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                <span>Statewide Coverage Across Queensland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-6">
                Community & Mobile Care{' '}
                <span className="relative inline-block">
                  Across Queensland
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-[1.75] font-normal mb-8 max-w-2xl">
                We provide in-home therapy, school, and community visits across Queensland, supported by secure statewide telehealth.
              </p>

              {/* Coverage Snapshot Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Delivering Care Across Queensland
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Mobile & Home Visits
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Telehealth Statewide
                </span>
              </div>
            </div>

            {/* Right Open Doodles Monoline Art */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-[36px] bg-white border border-slate-200 shadow-ambient flex flex-col items-center text-center">
                <div className="w-full flex justify-center">
                  <OpenDoodleMobility className="w-64 h-56 text-brand-navy" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 w-full">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">
                    Mobile Care Delivery
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Our therapists travel directly to homes, schools, workplaces, and aged care residences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider Transitioning into White Directory */}
        <DoodleWaveDivider fillColor="#FFFFFF" className="mt-8" />
      </section>

      {/* Interactive Regional Directory Client Component */}
      <LocationsDirectoryClient />
    </div>
  );
}
