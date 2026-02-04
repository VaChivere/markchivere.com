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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-royal-purple/10 hover:border-royal-purple/20 transition-all duration-300"
      >
        {/* Image */}
        <div className="lg:col-span-7 relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden shadow-inner">
          <Image
            src={post.imageUrl || `https://placehold.co/800x600/0B1C2D/FFFFFF/png?text=${post.category}`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/40 to-transparent opacity-60" />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-royal-purple uppercase tracking-wider shadow-sm border border-white/50">
            Featured Insight
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 space-y-6 relative">
          <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
            <span className="bg-royal-purple/5 text-royal-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {post.category}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{post.readTime}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-midnight-blue group-hover:text-royal-purple transition-colors leading-[1.15]">
            <Link href={`/insights/${post.slug}`} className="before:absolute before:inset-0 focus:outline-none">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
                 <Image 
                   src={post.author.avatar} 
                   alt={post.author.name}
                   fill
                   className="object-cover"
                 />
              </div>
              <div>
                <p className="text-sm font-bold text-midnight-blue">{post.author.name}</p>
                <p className="text-xs text-gray-500 font-medium">{post.author.role}</p>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-royal-purple/10 hover:border-royal-purple/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={post.imageUrl || `https://placehold.co/800x600/0B1C2D/FFFFFF/png?text=${post.category}`}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-midnight-blue uppercase tracking-wider shadow-sm">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors line-clamp-2 leading-tight">
          <Link href={`/insights/${post.slug}`} className="before:absolute before:inset-0 focus:outline-none">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
           <span className="text-xs font-bold text-royal-purple group-hover:underline">Read Article</span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-royal-purple transform group-hover:translate-x-1 transition-all">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
           </svg>
        </div>
      </div>
    </motion.div>
  );
}
