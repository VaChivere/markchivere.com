import Link from 'next/link';
import NewsletterForm from '@/components/ui/forms/NewsletterForm';
import { HUBSPOT_CONFIG } from '@/config/hubspot';
import { SUBSTACK_CONFIG } from '@/config/substack';

/**
 * Subscription block for the writing library.
 *
 * Substack is the intended primary publication. Until
 * NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL is configured, this falls back to the
 * existing HubSpot newsletter form so subscription still works.
 */
export default function SubstackSubscribe() {
  return (
    <section className="rounded-md border border-gray-200 bg-gray-100 px-6 py-12 md:px-12 md:py-14">
      <div className="max-w-xl">
        <p className="type-eyebrow mb-5 text-bronze-ink">Newsletter</p>
        <h2 className="type-h3 mb-4 text-navy">Ideas on Leadership, Learning &amp; Change</h2>
        <p className="type-body mb-8 text-slate">
          Occasional writing on human behaviour, organisational performance and the changing nature
          of work.
        </p>

        {SUBSTACK_CONFIG.isConfigured ? (
          <div>
            <iframe
              src={SUBSTACK_CONFIG.embedUrl}
              title="Subscribe to Mark Chivere's writing"
              width="100%"
              height="180"
              style={{ border: '1px solid #e6e0d5', borderRadius: '8px', background: '#fff' }}
              scrolling="no"
              loading="lazy"
            />
            <p className="type-small mt-3 text-slate">
              Subscribing is handled by Substack.{' '}
              <Link
                href="/privacy"
                className="text-navy underline underline-offset-4 hover:text-bronze-ink"
              >
                Privacy policy
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="max-w-md">
            <NewsletterForm
              portalId={HUBSPOT_CONFIG.portalId}
              formId={HUBSPOT_CONFIG.forms.newsletter}
              variant="default"
              ctaLabel="Subscribe to My Writing"
            />
          </div>
        )}
      </div>
    </section>
  );
}
