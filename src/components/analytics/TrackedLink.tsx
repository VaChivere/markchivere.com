'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { trackEvent, type AnalyticsEvent, type AnalyticsProperties } from '@/lib/analytics';

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: AnalyticsEvent;
  eventProperties?: AnalyticsProperties;
  children: ReactNode;
}

/**
 * An anchor that records a consent-gated analytics event on click. Used for
 * outbound article links and venture referrals.
 */
export default function TrackedLink({
  event,
  eventProperties,
  children,
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (clickEvent: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event, eventProperties);
    onClick?.(clickEvent);
  };

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
