'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitHubSpotForm } from '@/actions/hubspot';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

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

  return (
    <div className="flex flex-col items-start">
      <motion.div
        layout
        initial={false}
        animate={{ 
          width: isExpanded ? '100%' : 'auto',
          maxWidth: isExpanded ? '480px' : 'auto'
        }}
        className={`relative overflow-hidden ${
          isExpanded 
            ? 'bg-white border border-gray-200 rounded-2xl shadow-xl' 
            : 'bg-midnight-blue rounded-full shadow-lg shadow-midnight-blue/20 hover:bg-royal-purple'
        }`}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.button
              key="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout="position"
              onClick={() => setIsExpanded(true)}
              className="px-8 py-3 text-white font-bold whitespace-nowrap w-full h-full flex items-center justify-center"
              whileTap={{ scale: 0.98 }}
            >
              Subscribe to Insights
            </motion.button>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-2"
            >
              {status === 'success' ? (
              <div className="flex items-center justify-between px-4 py-2 text-green-700 bg-green-50 rounded-xl">
                <span className="font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Subscribed successfully!
                </span>
                <button 
                  onClick={() => { setIsExpanded(false); setStatus('idle'); }}
                  className="text-xs text-green-800 hover:underline ml-4"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    autoFocus
                    className="w-1/2 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 text-gray-800 placeholder-gray-400 bg-gray-50"
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-1/2 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 text-gray-800 placeholder-gray-400 bg-gray-50"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 text-gray-800 placeholder-gray-400 bg-gray-50"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="px-4 py-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors font-medium text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-2.5 bg-midnight-blue text-white font-bold rounded-xl hover:bg-royal-purple transition-colors disabled:opacity-70 whitespace-nowrap"
                  >
                    {status === 'submitting' ? '...' : 'Join'}
                  </button>
                </div>
              </form>
            )}
            
            {status === 'error' && (
               <p className="text-xs text-red-500 mt-2 px-2">{message}</p>
            )}
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
