import { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts on the intersection of AI, leadership, and human potential.",
};

export default function Insights() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
          Insights
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Perspectives on leading through the AI revolution.
        </p>

        <div className="bg-off-white rounded-2xl p-12 border border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-midnight-blue mb-4">
                Content Coming Soon
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                I'm currently compiling a series of essays and practical guides for leaders. 
                Join the newsletter to be notified when they publish.
            </p>
            
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-midnight-blue mb-4">Stay Ahead</h3>
                <NewsletterForm 
                  portalId="YOUR_PORTAL_ID" 
                  formId="YOUR_NEWSLETTER_FORM_ID" 
                />
            </div>
        </div>
      </div>
    </div>
  );
}
