import { Metadata } from "next";
import WorkshopForm from '@/components/ui/forms/WorkshopForm';
import { HUBSPOT_CONFIG } from '@/config/hubspot';

export const metadata: Metadata = {
  title: "AI Workshops | Leadership, Strategy & Productivity Training",
  description: "Outcome-focused AI workshops for executive teams. Learn Generative AI strategy, team alignment, and productivity frameworks.",
};

export default function Workshops() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
            Executive AI Workshops & Training
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical, outcome-focused sessions designed to help your team navigate the AI era with confidence, clarity, and measurable impact.
          </p>
        </div>

        <div className="space-y-16">
          {/* Workshop 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold font-heading text-midnight-blue mb-4">
                  AI-Augmented Leadership & Strategy
                </h2>
                <p className="text-royal-purple font-semibold mb-4">
                  For Executive Teams & Senior Leaders
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn how to integrate AI into your strategic decision-making process without losing the human nuance that defines great leadership. We focus on practical frameworks for &quot;Human + AI&quot; collaboration at the highest level.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Strategic foresight with AI
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ethical decision-making frameworks
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Leading teams through AI transformation
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-midnight-blue mb-4">Inquire About This Workshop</h3>
                <WorkshopForm 
                  portalId={HUBSPOT_CONFIG.portalId} 
                  formId={HUBSPOT_CONFIG.forms.workshop} 
                  workshopName="AI-Augmented Leadership & Strategy"
                />
              </div>
            </div>
          </div>

          {/* Workshop 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold font-heading text-midnight-blue mb-4">
                  High-Performance Team Alignment
                </h2>
                <p className="text-royal-purple font-semibold mb-4">
                  For Cross-Functional & Project Teams
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reduce friction and improve accountability in distributed or hybrid teams. We use AI-enhanced tools to deepen understanding of communication styles (DISC/Insights) and streamline collaboration protocols.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    AI-facilitated communication audits
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Trust-building in digital environments
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-electric-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Actionable feedback loops
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 w-full bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-midnight-blue mb-4">Inquire About This Workshop</h3>
                <WorkshopForm 
                  portalId={HUBSPOT_CONFIG.portalId} 
                  formId={HUBSPOT_CONFIG.forms.workshop} 
                  workshopName="High-Performance Team Alignment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
