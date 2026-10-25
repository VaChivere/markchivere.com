import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HumanChangeModel from '@/components/human-change/HumanChangeModel';

/**
 * Development-only preview of the interests diagram.
 *
 * `next build` runs with NODE_ENV=production, so this renders the not-found
 * page at build time and the route is unreachable in production. It is also
 * absent from the sitemap (which lists routes explicitly) and marked noindex
 * here in case it is ever served somewhere unexpected.
 */
export const metadata: Metadata = {
  title: 'Preview — Where My Interests Sit',
  robots: { index: false, follow: false },
};

export default function HumanChangeModelPreviewPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <>
      <section className="shell pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="type-eyebrow mb-6 text-bronze-ink">Preview — not published</p>
          <h1 className="type-h1 mb-6 text-navy">Where My Interests Sit</h1>
          <p className="type-lead text-slate">
            Isolated build for review. This page is not in the site navigation, is excluded from
            production builds and is not indexed. Nothing else on the site has changed.
          </p>
        </div>
      </section>

      <HumanChangeModel />
    </>
  );
}
