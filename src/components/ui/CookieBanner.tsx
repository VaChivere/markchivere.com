'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CookieConsent = 'accepted' | 'rejected' | 'custom' | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) {
      // Small delay to prevent layout shift or immediate intrusion
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setConsent(storedConsent as CookieConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
    // Initialize analytics here
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleSaveCustom = (preferences: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setConsent('custom');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center items-end pointer-events-none">
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 md:p-8 max-w-4xl w-full pointer-events-auto animate-in slide-in-from-bottom-10 duration-500">
        {!showCustomize ? (
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-xl font-bold font-heading text-midnight-blue">Your Privacy Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your experience and analyze site traffic. 
                We respect your privacy and give you full control over your data.
                <br />
                <Link href="/cookies" className="text-royal-purple hover:underline font-medium">Read our Cookie Policy</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-fit">
              <button 
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-midnight-blue text-white font-semibold rounded-lg hover:bg-royal-purple transition-colors shadow-lg"
              >
                Accept All
              </button>
              <button 
                onClick={handleRejectNonEssential}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button 
                onClick={() => setShowCustomize(true)}
                className="px-6 py-3 text-gray-500 hover:text-midnight-blue font-medium underline decoration-gray-300 hover:decoration-midnight-blue transition-all"
              >
                Customize
              </button>
            </div>
          </div>
        ) : (
          <CustomizeView onSave={handleSaveCustom} onBack={() => setShowCustomize(false)} />
        )}
      </div>
    </div>
  );
}

function CustomizeView({ onSave, onBack }: { onSave: (prefs: { analytics: boolean; marketing: boolean }) => void, onBack: () => void }) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold font-heading text-midnight-blue">Customize Preferences</h3>
        <button onClick={onBack} className="text-sm text-gray-500 hover:text-midnight-blue">Back</button>
      </div>
      
      <div className="space-y-4">
        {/* Necessary */}
        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
          <input type="checkbox" checked disabled className="mt-1 h-5 w-5 text-gray-400" />
          <div>
            <span className="block font-bold text-gray-900">Strictly Necessary</span>
            <span className="text-sm text-gray-500">Required for the website to function. Cannot be disabled.</span>
          </div>
        </div>

        {/* Analytics */}
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <input 
            type="checkbox" 
            id="analytics" 
            checked={analytics} 
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-1 h-5 w-5 text-royal-purple rounded border-gray-300 focus:ring-royal-purple" 
          />
          <label htmlFor="analytics" className="cursor-pointer">
            <span className="block font-bold text-midnight-blue">Analytics</span>
            <span className="text-sm text-gray-600">Help us improve our website by collecting anonymous usage information.</span>
          </label>
        </div>

        {/* Marketing */}
        <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <input 
            type="checkbox" 
            id="marketing" 
            checked={marketing} 
            onChange={(e) => setMarketing(e.target.checked)}
            className="mt-1 h-5 w-5 text-royal-purple rounded border-gray-300 focus:ring-royal-purple" 
          />
          <label htmlFor="marketing" className="cursor-pointer">
            <span className="block font-bold text-midnight-blue">Marketing</span>
            <span className="text-sm text-gray-600">Allow us to show you relevant content and offers.</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button 
          onClick={() => onSave({ analytics, marketing })}
          className="px-8 py-3 bg-midnight-blue text-white font-semibold rounded-lg hover:bg-royal-purple transition-colors shadow-lg"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
