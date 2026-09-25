import React from 'react';
import { Metadata } from 'next';
import { MapPin, CheckCircle2 } from 'lucide-react';
import {
  DoodleUnderline,
  DoodleWaveDivider,
} from '@/components/brand/Doodles';
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

      {/* Hero Header with Clean Professional Layout */}
      <section className="relative bg-canvas pt-14 md:pt-20 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                <span>Statewide Coverage Across Queensland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.025em] leading-[1.18] mb-5">
                Community & Mobile Care{' '}
                <span className="relative inline-block">
                  Across Queensland
                  <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2.5 left-0" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-[1.75] font-normal mb-7 max-w-2xl">
                We provide in-home therapy, school, and community visits across Queensland, supported by secure statewide telehealth.
              </p>

              {/* Coverage Snapshot Badges */}
              <div className="flex flex-wrap gap-2.5">
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

            {/* Right Professional Delivery Network Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-ambient">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                      <MapPin className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Queensland Network</h3>
                      <p className="text-xs text-slate-500">In-Home, Mobile & Telehealth</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Immediate Capacity
                  </span>
                </div>

                <div className="space-y-2.5 mb-4">
                  <div className="p-3 rounded-xl bg-canvas border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-700 font-medium">Regional Coverage Hubs</span>
                    <span className="text-xs font-bold text-slate-900">12 Key Regions</span>
                  </div>
                  <div className="p-3 rounded-xl bg-canvas border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-700 font-medium">Scheduling Lead Time</span>
                    <span className="text-xs font-bold text-slate-900">Available Within 48–72h</span>
                  </div>
                  <div className="p-3 rounded-xl bg-canvas border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-700 font-medium">Care Settings</span>
                    <span className="text-xs font-bold text-slate-900">Homes, Aged Care, Telehealth</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Our therapists travel directly to your home or connect with you statewide through secure video telehealth.
                </p>
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
