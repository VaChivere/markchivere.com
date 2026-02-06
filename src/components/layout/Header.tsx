'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/approach' },
    { name: 'Impact', href: '/impact' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? 'bg-transparent' : 'glass-panel'}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
          {/* Desktop Logo - Wide */}
          <div className="hidden md:block">
            <Image
              src={isMenuOpen ? "/mark-chivere-logo-white.svg" : "/logo-wide.png"}
              alt="Mark Chivere"
              width={240}
              height={48}
              className="h-12 w-auto transition-all duration-300"
              priority
            />
          </div>
          {/* Mobile Logo - Stacked */}
          <div className="md:hidden">
            <Image
              src={isMenuOpen ? "/mark-chivere-logo-white.svg" : "/logo-stacked.png"}
              alt="Mark Chivere"
              width={140}
              height={56}
              className="h-14 w-auto transition-all duration-300"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-royal-purple font-semibold' : 'text-charcoal hover:text-royal-purple'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-midnight-blue hover:bg-royal-purple rounded-full transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-charcoal z-50 relative" 
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-midnight-blue z-40 flex flex-col transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
           <div className="flex flex-col h-full px-6 pt-24 pb-8 overflow-y-auto">
             
             {/* Thematic Headline */}
             <div className="mb-12">
               <h2 className="text-5xl font-bold font-heading text-white mb-2 leading-tight">
                 Leadership.<br />
                 <span className="text-electric-cyan">Redefined.</span>
               </h2>
               <p className="text-gray-400 text-lg">
                 Navigating the age of AI with human wisdom.
               </p>
             </div>

             {/* Navigation Links */}
             <nav className="flex flex-col flex-grow">
               <div className="border-t border-white/10"></div>
               {navLinks.map((link) => (
                 <Link 
                   key={link.href}
                   href={link.href} 
                   className="group flex items-center justify-between py-5 border-b border-white/10 text-xl font-medium text-white transition-all hover:pl-4"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <span>{link.name}</span>
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity text-electric-cyan">
                     →
                   </span>
                 </Link>
               ))}
               
               <div className="mt-auto pt-8">
                 <Link 
                    href="/contact" 
                    className="block w-full py-4 text-center text-lg font-bold text-midnight-blue bg-electric-cyan hover:bg-white rounded-full transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
               </div>
             </nav>

             {/* Footer Note */}
             <div className="mt-8 text-xs text-gray-500">
               © {new Date().getFullYear()} Mark Chivere
             </div>
           </div>
        </div>
      </div>
    </header>
  );
}
