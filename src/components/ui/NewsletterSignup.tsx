import NewsletterForm from '@/components/ui/forms/NewsletterForm';
import StickyNote from '@/components/playbook/StickyNote';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

// NOTE: This section is intentionally structured so the HubSpot newsletter form
// can be swapped for a Substack embed in a later prompt without layout changes.
export default function NewsletterSignup() {
  return (
    <section className="section bg-gray-100">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="type-eyebrow mb-5 text-bronze-ink">Newsletter</p>
            <h2 className="type-h2 mb-5 text-navy">
              Ideas on Leadership, Learning &amp; Change
            </h2>
            <p className="type-body max-w-[34rem] text-slate">
              Occasional writing on human behaviour, organisational performance and the changing
              nature of work.
            </p>

            {/* Playbook note — the one motif in this band. */}
            <div className="mt-10">
              <StickyNote rotation={1.4} tone="yellow" className="w-[16rem]">
                Writing is how I work out what I think.
              </StickyNote>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <NewsletterForm
              portalId={HUBSPOT_CONFIG.portalId}
              formId={HUBSPOT_CONFIG.forms.newsletter}
              variant="default"
              ctaLabel="Subscribe to My Writing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
