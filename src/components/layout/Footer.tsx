import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import NewsletterForm from '@/components/ui/forms/NewsletterForm';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-blue text-off-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-mobile-white.png"
                alt="Mark Chivere"
                width={140}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Executive Coach | Team Effectiveness Facilitator | Leadership Development
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/approach" className="text-sm text-gray-300 hover:text-white transition-colors">Approach</Link></li>
              <li><Link href="/impact" className="text-sm text-gray-300 hover:text-white transition-colors">Impact</Link></li>
              <li><Link href="/events" className="text-sm text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-sm text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/imprint" className="text-sm text-gray-300 hover:text-white transition-colors">Imprint</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://linkedin.com/in/markchivere" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/markchivere" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-black hover:border-white/20 transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-sm font-semibold text-white mb-3">Stay Updated</h5>
              <NewsletterForm 
                portalId={HUBSPOT_CONFIG.portalId} 
                formId={HUBSPOT_CONFIG.forms.newsletter} 
                variant="footer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Mark Chivere. All rights reserved.</p>
          <p>Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
