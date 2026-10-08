import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        // Explicitly welcome search engines and AI Answer Engines for SEO, AEO & GEO crawling
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'OAI-SearchBot',
          'GPTBot',
          'ChatGPT-User',
          'Claude-SearchBot',
          'Claude-User',
          'Claude-Web',
          'PerplexityBot',
          'Perplexity-User',
          'Applebot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://koina.com.au/sitemap.xml',
    host: 'https://koina.com.au',
  };
}
