import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Insights | AI Leadership Blog & Perspectives",
  description:
    "Deep dives into Generative AI strategy, organizational psychology, and the future of work for senior leaders.",
  alternates: { canonical: "/insights" },
};

export default function Insights() {
  return (
    <>
      {/* Masthead */}
      <section className="shell pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="type-eyebrow mb-6 text-bronze-ink">Insights</p>
          <h1 className="type-h1 mb-6 text-navy">Insights &amp; Perspectives</h1>
          <p className="type-lead text-slate">
            Navigating the intersection of human psychology and artificial intelligence —
            strategies for leaders who want to build the future, not just react to it.
          </p>
        </div>
      </section>

      {/* Article feed */}
      <section className="shell pb-16 md:pb-24">
        <BlogList posts={blogPosts} />
      </section>
    </>
  );
}
