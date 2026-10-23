import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function FeaturedWriting() {
  const posts = blogPosts.slice(0, 3);
  const [lead, ...rest] = posts;

  return (
    <section className="section bg-gray-100">
      <div className="shell">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="type-eyebrow mb-5 text-bronze-ink">Writing</p>
            <h2 className="type-h2 text-navy">Ideas Worth Exploring</h2>
          </div>
          <Link
            href="/writing"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink"
          >
            All Writing
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {!lead ? (
          <p className="type-body text-slate">New essays are on the way. Check back soon.</p>
        ) : (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Lead article */}
            <article className="group lg:col-span-7">
              <Link href={`/insights/${lead.slug}`} className="block">
                <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-md bg-gray-200">
                  <Image
                    src={lead.imageUrl || '/blog/fallback.svg'}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
                <p className="type-meta mb-4 flex items-center gap-3 text-slate">
                  <span className="text-bronze-ink">{lead.category}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{lead.readTime}</span>
                </p>
                <h3 className="type-h3 mb-4 text-navy transition-colors group-hover:text-bronze-ink">
                  {lead.title}
                </h3>
                <p className="type-body mb-5 max-w-[38rem] text-slate">{lead.excerpt}</p>
                <time dateTime={lead.date} className="type-meta text-slate">
                  {formatDate(lead.date)}
                </time>
              </Link>
            </article>

            {/* Secondary entries */}
            <div className="lg:col-span-5">
              <div className="divide-y divide-gray-300 border-t border-gray-300">
                {rest.map((post) => (
                  <article key={post.id} className="group py-8 first:pt-8">
                    <Link href={`/insights/${post.slug}`} className="block">
                      <p className="type-meta mb-4 flex items-center gap-3 text-slate">
                        <span className="text-bronze-ink">{post.category}</span>
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
                        <span>{post.readTime}</span>
                      </p>
                      <h3 className="type-h3 mb-3 text-navy transition-colors group-hover:text-bronze-ink">
                        {post.title}
                      </h3>
                      <p className="type-small mb-4 line-clamp-3 text-slate">{post.excerpt}</p>
                      <time dateTime={post.date} className="type-meta text-slate">
                        {formatDate(post.date)}
                      </time>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
