import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import ArticleSubscribe from "@/components/blog/ArticleSubscribe";
import ShareButtons from "@/components/blog/ShareButtons";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  articleSchema,
  breadcrumbSchema,
  graph,
} from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata dynamically
export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const image = post.imageUrl || DEFAULT_OG_IMAGE;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/insights/${post.slug}`),
      title: post.title,
      description: post.excerpt,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <JsonLd
        data={graph([
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ])}
      />

      {/* Masthead */}
      <header className="shell pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-3xl">
          <Link
            href="/insights"
            className="type-meta font-medium text-slate transition-colors hover:text-bronze-ink"
          >
            ← All Insights
          </Link>

          <div className="type-meta mt-8 flex flex-wrap items-center gap-3 text-slate">
            <span className="text-bronze-ink">{post.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
            <span>{post.date}</span>
          </div>

          <h1 className="type-h1 mt-5 mb-8 text-navy">{post.title}</h1>

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="type-small font-medium text-navy">{post.author.name}</p>
              <p className="type-meta text-slate">{post.author.role}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured image */}
      {post.imageUrl && (
        <div className="shell">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-gray-200">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="shell-reading pt-12 md:pt-16">
        <div
          className="prose-editorial"
          dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
        />

        <ShareButtons title={post.title} />

        <div className="mt-4 border-t border-gray-200 pt-10">
          <h2 className="type-h3 mb-3 text-navy">Enjoyed this perspective?</h2>
          <p className="type-body mb-6 text-slate">
            Occasional writing on leadership, behaviour and change — sent when there&apos;s
            something worth saying. No spam, just signal.
          </p>
          <ArticleSubscribe />
        </div>
      </div>

      {/* Back */}
      <div className="shell-reading pt-12 pb-20 md:pb-28">
        <Link
          href="/insights"
          className="type-small group inline-flex items-center gap-2 font-medium text-slate transition-colors hover:text-navy"
        >
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to all insights
        </Link>
      </div>
    </article>
  );
}
