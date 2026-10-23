import { Suspense } from "react";
import type { Metadata } from "next";
import { Caveat, Inter, Manrope, Newsreader } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import MotionProvider from "@/components/providers/MotionProvider";
import HubSpotTracking from "@/components/analytics/HubSpotTracking";
import JsonLd from "@/components/seo/JsonLd";
import { HUBSPOT_CONFIG } from "@/config/hubspot";
import { DEFAULT_OG_IMAGE, SITE_URL, graph, personSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Handwriting — only for the playbook notes and annotations.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mark Chivere | Leadership, Learning, Behaviour & Change",
    template: "%s | Mark Chivere"
  },
  description: "Mark Chivere writes and speaks about leadership, behavioural change, organisational learning, AI adoption and human performance. Founder of Treamio and GrantsHub.eu.",
  keywords: ["Mark Chivere", "leadership", "behavioural change", "organisational learning", "AI adoption", "human performance", "Treamio", "GrantsHub"],
  authors: [{ name: "Mark Chivere" }],
  creator: "Mark Chivere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Mark Chivere | Leadership, Learning, Behaviour & Change",
    description: "Mark Chivere writes and speaks about leadership, behavioural change, organisational learning, AI adoption and human performance. Founder of Treamio and GrantsHub.eu.",
    siteName: "Mark Chivere",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Mark Chivere" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Chivere | Leadership, Learning, Behaviour & Change",
    description: "Mark Chivere writes and speaks about leadership, behavioural change, organisational learning, AI adoption and human performance. Founder of Treamio and GrantsHub.eu.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${newsreader.variable} ${caveat.variable} antialiased bg-ivory text-navy flex flex-col min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ivory"
        >
          Skip to content
        </a>
        <JsonLd data={graph([personSchema(), websiteSchema()])} />
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </MotionProvider>
        <Suspense fallback={null}>
          <HubSpotTracking portalId={HUBSPOT_CONFIG.portalId} />
        </Suspense>
      </body>
    </html>
  );
}
