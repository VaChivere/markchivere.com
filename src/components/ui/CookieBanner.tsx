'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-[100] max-w-md w-full p-4"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
            {!showCustomize ? (
              <div className="p-6 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-electric-cyan/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-royal-purple/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl filter drop-shadow-md">🍪</div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-midnight-blue">
                      Cookies? Sadly, the digital kind.
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      We use them to make this site smarter, not to feed your midnight cravings. 
                      Accept them to help us improve, or manage them if you&apos;re on a digital diet.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    className="w-full py-3 px-4 bg-midnight-blue text-white font-semibold rounded-xl hover:bg-royal-purple transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    <span>Bring on the Cookies</span>
                    <span className="group-hover:rotate-12 transition-transform">🚀</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={handleRejectNonEssential}
                      className="py-2.5 px-4 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 border border-gray-200 transition-colors text-sm"
                    >
                      I&apos;m on a Diet
                    </button>
                    <button 
                      onClick={() => setShowCustomize(true)}
                      className="py-2.5 px-4 bg-transparent text-gray-500 font-medium rounded-xl hover:text-midnight-blue hover:bg-gray-50 transition-colors text-sm"
                    >
                      Pick & Choose
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Link href="/privacy" className="text-xs text-gray-400 hover:text-royal-purple underline decoration-dotted">
                    What&apos;s actually in the jar? (Privacy Policy)
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

  return (
    <div className="p-6 bg-gray-50/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold font-heading text-midnight-blue flex items-center gap-2">
          <span>⚙️</span> The Ingredients
        </h3>
        <button onClick={onBack} className="text-sm text-gray-500 hover:text-midnight-blue px-2 py-1 hover:bg-gray-100 rounded-lg transition-colors">
          Back
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm opacity-60 cursor-not-allowed">
          <input type="checkbox" checked disabled className="mt-1 w-4 h-4 text-gray-400 rounded border-gray-300" />
          <div>
            <div className="font-semibold text-gray-900 text-sm">Essential (The Flour)</div>
            <div className="text-xs text-gray-500 mt-0.5">Required for the site to function. Non-negotiable, sorry!</div>
          </div>
        </div>

        <label className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-royal-purple/30 transition-colors">
          <input 
            type="checkbox" 
            checked={analytics} 
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-1 w-4 h-4 text-royal-purple rounded border-gray-300 focus:ring-royal-purple" 
          />
          <div>
            <div className="font-semibold text-midnight-blue text-sm">Analytics (The Sugar)</div>
            <div className="text-xs text-gray-500 mt-0.5">Helps us understand how you use the site so we can make it sweeter.</div>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-royal-purple/30 transition-colors">
          <input 
            type="checkbox" 
            checked={marketing} 
            onChange={(e) => setMarketing(e.target.checked)}
            className="mt-1 w-4 h-4 text-royal-purple rounded border-gray-300 focus:ring-royal-purple" 
          />
          <div>
            <div className="font-semibold text-midnight-blue text-sm">Marketing (The Sprinkles)</div>
            <div className="text-xs text-gray-500 mt-0.5">Allows us to show you relevant content. No spam, promise.</div>
          </div>
        </label>
      </div>

      <button 
        onClick={() => onSave({ analytics, marketing })}
        className="w-full py-2.5 bg-midnight-blue text-white font-semibold rounded-xl hover:bg-royal-purple transition-colors shadow-md text-sm"
      >
        Save Preferences
      </button>
    </div>
  );
}
