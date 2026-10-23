/**
 * Substack publication configuration.
 *
 * The publication URL has not been supplied yet. Set
 * NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL (e.g. https://markchivere.substack.com)
 * to enable feed ingestion and the subscription embed. Until then the site
 * falls back to the existing HubSpot newsletter form.
 */
const rawPublicationUrl = (process.env.NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL || '').trim();
const publicationUrl = rawPublicationUrl.replace(/\/+$/, '');

export const SUBSTACK_CONFIG = {
  publicationUrl,
  isConfigured: publicationUrl.length > 0,
  /** Public RSS feed. Substack publishes this at /feed for every publication. */
  feedUrl: publicationUrl ? `${publicationUrl}/feed` : '',
  /** Official Substack signup embed. */
  embedUrl: publicationUrl ? `${publicationUrl}/embed` : '',
  subscribeUrl: publicationUrl ? `${publicationUrl}/subscribe` : '',
};
