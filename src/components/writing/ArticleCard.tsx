import Image from 'next/image';
import Link from 'next/link';
import TrackedLink from '@/components/analytics/TrackedLink';
import type { Article } from '@/lib/writing';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

function sourceLabel(article: Article): string {
  if (!article.external) return 'Read article';
  try {
    return `Read on ${new URL(article.url).hostname.replace(/^www\./, '')}`;
  } catch {
    return 'Read article';
  }
}

function CardBody({ article, featured }: ArticleCardProps) {
  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-gray-200 ${
          featured ? 'aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[24rem]' : 'aspect-[16/10]'
        }`}
      >
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes={featured ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
      </div>

      <div
        className={`flex flex-grow flex-col ${
          featured ? 'p-7 lg:col-span-5 lg:justify-center lg:p-10' : 'p-6'
        }`}
      >
        <p className="type-meta mb-4 flex flex-wrap items-center gap-3 text-slate">
          {article.category && <span className="text-bronze-ink">{article.category}</span>}
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
          <time dateTime={article.date}>{article.dateLabel}</time>
          {article.readTime && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{article.readTime}</span>
            </>
          )}
        </p>

        <h3
          className={`mb-3 text-navy transition-colors group-hover:text-bronze-ink ${
            featured ? 'type-h2' : 'type-h3'
          }`}
        >
          {article.title}
        </h3>

        <p
          className={`mb-6 flex-grow text-slate ${
            featured ? 'type-body line-clamp-4' : 'type-small line-clamp-3'
          }`}
        >
          {article.excerpt}
        </p>

        <span className="type-meta inline-flex items-center gap-2 border-t border-gray-200 pt-4 text-navy">
          {sourceLabel(article)}
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </>
  );
}

/**
 * One article in the writing library. The whole card is a single link, so it is
 * clickable and keyboard accessible without nested interactive elements.
 */
export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const baseClassName = `group flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-colors duration-300 hover:border-navy/25 ${
    featured ? 'lg:grid lg:grid-cols-12 lg:items-stretch' : ''
  }`;

  if (article.external) {
    return (
      <TrackedLink
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        event="article_outbound_click"
        eventProperties={{ article: article.title, source: article.source }}
        className={baseClassName}
      >
        <CardBody article={article} featured={featured} />
      </TrackedLink>
    );
  }

  return (
    <Link href={article.url} className={baseClassName}>
      <CardBody article={article} featured={featured} />
    </Link>
  );
}
