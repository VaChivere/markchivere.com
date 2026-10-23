'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArticleCard from './ArticleCard';
import { trackEvent } from '@/lib/analytics';
import type { Article, WritingCategory } from '@/lib/writing';

interface WritingLibraryProps {
  articles: Article[];
  categories: WritingCategory[];
  substackError: string | null;
}

export default function WritingLibrary({ articles, categories, substackError }: WritingLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<WritingCategory | 'All'>('All');

  useEffect(() => {
    trackEvent('writing_page_view', { articleCount: articles.length });
  }, [articles.length]);

  const filtered = useMemo(
    () =>
      selectedCategory === 'All'
        ? articles
        : articles.filter((article) => article.category === selectedCategory),
    [articles, selectedCategory]
  );

  const featured = filtered.find((article) => article.featured) ?? null;
  const rest = featured ? filtered.filter((article) => article.id !== featured.id) : filtered;

  const filters: (WritingCategory | 'All')[] = ['All', ...categories];

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-col gap-6 border-b border-gray-200 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-x-7 gap-y-1" role="group" aria-label="Filter writing by theme">
          {filters.map((filter) => {
            const isActive = selectedCategory === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedCategory(filter)}
                aria-pressed={isActive}
                className={`relative pb-3 text-[0.9375rem] transition-colors ${
                  isActive ? 'text-navy' : 'text-slate hover:text-navy'
                }`}
              >
                {filter}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-full bg-bronze"
                  />
                )}
              </button>
            );
          })}
        </div>

        <p className="type-meta pb-3 text-slate md:text-right">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {substackError && (
        <p className="type-small rounded-md border border-gray-200 bg-white px-4 py-3 text-slate">
          The Substack feed is temporarily unavailable, so only articles published here are shown.
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="py-16">
          <h3 className="type-h3 mb-2 text-navy">Nothing here yet</h3>
          <p className="type-body text-slate">
            There are no articles in this theme yet. Try another theme or check back soon.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {featured && (
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <ArticleCard article={featured} featured />
              </motion.div>
            </AnimatePresence>
          )}

          {rest.length > 0 && (
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {rest.map((article) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArticleCard article={article} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
