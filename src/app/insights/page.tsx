import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Insights | AI Leadership Blog & Perspectives",
  description: "Deep dives into Generative AI strategy, organizational psychology, and the future of work for senior leaders.",
};

export default function Insights() {
  return (
    <div className="bg-gray-50/30 min-h-screen">
      {/* Page Header */}
      <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-60" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-electric-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 md:px-6 max-w-5xl text-center z-10">
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-100 shadow-sm text-royal-purple text-xs font-bold uppercase tracking-widest rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Mark Chivere&apos;s Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-midnight-blue mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Insights & <span className="relative inline-block">
              Perspectives
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-electric-cyan opacity-40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Navigating the intersection of <span className="text-royal-purple font-medium">human psychology</span> and <span className="text-midnight-blue font-medium">artificial intelligence</span>. 
            Strategies for leaders who want to build the future, not just react to it.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-12 md:py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <BlogList posts={blogPosts} />
        </div>
      </section>
    </div>
  );
}
