'use client';

import { useState, useEffect } from 'react';
import { Linkedin, Mail, Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Get the current URL on the client side
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUrl(window.location.href);
    }
  }, []);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10',
    },
    {
      name: 'X (Twitter)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:text-black hover:bg-black/10',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=Check out this article by Mark Chivere: ${encodeURIComponent(url)}`,
      color: 'hover:text-midnight-blue hover:bg-midnight-blue/10',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  if (!url) return null; // Avoid hydration mismatch or empty links

  return (
    <div className="flex items-center gap-4 py-6 border-t border-b border-gray-100 my-8">
      <span className="text-sm font-bold text-midnight-blue uppercase tracking-wider mr-2">
        Share
      </span>
      
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 text-gray-400 rounded-full transition-all duration-300 ${link.color}`}
            aria-label={`Share on ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}

        <button
          onClick={copyToClipboard}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            copied 
              ? 'text-green-600 bg-green-50' 
              : 'text-gray-400 hover:text-midnight-blue hover:bg-gray-100'
          }`}
          aria-label="Copy link"
        >
          {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
