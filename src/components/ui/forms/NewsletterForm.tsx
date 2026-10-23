'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { submitHubSpotForm } from '@/actions/hubspot';
import { trackEvent } from '@/lib/analytics';

interface NewsletterFormProps {
  portalId: string;
  formId: string;
  variant?: 'default' | 'footer' | 'blog-signup';
  ctaLabel?: string;
}

const INPUT_LIGHT =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-gray-500 focus:border-bronze';
const INPUT_DARK =
  'w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-slate-light focus:border-bronze-light';

export default function NewsletterForm({
  portalId,
  formId,
  variant = 'default',
  ctaLabel = 'Subscribe',
}: NewsletterFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isDark = variant === 'footer' || variant === 'blog-signup';
  const inputClass = isDark ? INPUT_DARK : INPUT_LIGHT;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const fields = [
      { name: 'email', value: formData.email },
      { name: 'firstname', value: formData.firstname },
      { name: 'lastname', value: formData.lastname }
    ];
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
    };

    try {
      const result = await submitHubSpotForm(portalId, formId, fields, context);

      if (result.success) {
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === 'success') {
    return (
      <div
        className={
          isDark
            ? 'text-left'
            : 'rounded-md border border-gray-200 bg-white p-6 text-left'
        }
      >
        <p className={`type-body mb-1 font-medium ${isDark ? 'text-ivory' : 'text-navy'}`}>
          Welcome aboard.
        </p>
        <p className={`type-small ${isDark ? 'text-slate-light' : 'text-slate'}`}>
          You&apos;ve successfully subscribed to the newsletter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-grow">
            <label htmlFor="newsletter-firstname" className="sr-only">
              First name
            </label>
            <input
              type="text"
              id="newsletter-firstname"
              name="firstname"
              required
              value={formData.firstname}
              onChange={handleChange}
              className={inputClass}
              placeholder="First name"
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="newsletter-lastname" className="sr-only">
              Last name
            </label>
            <input
              type="text"
              id="newsletter-lastname"
              name="lastname"
              required
              value={formData.lastname}
              onChange={handleChange}
              className={inputClass}
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="flex-grow">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Email address"
          />
        </div>

        <Button
          type="submit"
          variant={isDark ? 'inverse' : 'primary'}
          disabled={status === 'submitting'}
          onClick={() => trackEvent('newsletter_cta_click', { variant })}
          className="w-full"
        >
          {status === 'submitting' ? 'Submitting…' : ctaLabel}
        </Button>
      </div>

      {status === 'error' && (
        <p className={`type-small mt-2 ${isDark ? 'text-red-300' : 'text-red-600'}`}>
          {errorMessage}
        </p>
      )}

      <p className={`type-small mt-3 ${isDark ? 'text-slate-light' : 'text-slate'}`}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
