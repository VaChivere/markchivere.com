'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Makes every Framer Motion animation respect the user's reduced-motion
 * preference without each component having to check for it. Transform and
 * layout animations are disabled; opacity fades are left intact.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
