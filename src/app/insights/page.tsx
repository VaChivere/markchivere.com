import { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/ui/forms/NewsletterForm";
import { HUBSPOT_CONFIG } from '@/config/hubspot';

export const metadata: Metadata = {
  title: "Insights | AI Leadership Blog & Newsletter",
  description: "Deep dives into Generative AI strategy, organizational psychology, and the future of work for senior leaders.",
};

export default function Insights() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
          Insights & Perspectives
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Leading through the AI revolution with clarity and human-centric strategy.
        </p>

        <div className="bg-off-white rounded-2xl p-12 border border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-midnight-blue mb-4">
                The Future of Leadership Library
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                I'm currently compiling a series of essays and practical guides for leaders. 
                Topics will include AI ethics, decision intelligence, and building high-trust hybrid cultures.
                Join the newsletter to receive them first.
            </p>
            
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-midnight-blue mb-4">Stay Ahead</h3>
                <NewsletterForm 
                  portalId={HUBSPOT_CONFIG.portalId} 
                  formId={HUBSPOT_CONFIG.forms.newsletter} 
                />
            </div>
        </div>
      </div>
    </div>
  );
}
