import { blogPosts, type BlogPost } from './blog-data';
import { fetchSubstackArticles } from './substack';
import { WRITING_CATEGORIES, normaliseDate, type WritingCategory } from './writing-taxonomy';

export { WRITING_CATEGORIES, formatArticleDate, normaliseDate } from './writing-taxonomy';
export type { WritingCategory } from './writing-taxonomy';

export interface Article {
  id: string;
  title: string;
  /** The single preferred canonical URL for this article. */
  url: string;
  excerpt: string;
  /** ISO 8601 date, used for sorting and structured data. */
  date: string;
  /** Human readable date for display. */
  dateLabel: string;
  author: string;
  /** Absent when the source does not publish reliable category metadata. */
  category?: WritingCategory;
  readTime?: string;
  imageUrl?: string;
  source: string;
  featured: boolean;
  /** True when the canonical URL points away from this website. */
  external: boolean;
}

function localPostToArticle(post: BlogPost): Article {
  const { iso, label } = normaliseDate(post.date);
  return {
    id: post.id,
    title: post.title,
    // Every local article has exactly one canonical URL: its /insights detail page.
    url: `/insights/${post.slug}`,
    excerpt: post.excerpt,
    date: iso,
    dateLabel: label,
    author: post.author.name,
    category: post.writingCategory,
    readTime: post.readTime,
    imageUrl: post.imageUrl,
    source: 'MarkChivere.com',
    featured: post.featured ?? false,
    external: false,
  };
}

/**
 * Builds the full writing library: locally published articles plus anything
 * pulled from the Substack publication feed.
 *
 * The Substack fetch is a no-op until NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL is
 * set, so this is safe to call during a build.
 */
export async function getArticles(): Promise<{
  articles: Article[];
  substackConfigured: boolean;
  substackError: string | null;
}> {
  const local = blogPosts.map(localPostToArticle);
  const feed = await fetchSubstackArticles();

  const remote: Article[] = feed.items.map((item) => ({
    id: `substack-${item.id}`,
    title: item.title,
    url: item.link,
    excerpt: item.excerpt,
    date: item.iso,
    dateLabel: item.dateLabel,
    author: 'Mark Chivere',
    category: item.category,
    imageUrl: item.imageUrl,
    source: 'Substack',
    featured: false,
    external: true,
  }));

  const articles = [...local, ...remote].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    articles,
    substackConfigured: feed.configured,
    substackError: feed.error,
  };
}

/** Categories that actually have at least one article, in taxonomy order. */
export function categoriesPresent(articles: Article[]): WritingCategory[] {
  const found = new Set<WritingCategory>();
  for (const article of articles) {
    if (article.category) found.add(article.category);
  }
  return WRITING_CATEGORIES.filter((category) => found.has(category));
}
