import { Metadata } from "next";
import HubSpotForm from '@/components/ui/HubSpotForm';

export const metadata: Metadata = {
  title: "Contact Mark Chivere",
  description: "Get in touch for executive coaching, speaking engagements, or workshop inquiries.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore how AI can amplify your leadership and organizational performance? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Contact Info Side */}
          <div className="bg-gradient-to-br from-royal-purple to-midnight-blue text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for executive coaching, team workshops, or a keynote speaker, I'm here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <svg className="w-6 h-6 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a href="mailto:mark@markchivere.com" className="text-gray-300 hover:text-white transition-colors">mark@markchivere.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <svg className="w-6 h-6 text-electric-cyan" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LinkedIn</h3>
                    <a href="https://linkedin.com/in/markchivere" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Connect on LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Mark Chivere. All rights reserved.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 bg-white">
            <h2 className="text-2xl font-bold font-heading text-midnight-blue mb-6">Send a Message</h2>
            <HubSpotForm 
              portalId="YOUR_PORTAL_ID" 
              formId="YOUR_FORM_ID" 
              targetId="contact-form" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
