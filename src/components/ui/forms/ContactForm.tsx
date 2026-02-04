'use client';

import { useState } from 'react';
import { submitHubSpotForm } from '@/actions/hubspot';

interface ContactFormProps {
  portalId: string;
  formId: string;
}

export default function ContactForm({ portalId, formId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const fields = Object.entries(formData).map(([name, value]) => ({ name, value }));
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
    };

    try {
      const result = await submitHubSpotForm(portalId, formId, fields, context);

      if (result.success) {
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err); // Log the error to use the variable
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-100 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-midnight-blue mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-royal-purple font-semibold hover:text-midnight-blue underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="firstname" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-gray-50 focus:bg-white"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-gray-50 focus:bg-white"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-gray-50 focus:bg-white"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-gray-50 focus:bg-white"
          placeholder="Company Name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
          placeholder="How can I help you?"
        />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-midnight-blue hover:bg-royal-purple text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center mt-4">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
