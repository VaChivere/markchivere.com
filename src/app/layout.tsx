import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
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
  title: {
    default: "Mark Chivere | AI-Augmented Human Effectiveness",
    template: "%s | Mark Chivere"
  },
  description: "Senior authority in AI-augmented human effectiveness. Helping executives and organisations adopt AI in human-first, performance-driven ways.",
  keywords: ["AI leadership", "executive coaching", "high-performance teams", "AI strategy", "human-centered AI", "Mark Chivere", "corporate training", "digital transformation"],
  authors: [{ name: "Mark Chivere" }],
  creator: "Mark Chivere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markchivere.com",
    title: "Mark Chivere | AI-Augmented Human Effectiveness",
    description: "Senior authority in AI-augmented human effectiveness. Helping executives and organisations adopt AI in human-first, performance-driven ways.",
    siteName: "Mark Chivere",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Chivere | AI-Augmented Human Effectiveness",
    description: "Senior authority in AI-augmented human effectiveness.",
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
        className={`${inter.variable} ${interTight.variable} antialiased bg-off-white text-charcoal flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
