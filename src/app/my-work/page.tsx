import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TrackedLink from "@/components/analytics/TrackedLink";
import Button from "@/components/ui/Button";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "Mark Chivere's professional ventures: Treamio, an international leadership and organisational consultancy, and GrantsHub.eu, an AI-powered funding intelligence platform.",
  alternates: { canonical: "/my-work" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/my-work"),
    title: "My Work | Mark Chivere",
    description:
      "Treamio, an international consultancy focused on leadership, organisational capability and change, and GrantsHub.eu, a funding intelligence platform.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

const ventures = [
  {
    label: "Consultancy",
    name: "Treamio",
    description:
      "My consulting work is delivered through Treamio, an international consultancy focused on leadership, organisational capability, team effectiveness and change.",
    href: "https://treamio.com",
    linkLabel: "Visit Treamio",
    event: "treamio_referral_click",
  },
  {
    label: "Technology",
    name: "GrantsHub.eu",
    description:
      "GrantsHub.eu is an AI-powered funding intelligence platform designed to help organisations discover relevant grant opportunities and assess their readiness to pursue funding.",
    href: "https://grantshub.eu",
    linkLabel: "Visit GrantsHub",
    event: "grantshub_referral_click",
  },
] as const;

const interests = [
  {
    title: "Leadership and behaviour",
    description:
      "What leaders do that actually shifts behaviour, and why good intentions so often fail to survive the working week.",
  },
  {
    title: "Organisational learning",
    description:
      "How capability is genuinely built, and why most development stops at the end of the workshop.",
  },
  {
    title: "AI and adoption",
    description:
      "The human factors behind technology change — the part that rarely makes it into the implementation plan.",
  },
  {
    title: "Technology entrepreneurship",
    description:
      "Building products from the inside, and what that teaches you about how organisations really change.",
  },
];

const linkClassName =
  "group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink";

export default function MyWorkPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "My Work", path: "/my-work" },
          ]),
        ])}
      />

      {/* Masthead */}
      <section className="shell pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="type-eyebrow mb-6 text-bronze-ink">My Work</p>
          <h1 className="type-h1 mb-6 text-navy">The Ventures Behind the Thinking</h1>
          <p className="type-lead text-slate">
            Alongside writing and speaking, I run two organisations — one delivering consulting
            work, the other built on technology.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className="section border-t border-gray-200">
        <div className="shell">
          <div className="divide-y divide-gray-200 border-b border-gray-200">
            {ventures.map((venture) => (
              <div
                key={venture.name}
                className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <div className="lg:col-span-3">
                  <span className="type-eyebrow text-bronze-ink">{venture.label}</span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="type-h3 mb-4 text-navy">{venture.name}</h2>
                  <p className="type-body text-slate">{venture.description}</p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <TrackedLink
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    event={venture.event}
                    eventProperties={{ placement: "my-work" }}
                    className={linkClassName}
                  >
                    {venture.linkLabel}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broader interests */}
      <section className="section border-t border-gray-200 bg-gray-100">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <h2 className="type-h2 mb-4 text-navy">Where My Interests Sit</h2>
            <p className="type-body text-slate">
              Four threads that run through both ventures, and through most of what I write.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {interests.map((item, index) => (
              <div key={item.title} className="border-t border-gray-300 pt-6">
                <span className="type-meta mb-4 block text-bronze-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mb-3 text-navy">{item.title}</h3>
                <p className="type-body text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-gray-200">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="type-h2 mb-4 text-navy">For consulting, start with Treamio</h2>
            <p className="type-body mb-10 text-slate">
              For writing, speaking and professional conversations, this is the place to start.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/writing" variant="secondary" size="lg">
                Explore My Writing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
