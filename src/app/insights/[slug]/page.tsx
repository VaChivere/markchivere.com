import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import ArticleSubscribe from "@/components/blog/ArticleSubscribe";
import ShareButtons from "@/components/blog/ShareButtons";

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

  return {
    title: `${post.title} | Mark Chivere`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl || ""],
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
    <article className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-midnight-blue relative text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight-blue/90"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-electric-cyan mb-6">
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4">
             <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
               <Image 
                 src={post.author.avatar} 
                 alt={post.author.name}
                 fill
                 className="object-cover"
               />
             </div>
             <div className="text-left">
               <p className="font-bold text-white text-lg">{post.author.name}</p>
               <p className="text-white/60 text-sm">{post.author.role}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
           
           {/* Featured Image (if exists) */}
           {post.imageUrl && (
             <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
               <Image
                 src={post.imageUrl}
                 alt={post.title}
                 fill
                 className="object-cover"
               />
             </div>
           )}

           {/* Article Body */}
           <div 
             className="prose prose-lg prose-headings:font-heading prose-headings:text-midnight-blue prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-royal-purple prose-strong:text-midnight-blue max-w-none"
             dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} 
           />

           {/* Share Buttons */}
           <ShareButtons title={post.title} />

           {/* Article Footer */}
           <div className="mt-8 pt-8">
             <h3 className="text-2xl font-bold font-heading text-midnight-blue mb-4">
               Enjoyed this perspective?
             </h3>
             <p className="text-gray-600 mb-6">
               Join 4,300+ leaders who receive strategies like this every week. No spam, just signal.
             </p>
             <ArticleSubscribe />
           </div>
        </div>
      </div>
      
      {/* Back to Blog */}
      <div className="text-center mt-12">
        <Link 
          href="/insights" 
          className="inline-flex items-center text-gray-500 hover:text-royal-purple font-semibold transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to all insights
        </Link>
      </div>
    </article>
  );
}
