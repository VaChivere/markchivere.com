'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import TrackedLink from '@/components/analytics/TrackedLink';
import { trackEvent } from '@/lib/analytics';
import { submitHubSpotForm } from '@/actions/hubspot';

interface ContactFormProps {
  portalId: string;
  formId: string;
}

const ENQUIRY_TYPES = [
  'Speaking or Event',
  'Professional Collaboration',
  'Media or Interview',
  'General Enquiry',
  'Organisational Consulting',
];

const CONSULTING = 'Organisational Consulting';

const EMPTY = {
  name: '',
  email: '',
  enquiryType: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm({ portalId, formId }: ContactFormProps) {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  // Spam protection: a honeypot field plus a minimum time-to-complete check.
  const [honeypot, setHoneypot] = useState('');
  const renderedAt = useRef<number | null>(null);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (honeypot.trim() !== '') return;
    const startedAt = renderedAt.current;
    if (startedAt !== null && Date.now() - startedAt < 3000) {
      setStatus('error');
      setErrorMessage('That was submitted a little too quickly. Please try again.');
      return;
    }

    const [firstname, ...rest] = formData.name.trim().split(/\s+/);
    const lastname = rest.join(' ');
    const email = formData.email.trim();

    if (!firstname || !email) {
      setStatus('error');
      setErrorMessage('Please provide your name and email address.');
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please add a short message so I know how to help.');
      return;
    }

    setStatus('submitting');

    // The existing HubSpot form only accepts its own known properties, so the
    // enquiry type is composed into the message body.
    const body = [
      `Enquiry type: ${formData.enquiryType || 'General Enquiry'}`,
      '',
      formData.message,
    ].join('\n');

    const fields = [
      { name: 'firstname', value: firstname },
      { name: 'lastname', value: lastname },
      { name: 'email', value: email },
      { name: 'message', value: body },
    ];

    try {
      const result = await submitHubSpotForm(portalId, formId, fields, {
        pageUri: window.location.href,
        pageName: document.title,
      });

      if (result.success) {
        setStatus('success');
        trackEvent('contact_form_submitted', {
          enquiryType: formData.enquiryType || 'General Enquiry',
        });
        setFormData(EMPTY);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-md border border-gray-200 bg-white p-8">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-gray-200">
          <svg
            className="h-6 w-6 text-bronze-ink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="type-h3 mb-2 text-navy">Message sent</h3>
        <p className="type-body mb-6 text-slate">
          Thank you for getting in touch. I&apos;ll come back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="type-small text-navy underline underline-offset-4 transition-colors hover:text-bronze-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClassName =
    'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-gray-500 focus:border-bronze';
  const labelClassName = 'type-small mb-2 block font-medium text-navy';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from users, attractive to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          type="text"
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClassName}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClassName}
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClassName}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClassName}
          placeholder="jane@organisation.com"
        />
      </div>

      <div>
        <label htmlFor="contact-enquiry-type" className={labelClassName}>
          Enquiry type
        </label>
        <select
          id="contact-enquiry-type"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className={inputClassName}
        >
          <option value="">Select an enquiry type</option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {formData.enquiryType === CONSULTING && (
        <p className="type-small rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-slate">
          Organisational consulting is delivered through Treamio.{' '}
          <TrackedLink
            href="https://treamio.com"
            target="_blank"
            rel="noopener noreferrer"
            event="treamio_referral_click"
            eventProperties={{ placement: "contact" }}
            className="font-medium text-navy underline underline-offset-4 hover:text-bronze-ink"
          >
            Visit Treamio
          </TrackedLink>{' '}
          to see how that work is structured.
        </p>
      )}

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClassName} resize-none`}
          placeholder="Tell me a little about what you have in mind."
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="type-small rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {errorMessage}
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      <p className="type-small text-slate">
        Your details are used only to respond to this enquiry. See the{' '}
        <a href="/privacy" className="text-navy underline underline-offset-4 hover:text-bronze-ink">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
