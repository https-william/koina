'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QUEENSLAND_REGIONS, QueenslandRegion } from '@/data/locations';
import { MapPin, CheckCircle, Video, Home, Building2, Search, ArrowRight, Clock } from 'lucide-react';
import { DoodleSparkle } from '@/components/brand/Doodles';

export default function ServiceAreaChecker() {
  const [selectedRegion, setSelectedRegion] = useState<QueenslandRegion>(QUEENSLAND_REGIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = QUEENSLAND_REGIONS.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.suburbs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative py-16 md:py-24 bg-canvas overflow-hidden" id="locations-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-brand-navy" />
            <span>Statewide Queensland Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-[-0.02em] leading-[1.25] mb-4">
            Delivering Care Across Queensland
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-[1.72]">
            We provide in-home visits, mobile community therapy, and secure telehealth consultations across Queensland:
          </p>
        </div>

        {/* Smart Suburb Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search your suburb or region (e.g., Southport, Chermside, Cairns)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Location Badges Grid with Relaxed Gap */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {filteredRegions.map((region) => {
            const isSelected = selectedRegion.name === region.name;
            return (
              <button
                key={region.name}
                onClick={() => setSelectedRegion(region)}
                className={`min-h-[46px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-105'
                    : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200 shadow-sm'
                }`}
                aria-pressed={isSelected}
              >
                <span>{region.name}</span>
                {isSelected && <CheckCircle className="w-3.5 h-3.5 text-brand-sky" />}
              </button>
            );
          })}
        </div>

        {/* Active Region Capacity & Service Details Card */}
        <div className="max-w-3xl mx-auto rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-ambient">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-700">
                {selectedRegion.zone}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 mt-1">
                <span>{selectedRegion.name} Care Coverage</span>
              </h3>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold self-start sm:self-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{selectedRegion.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-7">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <Home className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">In-Home & Mobile Visits</p>
                <p className="text-xs text-slate-700 leading-snug">Therapists travel directly to your home or community setting</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <Video className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">Secure Telehealth Option</p>
                <p className="text-xs text-slate-700 leading-snug">Encrypted video sessions available statewide</p>
              </div>
            </div>
          </div>

          {/* Suburbs Covered & Lead Time */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <Clock className="w-4 h-4 text-brand-navy shrink-0" />
              <span>
                <strong className="text-slate-900 font-bold">Scheduling Lead Time:</strong> {selectedRegion.estimatedTravelLead}
              </span>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-800 mb-2.5">Key Suburbs Covered in this Region:</p>
              <div className="flex flex-wrap gap-2">
                {selectedRegion.suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200 shadow-sm font-medium"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-xs text-slate-700 italic text-center sm:text-left leading-relaxed">
              Need care in another Queensland community? Telehealth consultations and regional mobile outreach are available statewide.
            </p>
            <Link
              href={`/referral?region=${encodeURIComponent(selectedRegion.name)}`}
              className="btn-interactive shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm min-h-[44px]"
            >
              <span>Make a Referral</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
