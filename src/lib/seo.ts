import type { BlogPost } from './blog-data';

/** Canonical origin. The apex domain 301-redirects here, so www is canonical. */
export const SITE_URL = 'https://www.markchivere.com';
export const SITE_NAME = 'Mark Chivere';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Default social sharing image (an authentic photograph already in /public). */
export const DEFAULT_OG_IMAGE = '/mark-chivere-hero.png';

export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Person schema. Only verified professional facts are asserted here — no
 * qualifications, client results or appointments are claimed.
 */
export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Mark Chivere',
    url: `${SITE_URL}/`,
    jobTitle: 'Founder of Treamio',
    description:
      'Mark Chivere writes, speaks and works at the intersection of leadership, behavioural science, organisational change and artificial intelligence.',
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: ['https://linkedin.com/in/markchivere', 'https://treamio.com', 'https://grantshub.eu'],
    knowsAbout: [
      'Leadership development',
      'Behavioural science',
      'Adult learning',
      'Organisational change',
      'Human performance',
      'AI adoption',
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description:
      'Mark Chivere writes and speaks about leadership, behavioural change, organisational learning, AI adoption and human performance.',
    publisher: { '@id': PERSON_ID },
    inLanguage: 'en',
  };
}

export function profilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: 'About Mark Chivere',
    mainEntity: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function articleSchema(post: BlogPost) {
  const url = `${SITE_URL}/insights/${post.slug}`;
  const parsed = new Date(post.date);
  const datePublished = Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();

  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    ...(datePublished ? { datePublished } : {}),
    ...(post.imageUrl ? { image: [absoluteUrl(post.imageUrl)] } : {}),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    articleSection: post.category,
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Wraps one or more schema nodes in a single @graph document. */
export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
