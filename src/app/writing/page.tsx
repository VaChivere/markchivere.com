import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CoachBoard from "@/components/playbook/CoachBoard";
import EditorialAnnotation from "@/components/playbook/EditorialAnnotation";
import HanddrawnMark from "@/components/playbook/HanddrawnMark";
import WritingLibrary from "@/components/writing/WritingLibrary";
import SubstackSubscribe from "@/components/writing/SubstackSubscribe";
import { categoriesPresent, getArticles } from "@/lib/writing";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on leadership, behavioural change, organisational learning, AI adoption and human performance by Mark Chivere.",
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/writing"),
    title: "Writing | Mark Chivere",
    description:
      "Essays on leadership, behavioural change, organisational learning, AI adoption and human performance.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

export default async function WritingPage() {
  const { articles, substackError } = await getArticles();
  const categories = categoriesPresent(articles);

  return (
    <div className="bg-ivory">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
          ]),
        ])}
      />

      {/* Masthead */}
      <section className="bg-ivory">
        <div className="shell pt-12 pb-14 md:pt-16 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="type-eyebrow mb-5 text-bronze-ink">Writing</p>
              <h1 className="type-h1 mb-6 text-navy">Ideas Worth Exploring</h1>
              <p className="type-lead text-slate">
                Notes on leadership, behavioural science and the conditions that make change
                possible.
              </p>
            </div>

            {/* Playbook marker — a notebook margin note, kept outside the reading
                column. The illustration is hidden below lg. */}
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <CoachBoard
                variant="clipboard"
                className="h-56 w-[11.75rem] -rotate-2 text-navy/55"
              />
              <EditorialAnnotation className="mt-6">
                Notes, not{" "}
                <span className="relative inline-block">
                  conclusions.
                  <HanddrawnMark
                    variant="underline"
                    className="absolute -bottom-1 left-0 h-2 w-full text-bronze"
                  />
                </span>
              </EditorialAnnotation>
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="shell pb-16 md:pb-24">
        <WritingLibrary articles={articles} categories={categories} substackError={substackError} />
      </section>

      {/* Subscribe */}
      <section className="shell pb-20 md:pb-28">
        <div className="max-w-4xl">
          <SubstackSubscribe />
        </div>
      </section>
    </div>
  );
}
