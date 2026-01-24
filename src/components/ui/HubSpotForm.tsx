'use client';

import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  targetId: string;
}

declare global {
  interface Window {
    hbspt?: any;
  }
}

export default function HubSpotForm({ portalId, formId, targetId }: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          target: `#${targetId}`,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, formId, targetId]);

  return (
    <div id={targetId} ref={formRef} className="hubspot-form-container min-h-[200px] bg-gray-50 rounded-lg p-4">
      {/* Loading state or fallback */}
      <div className="flex items-center justify-center h-full text-gray-400 text-sm">
        Loading form...
      </div>
    </div>
  );
}
