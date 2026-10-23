'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="group relative grid grid-cols-1 items-center gap-8 border-t border-gray-200 pt-8 lg:grid-cols-12 lg:gap-12"
      >
        {/* Image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-gray-200">
            <Image
              src={post.imageUrl || '/blog/fallback.svg'}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5">
          <div className="type-meta flex items-center gap-3 text-slate">
            <span className="text-bronze-ink">{post.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>

          <h2 className="type-h2 mt-4 mb-5 text-navy">
            <Link
              href={`/insights/${post.slug}`}
              className="before:absolute before:inset-0 focus:outline-none"
            >
              {post.title}
            </Link>
          </h2>

          <p className="type-body text-slate">{post.excerpt}</p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
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
            <span className="type-meta ml-auto text-slate">{post.date}</span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-colors duration-300 hover:border-navy/25"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
        <Image
          src={post.imageUrl || '/blog/fallback.svg'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6">
        <div className="type-meta mb-4 flex items-center gap-3 text-slate">
          <span className="text-bronze-ink">{post.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="type-h3 mb-3 text-navy">
          <Link
            href={`/insights/${post.slug}`}
            className="before:absolute before:inset-0 focus:outline-none"
          >
            {post.title}
          </Link>
        </h3>

        <p className="type-body mb-6 flex-grow text-slate">{post.excerpt}</p>

        <div className="type-meta mt-auto flex items-center justify-between border-t border-gray-200 pt-4 text-slate">
          <span>{post.date}</span>
          <span className="flex items-center gap-2 text-navy">
            Read Article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
