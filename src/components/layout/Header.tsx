'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Speaking', href: '/speaking' },
  { name: 'My Work', href: '/my-work' },
  { name: 'Contact', href: '/contact' },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const meetingUrl = HUBSPOT_CONFIG.meetings.primary || '/contact';
  const isExternalMeeting = meetingUrl.startsWith('http');

  // Close the menu when the route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Lift the header off the page once the user scrolls
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // With the menu open the header is opaque navy rather than transparent: it
  // shares its surface with the panel below, so the masthead and the panel read
  // as one sheet and nothing can show through at the seam.
  const headerTone = isMenuOpen
    ? 'bg-navy border-b border-transparent'
    : isScrolled
      ? 'bg-ivory/95 backdrop-blur-sm border-b border-gray-200'
      : 'bg-ivory/80 backdrop-blur-sm border-b border-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerTone}`}>
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" className="relative z-50 shrink-0">
          <span className="hidden md:block">
            <Image
              src="/logos/mark-chivere-horizontal-source-light.png"
              alt="Mark Chivere"
              width={3454}
              height={592}
              sizes="240px"
              className="h-8 w-auto"
              priority
            />
          </span>
          <span className="md:hidden">
            <Image
              src={
                isMenuOpen
                  ? '/logos/mark-chivere-horizontal-source-dark.png'
                  : '/logos/mark-chivere-horizontal-source-light.png'
              }
              alt="Mark Chivere"
              width={3454}
              height={592}
              sizes="180px"
              className="h-6 w-auto"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`relative text-[0.9375rem] transition-colors ${
                  active ? 'text-navy' : 'text-slate hover:text-navy'
                }`}
              >
                {link.name}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-bronze"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={meetingUrl} external={isExternalMeeting} size="sm">
            Schedule a Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`relative z-50 p-2 md:hidden ${isMenuOpen ? 'text-ivory' : 'text-navy'}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col bg-navy md:hidden">
          {/* The masthead is deliberately outside the scroll container. It holds
              its position under the logo, so the two stay put as one fixed head
              while only the links below travel — nothing passes under the logo. */}
          <div className="shrink-0 px-6 pb-10 pt-28">
            <h2 className="type-h2 mb-3 text-ivory">
              The Human Side
              <br />
              <em className="font-editorial font-normal italic">of Performance.</em>
            </h2>
            <p className="type-body text-slate-light">
              Leadership, learning and the changing nature of work.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-10">
            <nav className="flex flex-col border-t border-white/10" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="type-h3 flex items-center justify-between border-b border-white/10 py-5 text-ivory"
                >
                  <span>{link.name}</span>
                  <span aria-hidden="true" className="text-bronze-light">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <Button
                href={meetingUrl}
                external={isExternalMeeting}
                variant="inverse"
                size="lg"
                className="w-full"
              >
                Schedule a Call
              </Button>
            </div>

            <p className="type-meta mt-8 text-slate-light">
              © {new Date().getFullYear()} Mark Chivere
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
