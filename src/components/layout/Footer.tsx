import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import CookieSettingsButton from '@/components/ui/CookieSettingsButton';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Writing', href: '/writing' },
  { name: 'Speaking', href: '/speaking' },
  { name: 'My Work', href: '/my-work' },
  { name: 'Contact', href: '/contact' },
];

const ventures = [
  { name: 'Treamio', href: 'https://treamio.com' },
  { name: 'GrantsHub.eu', href: 'https://grantshub.eu' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Imprint', href: '/imprint' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-ivory">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-mobile-white.png"
                alt="Mark Chivere"
                width={140}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <p className="type-meta mt-6 uppercase tracking-[0.14em] text-slate-light">
              Founder of Treamio | Consultant | Facilitator | Writer
            </p>
            <p className="type-small mt-5 max-w-sm text-slate-light">
              Writing and speaking at the intersection of leadership, behavioural science,
              organisational change and artificial intelligence.
            </p>
            <a
              href="https://linkedin.com/in/markchivere"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-light transition-colors hover:border-ivory hover:text-ivory"
              aria-label="Mark Chivere on LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Navigate */}
          <nav className="md:col-span-3 md:col-start-7" aria-label="Footer">
            <h2 className="type-eyebrow mb-6 text-slate-light">Navigate</h2>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-small text-slate-light transition-colors hover:text-ivory"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <h2 className="type-eyebrow mb-6 text-slate-light">Elsewhere</h2>
            <ul className="space-y-4">
              {ventures.map((venture) => (
                <li key={venture.href}>
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-small text-slate-light transition-colors hover:text-ivory"
                  >
                    {venture.name}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-4">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-small text-slate-light transition-colors hover:text-ivory"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="type-meta mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-slate-light md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Mark Chivere. All rights reserved.</p>
          <p>The Human Side of Performance.</p>
        </div>
      </div>
    </footer>
  );
}
