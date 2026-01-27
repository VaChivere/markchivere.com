'use client';

import { useState } from 'react';
import { submitHubSpotForm } from '@/actions/hubspot';

interface NewsletterFormProps {
  portalId: string;
  formId: string;
  variant?: 'default' | 'footer';
}

export default function NewsletterForm({ portalId, formId, variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const fields = [{ name: 'email', value: email }];
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
    };

    try {
      if (portalId === 'YOUR_PORTAL_ID' || formId === 'YOUR_NEWSLETTER_FORM_ID') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('success');
        setEmail('');
        return;
      }

      const result = await submitHubSpotForm(portalId, formId, fields, context);

      if (result.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center ${variant === 'footer' ? 'p-2' : 'p-6 bg-green-50 rounded-xl border border-green-100'}`}>
        <p className={`font-bold ${variant === 'footer' ? 'text-white' : 'text-midnight-blue text-lg'} mb-2`}>
          Welcome aboard!
        </p>
        <p className={`${variant === 'footer' ? 'text-gray-400 text-xs' : 'text-gray-600'}`}>
          You've successfully subscribed to the newsletter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col gap-3 ${variant === 'footer' ? '' : 'sm:flex-row'}`}>
        <div className="flex-grow">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border outline-none transition-all
              ${variant === 'footer' 
                ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-electric-cyan' 
                : 'bg-white border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20'
              }`}
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
            ${variant === 'footer'
              ? 'bg-electric-cyan text-midnight-blue hover:bg-white'
              : 'bg-midnight-blue text-white hover:bg-royal-purple'
            }`}
        >
          {status === 'submitting' ? '...' : 'Subscribe'}
        </button>
      </div>
      
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}
      
      <p className={`mt-3 text-xs ${variant === 'footer' ? 'text-gray-500' : 'text-gray-400'}`}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
