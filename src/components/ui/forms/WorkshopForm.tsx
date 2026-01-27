'use client';

import { useState } from 'react';
import { submitHubSpotForm } from '@/actions/hubspot';

interface WorkshopFormProps {
  portalId: string;
  formId: string;
  workshopName: string;
}

export default function WorkshopForm({ portalId, formId, workshopName }: WorkshopFormProps) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    jobtitle: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const fields = [
      ...Object.entries(formData).map(([name, value]) => ({ name, value })),
      { name: 'workshop_interest', value: workshopName } // Hidden field context
    ];
    
    const context = {
      pageUri: window.location.href,
      pageName: document.title,
    };

    try {
      if (portalId === 'YOUR_PORTAL_ID' || formId === 'YOUR_WORKSHOP_FORM_ID') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '', company: '', jobtitle: '', message: '' });
        return;
      }

      const result = await submitHubSpotForm(portalId, formId, fields, context);

      if (result.success) {
        setStatus('success');
        setFormData({ firstname: '', lastname: '', email: '', company: '', jobtitle: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center animate-fade-in">
        <h3 className="text-xl font-bold text-midnight-blue mb-2">Inquiry Received!</h3>
        <p className="text-gray-600 mb-4 text-sm">Thanks for your interest in the "{workshopName}" workshop. I'll be in touch with details soon.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-royal-purple font-semibold hover:text-midnight-blue underline text-sm"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`firstname-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            id={`firstname-${workshopName}`}
            name="firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm"
          />
        </div>
        <div>
          <label htmlFor={`lastname-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            id={`lastname-${workshopName}`}
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`email-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">Work Email</label>
        <input
          type="email"
          id={`email-${workshopName}`}
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`company-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">Company</label>
          <input
            type="text"
            id={`company-${workshopName}`}
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm"
          />
        </div>
        <div>
          <label htmlFor={`jobtitle-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            id={`jobtitle-${workshopName}`}
            name="jobtitle"
            value={formData.jobtitle}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`message-${workshopName}`} className="block text-xs font-semibold text-gray-700 mb-1">Specific Questions? (Optional)</label>
        <textarea
          id={`message-${workshopName}`}
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none transition-all bg-white text-sm resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 bg-midnight-blue hover:bg-royal-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
      >
        {status === 'submitting' ? 'Sending...' : 'Request Information'}
      </button>
    </form>
  );
}
