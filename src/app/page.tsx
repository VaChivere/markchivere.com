import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import HeroDivider from "@/components/ui/HeroDivider";
import Introduction from "@/components/ui/Introduction";
import FeaturedWriting from "@/components/ui/FeaturedWriting";
import AreasOfInterest from "@/components/ui/AreasOfInterest";
import MyWork from "@/components/ui/MyWork";
import SpeakingInvite from "@/components/ui/SpeakingInvite";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

const HOME_TITLE = "Mark Chivere | Leadership, Learning, Behaviour & Change";
const HOME_DESCRIPTION =
  "Mark Chivere writes and speaks about leadership, behavioural change, organisational learning, AI adoption and human performance. Founder of Treamio and GrantsHub.eu.";

export const metadata: Metadata = {
  // Absolute so the layout's "%s | Mark Chivere" template is not appended.
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HeroDivider />
      <Introduction />
      <FeaturedWriting />
      <AreasOfInterest />
      <MyWork />
      <SpeakingInvite />
      <NewsletterSignup />
    </div>
  );
}
