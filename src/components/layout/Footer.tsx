import Link from 'next/link';
import NewsletterForm from '@/components/ui/forms/NewsletterForm';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-blue text-off-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading text-white">Mark Chivere</h3>
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
                <a href="https://linkedin.com/in/markchivere" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mark@markchivere.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  mark@markchivere.com
                </a>
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
