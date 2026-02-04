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

  return (
    <div className="space-y-16">
      
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-100">
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'text-white shadow-md shadow-royal-purple/20'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-midnight-blue rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 group">
          <input
            type="text"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-royal-purple/20 focus:border-royal-purple transition-all shadow-sm group-hover:shadow-md"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-royal-purple transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>

      {/* No Results State */}
      {filteredPosts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-midnight-blue mb-2">No articles found</h3>
          <p className="text-gray-500">Try adjusting your search or category filter.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-6 text-royal-purple font-semibold hover:underline"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard post={featuredPost} featured={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Post Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {currentGridPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 py-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-royal-purple hover:text-royal-purple disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {getVisiblePages().map((page, index) => (
              page === '...' ? (
                <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page as number)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                    currentPage === page
                      ? 'bg-midnight-blue text-white shadow-lg shadow-midnight-blue/20'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
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
            className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-royal-purple hover:text-royal-purple disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Newsletter Section */}
      {filteredPosts.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative py-16 px-6 bg-midnight-blue rounded-3xl text-center overflow-hidden"
        >
           {/* Background Decoration */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-royal-purple rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-electric-cyan rounded-full blur-3xl" />
           </div>

           <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-3xl font-bold font-heading text-white mb-4">
               Insights worth your time
             </h3>
             <p className="text-gray-300 mb-8 text-lg">
              Join 4,300+ leaders receiving weekly strategies on leadership, AI, and organizational change.
            </p>
            
            <div className="max-w-md mx-auto">
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
