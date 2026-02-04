'use client';

import { useState } from 'react';
import { submitHubSpotForm } from '@/actions/hubspot';

interface NewsletterFormProps {
  portalId: string;
  formId: string;
  variant?: 'default' | 'footer' | 'blog-signup';
}

export default function NewsletterForm({ portalId, formId, variant = 'default' }: NewsletterFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      <div className={`text-center ${variant === 'footer' ? 'p-2' : 'p-6 bg-green-50 rounded-xl border border-green-100'}`}>
        <p className={`font-bold ${variant === 'footer' || variant === 'blog-signup' ? 'text-white' : 'text-midnight-blue text-lg'} mb-2`}>
          Welcome aboard!
        </p>
        <p className={`${variant === 'footer' || variant === 'blog-signup' ? 'text-gray-400 text-xs' : 'text-gray-600'}`}>
          You&apos;ve successfully subscribed to the newsletter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3">
        <div className={`flex flex-col gap-3 ${variant === 'footer' ? '' : 'sm:flex-row'}`}>
          <div className="flex-grow">
            <label htmlFor="newsletter-firstname" className="sr-only">First Name</label>
            <input
              type="text"
              id="newsletter-firstname"
              name="firstname"
              required
              value={formData.firstname}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all
                ${variant === 'footer' || variant === 'blog-signup'
                  ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-electric-cyan' 
                  : 'bg-white border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20'
                }`}
              placeholder="First Name"
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="newsletter-lastname" className="sr-only">Last Name</label>
            <input
              type="text"
              id="newsletter-lastname"
              name="lastname"
              required
              value={formData.lastname}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all
                ${variant === 'footer' || variant === 'blog-signup'
                  ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-electric-cyan' 
                  : 'bg-white border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20'
                }`}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex-grow">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border outline-none transition-all
              ${variant === 'footer' || variant === 'blog-signup'
                ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-electric-cyan' 
                : 'bg-white border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20'
              }`}
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
            ${variant === 'footer' || variant === 'blog-signup'
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
      
      <p className={`mt-3 text-xs ${variant === 'footer' || variant === 'blog-signup' ? 'text-gray-500' : 'text-gray-400'}`}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
