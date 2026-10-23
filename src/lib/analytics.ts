/**
 * Consent-aware, dependency-free event tracking.
 *
 * Events are only emitted when the visitor has accepted analytics cookies (or
 * selected the analytics preference in the cookie banner). Nothing is sent to a
 * third party from here — the payload is pushed to `window.dataLayer` (if a tag
 * manager is present) and dispatched as a DOM event so the existing HubSpot
 * script can consume it.
 */
export type AnalyticsEvent =
  | 'writing_page_view'
  | 'article_outbound_click'
  | 'newsletter_cta_click'
  | 'speaking_enquiry_submitted'
  | 'contact_form_submitted'
  | 'treamio_referral_click'
  | 'grantshub_referral_click';

export type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function analyticsAllowed(): boolean {
  if (typeof window === 'undefined') return false;

  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') return true;

  if (consent === 'custom') {
    try {
      const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
      return preferences.analytics === true;
    } catch {
      return false;
    }
  }

  return false;
}

export function trackEvent(event: AnalyticsEvent, properties: AnalyticsProperties = {}): void {
  if (typeof window === 'undefined') return;
  if (!analyticsAllowed()) return;

  const payload = { event, ...properties };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  window.dispatchEvent(new CustomEvent('mc:analytics', { detail: payload }));
}
