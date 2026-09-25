'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QUEENSLAND_REGIONS } from '@/data/locations';
import {
  Search,
  Home,
  Video,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function LocationsDirectoryClient() {
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const zones = [
    'All',
    'South East Queensland',
    'Darling Downs & Western',
    'Wide Bay & Central',
    'North & Far North Queensland',
  ];

  const filteredRegions = QUEENSLAND_REGIONS.filter((region) => {
    const matchesZone = selectedZone === 'All' || region.zone === selectedZone;
    const matchesQuery =
      region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.suburbs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesZone && matchesQuery;
  });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls: Search & Zone Filters */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-stretch lg:items-center mb-12">
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search suburb or region (e.g., Chermside, Cairns, Toowoomba)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-canvas text-sm sm:text-base text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-xs"
            />
          </div>

          {/* Zone Filter Chips */}
          <div className="flex flex-wrap gap-2.5">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  selectedZone === zone
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                    : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRegions.map((region) => (
            <div
              key={region.name}
              className="rounded-[32px] bg-canvas border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-ambient transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                    {region.zone}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold border border-slate-200 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {region.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {region.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium mb-5">
                  <Clock className="w-4 h-4 text-brand-navy shrink-0" />
                  <span>Scheduling lead time: {region.estimatedTravelLead}</span>
                </div>

                {/* Modes Available */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs">
                    <Home className="w-3.5 h-3.5 text-brand-navy" />
                    In-Home & Mobile
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs">
                    <Video className="w-3.5 h-3.5 text-brand-sky" />
                    Telehealth
                  </span>
                </div>

                {/* Suburbs Covered */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                    Suburbs & Communities:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {region.suburbs.map((suburb) => (
                      <span
                        key={suburb}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 font-medium"
                      >
                        {suburb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`/referral?region=${encodeURIComponent(region.name)}`}
                  className="btn-interactive inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-navy-light transition-colors"
                >
                  <span>Make a Referral</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy" />
                </Link>

                <span className="text-xs text-slate-800 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  Capacity Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredRegions.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-ambient">
            <DoodleSparkle className="w-8 h-8 text-brand-navy mx-auto mb-4" />
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              No matching region found
            </h3>
            <p className="text-sm text-slate-800 mb-6 leading-relaxed">
              Don’t worry! We offer secure telehealth consultations and regional mobile outreach trips across Queensland.
            </p>
            <Link
              href="/referral"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span>Make a Referral for Your Suburb</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        )}

        {/* Regional Micro-Copy Banner */}
        <div className="mt-16 bg-canvas p-8 sm:p-10 rounded-[32px] border border-slate-200 shadow-ambient flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Need care in another Queensland community?
            </h3>
            <p className="text-sm text-slate-800 leading-relaxed max-w-xl">
              Telehealth consultations and regional outreach are available statewide for clients across Queensland.
            </p>
          </div>
          <Link
            href="/referral"
            className="btn-interactive shrink-0 px-7 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm shadow-sm transition-all min-h-[48px] inline-flex items-center gap-2"
          >
            <span>Make a Referral</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>

      {/* Organic Wave Divider Transitioning Seamlessly into Dark Footer */}
      <DoodleWaveDivider fillColor="#0B1E2E" className="mt-20" />
    </section>
  );
}
