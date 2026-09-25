import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Koina Allied Health',
    short_name: 'Koina Health',
    description:
      'Community, In-Home & Telehealth Allied Health Care Across Queensland. NDIS, Aged Care, DVA & Private.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#113C5E',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/koina-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
