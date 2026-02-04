import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://markchivere.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/imprint'], // Exclude legal/internal pages if desired
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
