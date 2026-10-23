'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { submitHubSpotForm } from '@/actions/hubspot';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

const INPUT =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-gray-500 focus:border-bronze';

export default function ArticleSubscribe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setStatus('submitting');
    setMessage('');

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
      const result = await submitHubSpotForm(
        HUBSPOT_CONFIG.portalId,
        HUBSPOT_CONFIG.forms.newsletter,
        fields,
        context
      );

      if (result.success) {
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '' });
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('An unexpected error occurred.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isExpanded) {
    return (
      <Button type="button" onClick={() => setIsExpanded(true)}>
        Subscribe to Insights
      </Button>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-between gap-4 rounded-md border border-gray-200 bg-white px-5 py-4">
        <span className="type-small flex items-center gap-2 font-medium text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-bronze-ink" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Subscribed successfully.
        </span>
        <button
          type="button"
          onClick={() => { setIsExpanded(false); setStatus('idle'); }}
          className="type-small text-slate transition-colors hover:text-navy"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-gray-200 bg-white p-5 md:p-6"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="article-firstname" className="sr-only">
            First name
          </label>
          <input
            id="article-firstname"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First name"
            required
            autoFocus
            className={INPUT}
          />
        </div>
        <div>
          <label htmlFor="article-lastname" className="sr-only">
            Last name
          </label>
          <input
            id="article-lastname"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last name"
            required
            className={INPUT}
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="article-email" className="sr-only">
          Email address
        </label>
        <input
          id="article-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
          className={INPUT}
        />
      </div>

      {status === 'error' && (
        <p className="type-small mt-3 text-red-700">{message}</p>
      )}

      <div className="mt-4 flex items-center gap-3">
        <Button type="submit" size="sm" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </Button>
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="type-small font-medium text-slate transition-colors hover:text-navy"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
