'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/blog-data';
import BlogCard from './BlogCard';
import NewsletterForm from '@/components/ui/forms/NewsletterForm';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;

  // Reset page when filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Extract unique categories
  const categories = useMemo(() => {
    const allCats = posts.map(post => post.category);
    return ['All', ...Array.from(new Set(allCats))];
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Pagination Logic
  const featuredPost = (filteredPosts.length > 0 && currentPage === 1) ? filteredPosts[0] : null;
  const archivePosts = useMemo(() => filteredPosts.length > 0 ? filteredPosts.slice(1) : [], [filteredPosts]);
  const totalPages = Math.ceil(archivePosts.length / POSTS_PER_PAGE) || 1;

  const currentGridPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return archivePosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [archivePosts, currentPage, POSTS_PER_PAGE]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getVisiblePages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages];
    if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pageButton =
    'h-10 w-10 rounded-md text-[0.875rem] font-medium transition-colors';

  return (
    <div className="space-y-14">
      
      {/* Search and Filter Section */}
      <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`type-small relative pb-2 font-medium transition-colors ${
                  isActive ? 'text-navy' : 'text-slate hover:text-navy'
                }`}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-x-0 -bottom-px h-px bg-bronze"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <label htmlFor="insights-search" className="sr-only">
            Search insights
          </label>
          <input
            id="insights-search"
            type="text"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="type-small w-full rounded-md border border-gray-300 bg-white py-2.5 pr-4 pl-9 text-navy outline-none transition-colors placeholder:text-gray-500 focus:border-bronze"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>

      {/* No Results State */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-gray-200 py-16"
        >
          <h3 className="type-h3 mb-2 text-navy">No articles found</h3>
          <p className="type-body text-slate">Try adjusting your search or category filter.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="type-small mt-6 font-medium text-navy underline underline-offset-4 transition-colors hover:text-bronze-ink"
          >
            Clear all filters
          </button>
        </motion.div>
      )}

      {/* Featured Post */}
      <AnimatePresence mode="wait">
        {featuredPost && (
          <motion.div
            key={featuredPost.id + '-featured'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <BlogCard post={featuredPost} featured={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Post Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {currentGridPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-4 py-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="type-small rounded-md border border-gray-300 px-4 py-2 font-medium text-slate transition-colors hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {getVisiblePages().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="type-small flex h-10 w-10 items-center justify-center text-gray-400">…</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page as number)}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`${pageButton} ${
                    currentPage === page
                      ? 'bg-navy text-ivory'
                      : 'text-slate hover:text-navy'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="type-small rounded-md border border-gray-300 px-4 py-2 font-medium text-slate transition-colors hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}

      {/* Newsletter Section */}
      {filteredPosts.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="rounded-md bg-navy px-6 py-14 md:px-12 md:py-16"
        >
          <div className="max-w-2xl">
            <h3 className="type-h3 mb-4 text-ivory">Insights worth your time</h3>
            <p className="type-body mb-8 text-slate-light">
              Occasional writing on leadership, behaviour and organisational change.
            </p>

            <div className="max-w-md">
              <NewsletterForm
                portalId={HUBSPOT_CONFIG.portalId}
                formId={HUBSPOT_CONFIG.forms.newsletter}
                variant="blog-signup"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
