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
    default: "Mark Chivere | Executive AI Leadership Coaching & Strategy",
    template: "%s | Mark Chivere"
  },
  description: "Empowering executives to lead in the age of AI. Expert AI leadership coaching, high-performance team strategy, and human-centric digital transformation.",
  keywords: ["AI leadership coaching", "executive AI strategy", "human-centric AI", "high-performance teams", "Mark Chivere", "corporate AI training", "future of work", "digital transformation", "generative AI for executives"],
  authors: [{ name: "Mark Chivere" }],
  creator: "Mark Chivere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markchivere.com",
    title: "Mark Chivere | Executive AI Leadership Coaching & Strategy",
    description: "Empowering executives to lead in the age of AI. Expert AI leadership coaching, high-performance team strategy, and human-centric digital transformation.",
    siteName: "Mark Chivere",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Chivere | Executive AI Leadership Coaching & Strategy",
    description: "Empowering executives to lead in the age of AI. Expert AI leadership coaching, high-performance team strategy, and human-centric digital transformation.",
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
