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
        // Explicitly welcome AI Answer Engines for AEO & GEO crawling
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Claude-Web',
          'anthropic-ai',
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
