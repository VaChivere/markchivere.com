import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://markchivere.com';

  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/approach',
    '/impact',
    '/insights',
    '/workshops',
    '/sales-training',
    '/events',
    '/contact',
    '/privacy',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog posts
  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}
