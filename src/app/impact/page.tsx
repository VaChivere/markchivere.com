import { Metadata } from "next";
import Impact from "@/components/ui/Impact"; // Reusing the Impact component as a base

export const metadata: Metadata = {
  title: "Impact & Case Studies | ROI of AI Leadership",
  description: "Real-world results: 42% stress reduction, 30x revenue growth, and transformed leadership capabilities. See the ROI of human-centric AI.",
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
       {/* Reusing the existing Impact section component */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
                Measurable Transformation & Business Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just talk about potential. We measure results in revenue, retention, and resilience.
                Our clients see tangible ROI from their AI investments by focusing on the human element first.
            </p>
        </div>
      </div>
      
      <Impact />

      <div className="container mx-auto px-4 md:px-6 py-12 pb-24">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold font-heading text-midnight-blue mb-12 text-center">Client Success Stories</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-royal-purple"></div>
                    <h3 className="text-xl font-bold text-royal-purple mb-2">Global Telecommunications Giant</h3>
                    <p className="text-midnight-blue font-medium mb-4">Leadership Development Program</p>
                    <p className="text-gray-600 leading-relaxed italic">
                        "The integration of AI tools into our leadership curriculum didn't just modernize the content—it engaged our leaders in a way we haven't seen in years. Mark's approach demystified the technology and focused purely on the human advantage, resulting in a 40% increase in adoption."
                    </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-electric-cyan"></div>
                    <h3 className="text-xl font-bold text-royal-purple mb-2">FMCG Multinational</h3>
                    <p className="text-midnight-blue font-medium mb-4">Team Effectiveness Workshop</p>
                    <p className="text-gray-600 leading-relaxed italic">
                        "We were struggling with hybrid work friction. The data-driven insights combined with Mark's facilitation helped us reset our team norms. Productivity is up, but more importantly, stress is down by 42% across participating teams."
                    </p>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
