'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { Article, ARTICLES_DATA } from '@/data/articles';

const CATEGORIES = [
  'All Articles',
  'NDIS Insights',
  'Aged Care & HCP',
  'Physiotherapy & Mobility',
  'Occupational Therapy',
  'Speech & Nutrition',
] as const;

export default function ArticlesDirectoryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.keyTakeaways.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search and Category Filter Controls */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or clinical author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-canvas border border-slate-200 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand-navy focus:border-brand-navy min-h-[46px]"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium shrink-0">
            Showing <strong className="text-slate-900">{filteredArticles.length}</strong> of{' '}
            {ARTICLES_DATA.length} clinical guides
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[40px] ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-canvas text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Editorial Article (Shown when viewing All and no search filter) */}
      {selectedCategory === 'All Articles' && !searchQuery && featuredArticle && (
        <div className="rounded-[32px] bg-white border border-slate-200/90 shadow-ambient overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[300px] bg-slate-100">
              <Image
                src={featuredArticle.imageSrc}
                alt={featuredArticle.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-sky" />
                <span>Featured Guide</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-brand-navy font-semibold">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>•</span>
                <span>{featuredArticle.publishedDate}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {featuredArticle.excerpt}
              </p>

              {/* Key Takeaways Snapshot */}
              <div className="p-4 sm:p-5 rounded-2xl bg-canvas border border-slate-200/90 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  Key Clinical Insights in This Article:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {featuredArticle.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-sky shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-bold text-xs shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</p>
                    <p className="text-[11px] text-slate-500">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/articles/${featuredArticle.slug}`}
                  className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-brand-navy-light"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-sky" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-ambient hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-brand-navy shadow-xs border border-white/40">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/90 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs text-slate-500 font-medium">
                    Published {article.publishedDate}
                  </p>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 space-y-4">
                <div className="pt-4 flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {article.author.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {article.author.role}
                    </p>
                  </div>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="btn-interactive inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-brand-navy text-slate-800 hover:text-white border border-slate-200 text-xs font-semibold transition-colors shrink-0"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-sky" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 max-w-xl mx-auto space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">No articles matched your search</h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We couldn’t find any articles matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try adjusting your keywords or clearing your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Articles');
            }}
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-semibold"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Referrer & Support Coordinator Direct Callout */}
      <div className="p-8 sm:p-10 rounded-[32px] bg-brand-navy text-white shadow-ambient flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-sky text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Support Coordinator & Clinical Referrer Fast-Track</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Have a participant who needs immediate allied health care?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Our clinical intake team reviews all referrals within 24 business hours. Therapists are available for mobile in-home visits across 13 Queensland regions.
          </p>
        </div>

        <Link
          href="/referral"
          className="btn-interactive min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-navy text-sm font-bold shadow-md hover:bg-slate-50 shrink-0"
        >
          <span>Make a Referral</span>
          <ArrowRight className="w-4 h-4 text-brand-navy" />
        </Link>
      </div>
    </div>
  );
}
