import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CoachBoard from "@/components/playbook/CoachBoard";
import StickyNote from "@/components/playbook/StickyNote";
import SpeakingEnquiryForm from "@/components/ui/forms/SpeakingEnquiryForm";
import { HUBSPOT_CONFIG } from "@/config/hubspot";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Mark Chivere contributes to professional conversations about how people learn, how organisations change and what leadership requires in a technology-driven world.",
  alternates: { canonical: "/speaking" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/speaking"),
    title: "Speaking | Mark Chivere",
    description:
      "Conversations about leadership, learning, organisational change and the human side of technology adoption.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

const topics = [
  "Why Leadership Development Doesn't Always Change Behaviour",
  "The Human Side of AI Adoption",
  "Building Organisational Capability That Lasts",
  "Why Change Initiatives Struggle to Gain Traction",
  "Learning, Leadership and the Future of Work",
];

const formats = [
  "Conference presentations",
  "Panel discussions",
  "Moderated conversations",
  "Executive roundtables",
  "Professional workshops",
];

export default function SpeakingPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Speaking", path: "/speaking" },
          ]),
        ])}
      />

      {/* Masthead */}
      <section className="shell pt-12 pb-14 md:pt-16 md:pb-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="type-eyebrow mb-6 text-bronze-ink">Speaking</p>
            <h1 className="type-h1 mb-6 text-navy">
              Speaking About People, Performance and Change
            </h1>
            <p className="type-lead text-slate">
              I contribute to professional conversations about how people learn, how organisations
              change and what leadership requires in an increasingly technology-driven world.
            </p>
          </div>

          {/* Playbook motif — the coach's board with a workshop note on it.
              Decorative art is hidden from assistive technology and hidden below
              lg so it never crowds the heading on narrow screens. */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mt-1">
              <CoachBoard variant="board" className="h-[15rem] w-[20rem] text-navy/60" />
              <StickyNote rotation={2} className="absolute -bottom-5 -left-5 w-[13.5rem]">
                The best sessions start with a real problem.
              </StickyNote>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section border-t border-gray-200">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="type-h2 mb-4 text-navy">Topics I Explore</h2>
            <p className="type-body text-slate">
              These are the themes I work with, not a set list — sessions are shaped around the
              audience and the problem in the room.
            </p>
          </div>

          <ul className="mt-12 max-w-4xl divide-y divide-gray-200 border-t border-gray-200">
            {topics.map((topic, index) => (
              <li key={topic} className="flex items-baseline gap-6 py-6">
                <span className="type-meta shrink-0 text-bronze-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="type-h3 text-navy">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formats */}
      <section className="section border-y border-gray-200 bg-gray-100">
        <div className="shell">
          <h2 className="type-h2 mb-10 text-navy">Formats</h2>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <li key={format} className="border-t border-gray-300 pt-4">
                <span className="type-body font-medium text-navy">{format}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="section">
        <div className="shell">
          <div className="mb-10 max-w-3xl">
            <h2 className="type-h2 mb-4 text-navy">Upcoming Sessions</h2>
            <p className="type-body text-slate">
              Workshops, webinars and conversations I&apos;m hosting or joining.
            </p>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-3 md:p-5">
            <iframe
              src="https://luma.com/embed/calendar/cal-ESpEFrrSTDvpcbT/events?lt=light"
              width="100%"
              height="600"
              style={{ border: "none", borderRadius: "6px", minHeight: "600px" }}
              allowFullScreen
              title="Mark Chivere Events Calendar"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section border-t border-gray-200">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="type-h2 mb-4 text-navy">Speaking Enquiries</h2>
            <p className="type-body mb-10 text-slate">
              If you&apos;re planning an event, a leadership session or an internal conversation
              about change, tell me a little about it.
            </p>

            <div className="rounded-md border border-gray-200 bg-white p-8 md:p-10">
              <SpeakingEnquiryForm
                portalId={HUBSPOT_CONFIG.portalId}
                formId={HUBSPOT_CONFIG.forms.speaking || HUBSPOT_CONFIG.forms.contact}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
