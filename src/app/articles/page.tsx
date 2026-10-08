import React from 'react';
import { Metadata } from 'next';
import { BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { DoodleUnderline, DoodleSparkle, DoodleWaveDivider } from '@/components/brand/Doodles';
import ArticlesDirectoryClient from '@/components/articles/ArticlesDirectoryClient';
import { ARTICLES_DATA } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Clinical Articles & NDIS Guides | Koina Allied Health Queensland',
  description:
    'Evidence-based allied health guides, NDIS funding advice, and practical therapy frameworks written by AHPRA-registered clinicians across Queensland.',
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: 'Clinical Articles & Guides | Koina Allied Health',
    description:
      'Evidence-based clinical articles, NDIS plan review advice, falls prevention tips, and therapy guides for participants, families, and support coordinators.',
    url: 'https://www.koina.com.au/articles',
    siteName: 'Koina Allied Health',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function ArticlesPage() {
  const articlesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.koina.com.au',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Articles',
            item: 'https://www.koina.com.au/articles',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.koina.com.au/articles#webpage',
        name: 'Koina Allied Health Articles & Clinical Resources',
        description:
          'Evidence-based clinical guides and NDIS funding insights by allied health professionals in Queensland.',
        url: 'https://www.koina.com.au/articles',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: ARTICLES_DATA.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Article',
              headline: article.title,
              description: article.excerpt,
              url: `https://www.koina.com.au/articles/${article.slug}`,
              datePublished: article.publishedDate,
              author: {
                '@type': 'Person',
                name: article.author.name,
                jobTitle: article.author.role,
              },
            },
          })),
        },
      },
    ],
  };

  return (
    <div className="bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articlesJsonLd),
        }}
      />

      {/* Hero Header Section */}
      <section className="relative pt-12 md:pt-16 pb-8 overflow-hidden bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold mb-4 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-brand-sky" />
              <span>Clinical Knowledge & NDIS Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Articles &{' '}
              <span className="relative inline-block text-brand-navy">
                Clinical Guides
                <DoodleUnderline className="text-brand-sky w-full h-3 -bottom-2 left-0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
              Clear, practical advice on NDIS funding justification, in-home therapy outcomes, swallowing safety, and rehabilitation across Queensland. Written by experienced allied health clinicians.
            </p>
          </div>
        </div>

        <DoodleWaveDivider fillColor="#FAF9F6" className="mt-8" />
      </section>

      {/* Main Articles Directory Section */}
      <section className="pb-24 pt-4 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticlesDirectoryClient />
        </div>

        <DoodleWaveDivider fillColor="#08121C" accentColor="#113C5E" className="mt-20" />
      </section>
    </div>
  );
}
