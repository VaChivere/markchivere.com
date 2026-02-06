import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/lib/blog-data';

const BASE_URL = 'https://markchivere.com';

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
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
${blogPosts
  .map((post) => {
    return `  <url>
    <loc>${BASE_URL}/insights/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Generated public/sitemap.xml');
}

function generateRobots() {
  const robots = `User-agent: *
Allow: /
Disallow: /imprint

Sitemap: ${BASE_URL}/sitemap.xml`;
  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots);
  console.log('✅ Generated public/robots.txt');
}

generateSitemap();
generateRobots();
