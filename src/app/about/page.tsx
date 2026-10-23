import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import TrackedLink from "@/components/analytics/TrackedLink";
import EditorialAnnotation from "@/components/playbook/EditorialAnnotation";
import RugbyPlayDiagram from "@/components/playbook/RugbyPlayDiagram";
import StickyNote from "@/components/playbook/StickyNote";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE, graph, profilePageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Chivere has spent more than 17 years working in leadership development, organisational learning, change and performance improvement. Founder of Treamio and GrantsHub.eu.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: absoluteUrl("/about"),
    title: "About Mark Chivere",
    description:
      "A career built around people and performance: leadership development, organisational learning, change and performance improvement.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

const thinking = [
  {
    title: "Behavioural science",
    description:
      "Why people do what they do, and why knowing better so rarely leads to doing better.",
  },
  {
    title: "Leadership effectiveness",
    description:
      "What leaders actually do that shifts behaviour, builds trust and raises the standard of performance.",
  },
  {
    title: "Adult learning",
    description:
      "How adults genuinely develop capability, and why most training does not survive contact with the working week.",
  },
  {
    title: "Organisational change",
    description:
      "Why change initiatives stall, and what the conditions for real movement look like.",
  },
  {
    title: "Human performance",
    description:
      "What sustained high performance demands of people, teams and the systems around them.",
  },
  {
    title: "AI adoption",
    description:
      "The human factors behind technology adoption — the part that rarely makes it into the implementation plan.",
  },
];

const linkClassName =
  "group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink";

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={graph([
          profilePageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ])}
      />

      {/* Masthead */}
      <section>
        <div className="shell pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="type-eyebrow mb-5 text-bronze-ink">About</p>
              <h1 className="type-h1 mb-6 text-navy">
                A Career Built Around People and Performance
              </h1>
              <p className="type-lead text-slate">
                I&apos;ve spent more than 17 years working on a deceptively difficult question: why
                do people and organisations struggle to change, even when they already know what
                needs to be different? That question has taken me through leadership development,
                organisational learning, technology adoption and performance improvement.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
                <Image
                  src="/mark-chivere-meet.png"
                  alt="Mark Chivere"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional journey */}
      <section>
        <div className="shell pb-16 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="type-h2 mb-7 text-navy">Professional Journey</h2>
              <div className="space-y-6">
                <p className="type-body-lg text-slate">
                  I started out as a professional rugby player. Professional sport teaches you quickly
                  that talent alone rarely decides the outcome — preparation, honest feedback and how
                  a group responds under pressure usually do. That lesson has shaped everything
                  I&apos;ve done since.
                </p>
                <p className="type-body-lg text-slate">
                  From sport I moved into learning and development, and from there into leadership
                  development, facilitation and organisational change. Over that time I&apos;ve worked
                  across automotive, pharmaceuticals, FMCG, technology and professional services,
                  usually on the practical end of the problem: how do you actually help people and
                  teams perform better?
                </p>
                <p className="type-body-lg text-slate">
                  Along the way I&apos;ve worked closely with enterprise learning technology and
                  organisational capability development, and more recently with AI adoption. That
                  last area has reinforced something I already suspected — that the technology is
                  rarely the hard part.
                </p>
              </div>
            </div>

            {/* Playbook motif: rugby posts, anchored to the opening paragraph about
                Mark's sporting background. Decorative SVG, hidden from assistive
                technology and hidden below lg so it never competes with the text. */}
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <div className="flex items-center gap-3 pt-2">
                <RugbyPlayDiagram variant="posts" className="h-36 w-[11.25rem] shrink-0 text-bronze/70" />
              </div>
              <EditorialAnnotation className="mt-4">Where it began.</EditorialAnnotation>
            </div>
          </div>
        </div>
      </section>

      {/* What shapes my thinking */}
      <section className="bg-gray-100">
        <div className="shell section">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
            <div className="max-w-2xl">
              <h2 className="type-h2 mb-4 text-navy">What Shapes My Thinking</h2>
              <p className="type-body text-slate">
                Six areas I keep coming back to, in writing and in practice.
              </p>
            </div>

            {/* Playbook note — the behavioural-science theme, written the way it
                would appear in a workshop notebook. */}
            <div className="hidden lg:block">
              <StickyNote rotation={-2} tone="yellow" className="w-[15rem]">
                Knowing isn&apos;t the same as doing.
              </StickyNote>
            </div>
          </div>

          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {thinking.map((item, index) => (
              <div key={item.title} className="border-t border-gray-300 pt-7">
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

      {/* Building Treamio */}
      <section>
        <div className="shell section">
          <div className="max-w-[45rem]">
            <h2 className="type-h2 mb-7 text-navy">Building Treamio</h2>
            <div className="space-y-6">
              <p className="type-body-lg text-slate">
                I founded Treamio as the consultancy through which my organisational work is
                delivered. It is an international consulting business focused on leadership,
                organisational capability, team effectiveness and change.
              </p>
              <p className="type-body-lg text-slate">
                Treamio is where client programmes, methodologies and engagements live. My
                consulting work happens there — this website is where I think out loud about the
                ideas behind it.
              </p>
            </div>
            <TrackedLink
              href="https://treamio.com"
              target="_blank"
              rel="noopener noreferrer"
              event="treamio_referral_click"
              eventProperties={{ placement: "about" }}
              className={`mt-8 ${linkClassName}`}
            >
              Visit Treamio
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Beyond consulting */}
      <section>
        <div className="shell pb-16 md:pb-20">
          <div className="max-w-[45rem]">
            <h2 className="type-h2 mb-7 text-navy">Beyond Consulting</h2>
            <div className="space-y-6">
              <p className="type-body-lg text-slate">
                I&apos;m also interested in building things, particularly where AI can remove
                friction from work that shouldn&apos;t be that hard in the first place. That
                interest led to GrantsHub.eu, an AI-powered funding intelligence platform that helps
                organisations discover relevant grant opportunities and assess their readiness to
                pursue funding.
              </p>
              <p className="type-body-lg text-slate">
                Building a software product has been its own education — closer to the sharp end of
                technology adoption than any slide deck about it.
              </p>
            </div>
            <TrackedLink
              href="https://grantshub.eu"
              target="_blank"
              rel="noopener noreferrer"
              event="grantshub_referral_click"
              eventProperties={{ placement: "about" }}
              className={`mt-8 ${linkClassName}`}
            >
              Visit GrantsHub
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="bg-gray-100">
        <div className="shell section">
          <div className="max-w-[45rem]">
            <h2 className="type-h2 mb-7 text-navy">Today</h2>
            <div className="mb-10 space-y-6">
              <p className="type-body-lg text-slate">
                At the moment my work sits across four things that keep feeding each other: writing,
                facilitation, consulting and building. Writing forces clarity. Facilitation tests
                ideas against real rooms. Consulting pays attention to what actually holds up in an
                organisation. Building keeps me honest about how hard change really is.
              </p>
              <p className="type-body-lg text-slate">
                This website is where those threads come together — the ideas, the questions and the
                things I&apos;m still working out.
              </p>
            </div>

            <Button href="/writing" size="lg">
              Explore My Writing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
