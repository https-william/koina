'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { QUEENSLAND_REGIONS, QueenslandRegion } from '@/data/locations';
import {
  Home,
  Video,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
  X,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';

export default function LocationsDirectoryClient() {
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const zones = [
    'All',
    'South East Queensland',
    'Darling Downs & Western',
    'Wide Bay & Central',
    'North & Far North Queensland',
  ];

  const filteredRegions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return QUEENSLAND_REGIONS.filter((region) => {
      // 1. Zone filter
      const matchesZone = selectedZone === 'All' || region.zone === selectedZone;
      if (!matchesZone) return false;

      // 2. Search query filter
      if (!query) return true;

      // Check region name
      if (region.name.toLowerCase().includes(query)) return true;

      // Check zone name
      if (region.zone.toLowerCase().includes(query)) return true;

      // Check suburbs (name search)
      if (region.suburbs.some((s) => s.toLowerCase().includes(query))) return true;

      // Check postcodes (number search)
      if (region.postcodes?.some((p) => p.includes(query))) return true;

      return false;
    });
  }, [selectedZone, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 text-brand-navy text-xs font-bold mb-3">
                <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                <span>Queensland Coverage Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Find Your Local Queensland Service Area
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Search by suburb name, city, or 4-digit postcode number to check immediate in-home visits and telehealth capacity:
              </p>
            </div>

            {/* Quick Result Indicator */}
            <div className="text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl self-start md:self-auto shrink-0 shadow-xs">
              Showing <span className="text-brand-navy font-bold">{filteredRegions.length}</span> of {QUEENSLAND_REGIONS.length} Regions
            </div>
          </div>

          {/* Interactive Search Bar by Suburb Name or Postcode Number */}
          <div className="relative mb-6">
            <div className="relative flex items-center">
              <div className="absolute left-4.5 pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-brand-navy" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by suburb name (e.g. Southport, Robina, Cairns) or postcode number (e.g. 4215, 4000, 4870)..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-canvas border border-slate-300 text-slate-900 placeholder:text-slate-500 text-sm sm:text-base font-medium shadow-xs focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy transition-all"
                aria-label="Search locations by suburb name or postcode number"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-4 p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="mt-2.5 flex items-center justify-between text-xs text-slate-600 px-1">
                <span>
                  Filtering results matching: <strong className="text-brand-navy">&ldquo;{searchQuery}&rdquo;</strong>
                </span>
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="text-brand-navy font-semibold hover:underline"
                >
                  Reset search
                </button>
              </div>
            )}
          </div>

          {/* Zone Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Filter Zone:
            </span>
            <div className="flex flex-wrap gap-2">
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border whitespace-nowrap ${
                    selectedZone === zone
                      ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredRegions.map((region) => {
            const query = searchQuery.trim().toLowerCase();
            const matchingSuburbs = query
              ? region.suburbs.filter((s) => s.toLowerCase().includes(query))
              : [];
            const matchingPostcodes = query
              ? region.postcodes?.filter((p) => p.includes(query)) || []
              : [];

            return (
              <div
                key={region.name}
                className="rounded-3xl bg-canvas border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-ambient hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                      {region.zone}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-slate-800 text-[11px] font-bold border border-slate-200 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {region.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-navy transition-colors">
                    {region.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium mb-4">
                    <Clock className="w-4 h-4 text-brand-navy shrink-0" />
                    <span>Scheduling lead time: {region.estimatedTravelLead}</span>
                  </div>

                  {/* Modes Available */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs">
                      <Home className="w-3.5 h-3.5 text-brand-navy" />
                      In-Home & Mobile
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200 shadow-xs">
                      <Video className="w-3.5 h-3.5 text-brand-sky" />
                      Telehealth
                    </span>
                  </div>

                  {/* Search Match Highlight Alert */}
                  {(matchingSuburbs.length > 0 || matchingPostcodes.length > 0) && (
                    <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Match found: </span>
                        {matchingSuburbs.length > 0 && (
                          <span>Suburbs: {matchingSuburbs.join(', ')} </span>
                        )}
                        {matchingPostcodes.length > 0 && (
                          <span>(Postcode: {matchingPostcodes.join(', ')})</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Suburbs Covered */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Key Suburbs Covered:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {region.suburbs.map((suburb) => {
                        const isMatched = query && suburb.toLowerCase().includes(query);
                        return (
                          <span
                            key={suburb}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                              isMatched
                                ? 'bg-brand-navy text-white border-brand-navy font-bold shadow-xs'
                                : 'bg-white text-slate-800 border-slate-200'
                            }`}
                          >
                            {suburb}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Postcodes Covered */}
                  {region.postcodes && region.postcodes.length > 0 && (
                    <div className="mb-5 pt-3 border-t border-slate-200/70">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Postcodes Covered:
                      </p>
                      <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 font-mono">
                        {region.postcodes.map((postcode) => {
                          const isMatched = query && postcode.includes(query);
                          return (
                            <span
                              key={postcode}
                              className={`px-1.5 py-0.5 rounded-md border ${
                                isMatched
                                  ? 'bg-brand-sky/20 border-brand-sky text-brand-navy font-bold'
                                  : 'bg-white/80 border-slate-200 text-slate-600'
                              }`}
                            >
                              {postcode}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/referral?region=${encodeURIComponent(region.name)}`}
                    className="btn-interactive inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-navy-light transition-colors"
                  >
                    <span>Refer in {region.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <span className="text-xs text-slate-700 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky" />
                    Capacity Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredRegions.length === 0 && (
          <div className="text-center py-16 bg-canvas rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-ambient">
            <DoodleSparkle className="w-10 h-10 text-brand-navy mx-auto mb-4" />
            <h3 className="font-bold text-xl text-slate-900 mb-2">
              No direct regional hub matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              Don’t worry! We provide secure telehealth consultations statewide across Queensland, plus periodic mobile outreach trips. You can submit a referral for your suburb and our team will confirm clinician availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClearSearch}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors w-full sm:w-auto"
              >
                Clear Search
              </button>
              <Link
                href="/referral"
                className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold shadow-sm w-full sm:w-auto"
              >
                <span>Make a Referral Anyway</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        )}

        {/* Regional Micro-Copy Banner */}
        <div className="mt-14 bg-canvas p-8 sm:p-10 rounded-[32px] border border-slate-200 shadow-ambient flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Need care in another Queensland community?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-xl">
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
