'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

interface HubSpotTrackingProps {
  portalId: string;
}

export default function HubSpotTracking({ portalId }: HubSpotTrackingProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      const preferences = localStorage.getItem('cookiePreferences');
      
      if (consent === 'accepted') {
        setShouldLoad(true);
      } else if (consent === 'custom' && preferences) {
        try {
          const prefs = JSON.parse(preferences);
          if (prefs.analytics) {
            setShouldLoad(true);
          }
        } catch (e) {
          console.error('Error parsing cookie preferences', e);
        }
      }
    };

    checkConsent();

    // Listen for updates
    window.addEventListener('cookie_consent_updated', checkConsent);
    return () => window.removeEventListener('cookie_consent_updated', checkConsent);
  }, []);

  useEffect(() => {
    if (shouldLoad && window._hsq) {
      // Track page view on route change
      window._hsq.push(['setPath', pathname]);
      window._hsq.push(['trackPageView']);
    }
  }, [pathname, searchParams, shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <Script
      id="hs-script-loader"
      async
      defer
      src={`//js.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _hsq: any[];
  }
}
