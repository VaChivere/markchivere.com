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
                We don&apos;t just talk about potential. We measure results in revenue, retention, and resilience.
                Our clients see tangible ROI from their AI investments by focusing on the human element first.
            </p>
        </div>
      </div>
      
      <Impact />
    </div>
  );
}
