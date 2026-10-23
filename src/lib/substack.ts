import { SUBSTACK_CONFIG } from '@/config/substack';
import { WRITING_CATEGORIES, normaliseDate, type WritingCategory } from './writing-taxonomy';

export interface SubstackFeedItem {
  id: string;
  title: string;
  link: string;
  iso: string;
  dateLabel: string;
  excerpt: string;
  imageUrl?: string;
  category?: WritingCategory;
}

export interface SubstackFeedResult {
  items: SubstackFeedItem[];
  configured: boolean;
  error: string | null;
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
};

function decodeEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      const code = Number.parseInt(entity.slice(2), 16);
      return Number.isNaN(code) ? match : String.fromCodePoint(code);
    }
    if (entity.startsWith('#')) {
      const code = Number.parseInt(entity.slice(1), 10);
      return Number.isNaN(code) ? match : String.fromCodePoint(code);
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
  });
}

function stripHtml(value: string): string {
  return decodeEntities(value.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

/** Reads a tag from an XML fragment, tolerating CDATA and attributes. */
function readTag(xml: string, tag: string): string | null {
  const cdata = new RegExp(`<${tag}(?:\\s[^>]*)?>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`, 'i');
  const cdataMatch = xml.match(cdata);
  if (cdataMatch) return cdataMatch[1].trim();

  const plain = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i');
  const plainMatch = xml.match(plain);
  return plainMatch ? plainMatch[1].trim() : null;
}

/** Only allow absolute http(s) URLs derived from the feed. */
function safeUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : null;
  } catch {
    return null;
  }
}

function mapFeedCategory(rawCategories: string[]): WritingCategory | undefined {
  for (const raw of rawCategories) {
    const cleaned = raw.trim().toLowerCase();
    const match = WRITING_CATEGORIES.find((category) => category.toLowerCase() === cleaned);
    if (match) return match;
  }
  return undefined;
}

function parseFeed(xml: string): SubstackFeedItem[] {
  const itemBlocks = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) ?? [];

  return itemBlocks.flatMap((block, index) => {
    const title = readTag(block, 'title');
    const link = safeUrl(readTag(block, 'link'));
    const pubDate = readTag(block, 'pubDate') ?? readTag(block, 'dc:date');
    if (!title || !link || !pubDate) return [];

    const description = readTag(block, 'description') ?? readTag(block, 'content:encoded') ?? '';
    const enclosureUrl = safeUrl(block.match(/<enclosure[^>]*url="([^"]+)"/i)?.[1] ?? null);
    const mediaUrl = safeUrl(block.match(/<media:content[^>]*url="([^"]+)"/i)?.[1] ?? null);
    const categories = [...block.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi)].map((m) =>
      stripHtml(m[1])
    );

    const { iso, label } = normaliseDate(pubDate);

    return [
      {
        id: readTag(block, 'guid') ?? `${link}-${index}`,
        title: stripHtml(title),
        link,
        iso,
        dateLabel: label,
        excerpt: truncate(stripHtml(description), 220),
        imageUrl: enclosureUrl ?? mediaUrl ?? undefined,
        category: mapFeedCategory(categories),
      },
    ];
  });
}

/**
 * Retrieves and caches the Substack RSS feed server-side.
 *
 * Feed contents are cached for one hour via the Next.js data cache. Failures are
 * swallowed and surfaced as `error` so a feed outage can never break a build or
 * a page render.
 */
export async function fetchSubstackArticles(): Promise<SubstackFeedResult> {
  if (!SUBSTACK_CONFIG.isConfigured) {
    return { items: [], configured: false, error: null };
  }

  try {
    const response = await fetch(SUBSTACK_CONFIG.feedUrl, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
      next: { revalidate: 3600, tags: ['substack-feed'] },
    });

    if (!response.ok) {
      return { items: [], configured: true, error: `Feed responded with ${response.status}` };
    }

    const xml = await response.text();
    return { items: parseFeed(xml), configured: true, error: null };
  } catch (error) {
    return {
      items: [],
      configured: true,
      error: error instanceof Error ? error.message : 'Unable to reach the publication feed',
    };
  }
}
