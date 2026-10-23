import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TrackedLink from "@/components/analytics/TrackedLink";
import ContactForm from "@/components/ui/forms/ContactForm";
import { HUBSPOT_CONFIG } from "@/config/hubspot";
import { absoluteUrl, breadcrumbSchema, DEFAULT_OG_IMAGE, graph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mark Chivere about speaking engagements, professional collaboration, media enquiries or general questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/contact"),
    title: "Contact | Mark Chivere",
    description:
      "Open to professional conversations, speaking enquiries, collaborations and opportunities to exchange ideas.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

const linkClassName =
  "group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />

      {/* Masthead */}
      <section className="shell pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="type-eyebrow mb-6 text-bronze-ink">Contact</p>
          <h1 className="type-h1 mb-6 text-navy">Let&apos;s Connect</h1>
          <p className="type-lead text-slate">
            I&apos;m open to professional conversations, speaking enquiries, collaborations and
            opportunities to exchange ideas.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="section border-t border-gray-200">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="type-h3 mb-6 text-navy">Send a Message</h2>
              <div className="rounded-md border border-gray-200 bg-white p-8 md:p-10">
                <ContactForm
                  portalId={HUBSPOT_CONFIG.portalId}
                  formId={HUBSPOT_CONFIG.forms.contact}
                />
              </div>
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div className="border-t border-gray-300 pt-8">
                <h2 className="type-eyebrow mb-4 text-bronze-ink">Email</h2>
                <a
                  href="mailto:mark@markchivere.com"
                  className="type-body text-slate transition-colors hover:text-bronze-ink"
                >
                  mark@markchivere.com
                </a>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <h2 className="type-eyebrow mb-4 text-bronze-ink">LinkedIn</h2>
                <a
                  href="https://linkedin.com/in/markchivere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-slate transition-colors hover:text-bronze-ink"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <h2 className="type-eyebrow mb-4 text-bronze-ink">Organisational consulting</h2>
                <p className="type-body mb-4 text-slate">
                  Consulting engagements are delivered through Treamio. If your enquiry is about
                  consulting, you&apos;ll get a faster answer there.
                </p>
                <TrackedLink
                  href="https://treamio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  event="treamio_referral_click"
                  eventProperties={{ placement: "contact-sidebar" }}
                  className={linkClassName}
                >
                  Visit Treamio
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
