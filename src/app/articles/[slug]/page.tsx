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
  Share2,
  ShieldCheck,
  BookOpen,
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
    title: `${article.title} | Koina Allied Health Articles`,
    description: article.excerpt,
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
      '@type': 'Organization',
      name: 'Koina Allied Health',
      url: 'https://koina.com.au',
      logo: 'https://koina.com.au/koina-logo.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://koina.com.au/articles/${article.slug}`,
    },
  };

  return (
    <article className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* Header & Breadcrumb */}
      <section className="pt-10 md:pt-14 pb-8 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-navy mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {article.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-800 leading-[1.8] text-base sm:text-lg font-normal">
            <p>
              In community allied health across Queensland, clinical assessments are not mere administrative requirements—they are the foundational roadmap that justifies funding, sets safety parameters, and guides restorative care.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-4">
              1. The Value of In-Home Environmental Evidence
            </h3>
            <p>
              Clinical outcomes captured within clinic walls often fail to reflect the authentic daily challenges individuals experience in their home routines. When therapists evaluate physical transfers, meal preparation, or behavioural triggers in the participant&rsquo;s natural home setting, findings carry significantly higher evidentiary weight with the NDIA and My Aged Care evaluators.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-4">
              2. Multidisciplinary Synergy
            </h3>
            <p>
              Often, a participant requires collaborative care—such as an Occupational Therapist configuring assistive equipment while a Physiotherapist retrains gait, or a Speech Pathologist collaborating with an Allied Health Assistant to reinforce dysphagia mealtime routines. An integrated allied health team ensures recommendations harmonise rather than compete.
            </p>

            <div className="my-8 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-900 text-sm leading-relaxed">
              <strong className="block font-bold mb-1">Clinical Tip for Support Coordinators:</strong>
              When requesting an annual plan review or home modification quote, ensure your allied health provider aligns line items precisely with current NDIS Price Guide codes to avoid unnecessary claim rejections.
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-4">
              3. Transparent Timelines and Next Steps
            </h3>
            <p>
              At Koina Allied Health, referrals are triaged within 24 business hours to match participants with experienced clinicians across 13 Queensland regional hubs. Whether conducting a Functional Capacity Assessment or implementing home modifications, transparent turnaround times keep care plans moving smoothly.
            </p>
          </div>

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
                Submit an intake request online in under 3 minutes. Reviewed by a clinician within 24 business hours.
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
            <h3 className="text-xl font-bold text-slate-900">Related Clinical Articles</h3>
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
