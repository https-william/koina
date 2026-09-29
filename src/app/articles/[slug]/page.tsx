import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Search,
} from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';
import { ARTICLES_DATA, Article } from '@/data/articles';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found | Koina Allied Health',
    };
  }

  return {
    title: `${article.title} | Koina Allied Health`,
    description: article.excerpt,
    keywords: [
      article.category,
      'Allied Health Queensland',
      'NDIS Allied Health',
      'In-Home Therapy',
      'Occupational Therapy Queensland',
      'Physiotherapy Brisbane Gold Coast',
      article.title,
    ],
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Koina Allied Health`,
      description: article.excerpt,
      url: `https://koina.com.au/articles/${article.slug}`,
      siteName: 'Koina Allied Health',
      locale: 'en_AU',
      type: 'article',
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      images: [
        {
          url: article.imageSrc,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://koina.com.au${article.imageSrc}`,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Koina Allied Health',
      url: 'https://koina.com.au',
      logo: 'https://koina.com.au/koina-logo.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://koina.com.au/articles/${article.slug}`,
    },
  };

  const faqJsonLd =
    article.faqs && article.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <article className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}

      {/* Header & Breadcrumb */}
      <section className="pt-10 md:pt-14 pb-8 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-navy mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles & Guides</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-brand-navy font-bold shadow-xs">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-sky" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-sky" />
                <span>{article.publishedDate}</span>
              </span>
            </div>

            {article.searchIntentQuery && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs font-medium">
                <Search className="w-3.5 h-3.5 text-brand-sky shrink-0" />
                <span>
                  <strong>Common Search:</strong> &ldquo;{article.searchIntentQuery}&rdquo;
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author Box */}
            <div className="flex items-center gap-3.5 pt-4 pb-2 border-y border-slate-200/80">
              <div className="w-11 h-11 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
                <p className="text-xs text-slate-600">{article.author.role}</p>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Clinical Review Passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Visual */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Main Visual Image */}
          <div className="relative aspect-[16/9] w-full rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200 shadow-ambient">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Key Takeaways Callout Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-ambient space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Key Takeaways for Support Coordinators & Families
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
              {article.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Dynamic Sections */}
          <div className="space-y-8 text-slate-800 leading-[1.8] text-base sm:text-lg font-normal">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))}
                {section.callout && (
                  <div className="my-6 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-950 text-sm leading-relaxed shadow-xs">
                    <div className="flex items-center gap-2 font-bold mb-1.5 text-amber-900">
                      <Lightbulb className="w-4 h-4 text-amber-700" />
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-amber-900/90">{section.callout.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Frequently Asked Questions (AEO Powerhouse) */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-12 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-ambient space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-sky">
                  <HelpCircle className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Direct answers regarding funding, referrals, and care delivery.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-2xl bg-canvas border border-slate-200/80 space-y-2 shadow-xs"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Referral Banner */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-brand-navy text-white shadow-ambient flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-sky">
                Direct Intake Channel
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready to refer a client for in-home allied health care?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Submit an intake request online in under 3 minutes. Reviewed by a clinician within 24 business hours across 13 Queensland regional hubs.
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

          {/* Related Articles */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Related Clinical Articles & Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-brand-navy">{rel.category}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-navy transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-3">
                    <span>{rel.readTime}</span>
                    <span className="font-semibold text-brand-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3 h-3 text-brand-sky" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
