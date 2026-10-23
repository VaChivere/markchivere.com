'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) {
      // Small delay to prevent layout shift or immediate intrusion
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleSaveCustom = (preferences: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 bottom-4 left-4 z-[100] max-w-md md:left-auto"
        >
          <div className="rounded-md border border-gray-200 bg-white shadow-[0_24px_60px_-32px_rgba(25,42,56,0.45)]">
            {!showCustomize ? (
              <div className="p-6">
                <h2 className="type-h3 mb-3 text-navy">Cookies &amp; Privacy</h2>
                <p className="type-small mb-6 text-slate">
                  We use cookies to enhance your browsing experience, analyse site traffic and
                  personalise content. Your data helps us refine the leadership insights we share.
                </p>

                <div className="flex flex-col gap-3">
                  <Button type="button" onClick={handleAcceptAll} className="w-full">
                    Accept All
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={handleRejectNonEssential}
                    >
                      Essential Only
                    </Button>
                    <Button
                      type="button"
                      variant="quiet"
                      size="sm"
                      onClick={() => setShowCustomize(true)}
                    >
                      Customise
                    </Button>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href="/privacy"
                    className="type-meta text-slate underline underline-offset-4 transition-colors hover:text-navy"
                  >
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            ) : (
              <CustomizeView onSave={handleSaveCustom} onBack={() => setShowCustomize(false)} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CustomizeView({ onSave, onBack }: { onSave: (prefs: { analytics: boolean; marketing: boolean }) => void, onBack: () => void }) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const rowClassName =
    'flex items-start gap-3 rounded-md border border-gray-200 p-3.5';

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="type-h3 text-navy">Cookie Preferences</h2>
        <button
          type="button"
          onClick={onBack}
          className="type-small text-slate transition-colors hover:text-navy"
        >
          Back
        </button>
      </div>

      <div className="mb-6 space-y-3">
        <div className={`${rowClassName} opacity-60`}>
          <input
            type="checkbox"
            checked
            disabled
            aria-label="Strictly necessary cookies"
            className="mt-0.5 h-4 w-4 accent-bronze"
          />
          <div>
            <div className="type-small font-medium text-navy">Strictly Necessary</div>
            <div className="type-meta mt-0.5 text-slate">Required for the website to function properly.</div>
          </div>
        </div>

        <label className={`${rowClassName} cursor-pointer transition-colors hover:border-bronze`}>
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-bronze"
          />
          <div>
            <div className="type-small font-medium text-navy">Performance &amp; Analytics</div>
            <div className="type-meta mt-0.5 text-slate">Helps us understand how you use the site so we can improve it.</div>
          </div>
        </label>

        <label className={`${rowClassName} cursor-pointer transition-colors hover:border-bronze`}>
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-bronze"
          />
          <div>
            <div className="type-small font-medium text-navy">Marketing</div>
            <div className="type-meta mt-0.5 text-slate">Used to deliver content that is relevant to your interests.</div>
          </div>
        </label>
      </div>

      <Button
        type="button"
        onClick={() => onSave({ analytics, marketing })}
        className="w-full"
      >
        Save Preferences
      </Button>
    </div>
  );
}
