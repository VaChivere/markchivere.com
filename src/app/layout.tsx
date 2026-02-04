import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import HubSpotTracking from "@/components/analytics/HubSpotTracking";
import { HUBSPOT_CONFIG } from "@/config/hubspot";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://markchivere.com'),
  title: {
    default: "Mark Chivere | Executive Coaching & Team Effectiveness Programs",
    template: "%s | Mark Chivere"
  },
  description: "Empowering leaders and teams through science-backed coaching, workshops, and AI integration strategies. Trusted by global enterprises to drive performance and well-being.",
  keywords: ["executive coaching", "team effectiveness", "leadership development", "AI integration strategies", "Mark Chivere", "corporate workshops", "science-backed coaching", "high-performance teams"],
  authors: [{ name: "Mark Chivere" }],
  creator: "Mark Chivere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markchivere.com",
    title: "Mark Chivere | Executive Coaching & Team Effectiveness Programs",
    description: "Empowering leaders and teams through science-backed coaching, workshops, and AI integration strategies. Trusted by global enterprises to drive performance and well-being.",
    siteName: "Mark Chivere",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Chivere | Executive Coaching & Team Effectiveness Programs",
    description: "Empowering leaders and teams through science-backed coaching, workshops, and AI integration strategies. Trusted by global enterprises to drive performance and well-being.",
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
  icons: {
    icon: '/favicon-new.png',
    apple: '/favicon-new.png',
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
        className={`${inter.variable} ${interTight.variable} antialiased bg-off-white text-charcoal flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Suspense fallback={null}>
          <HubSpotTracking portalId={HUBSPOT_CONFIG.portalId} />
        </Suspense>
      </body>
    </html>
  );
}
