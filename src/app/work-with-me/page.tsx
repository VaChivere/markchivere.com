import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Executive AI Coaching & Team Workshops",
  description: "Strategic AI leadership coaching, high-performance team alignment, and practical AI productivity workshops for C-suite and senior leaders.",
};

export default function WorkWithMe() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-6">
          Work With Me
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          I partner with executives and organisations to navigate the complexity of the AI era. 
          My work is not about implementing tools, but about upgrading human capability to wield them effectively.
        </p>

        <div className="space-y-12">
          {/* Service 1 */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">01</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Leadership Coaching
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-xl text-midnight-blue font-medium mb-4">
                  For C-Suite & Senior Executives
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  We work one-on-one to refine your decision quality and executive presence in digital channels. 
                  This is a space to navigate the uncertainty of technological disruption with clarity and confidence.
                  We focus on strategic foresight, AI ethics, and maintaining human connection in automated systems.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Inquire about coaching
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">02</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Team Alignment
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-xl text-midnight-blue font-medium mb-4">
                  For Distributed & Hybrid Teams
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  We use AI-enhanced diagnostics to uncover communication gaps and build protocols for high-trust collaboration. 
                  It's about getting everyone pulling in the same direction, faster. We help teams establish "Rules of Engagement" for hybrid work and AI tool usage.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Discuss team programs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">03</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Workshops
                </h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-xl text-midnight-blue font-medium mb-4">
                  Intensive & Outcome-Focused
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  Practical sessions on AI strategy, productivity, and leadership. 
                  Designed for immediate impact and capability transfer—no fluff, just actionable tools.
                  Learn how to use Generative AI for strategic planning, content creation, and workflow optimization.
                </p>
                <Link href="/workshops" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  View Workshop Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold font-heading text-midnight-blue mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-midnight-blue mb-2">How is this different from technical AI training?</h3>
              <p className="text-gray-600">
                We focus on the <strong>human side of AI</strong>. While technical training teaches you buttons and features, we teach you how to think, lead, and decide with AI as a partner. It's about strategy and behavior, not just software.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-midnight-blue mb-2">Who are your workshops for?</h3>
              <p className="text-gray-600">
                Our sessions are designed for <strong>senior leaders, HR directors, and high-potential teams</strong> who need to move beyond the hype and apply AI to real business challenges like productivity, innovation, and change management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-midnight-blue mb-2">Do you offer virtual sessions?</h3>
              <p className="text-gray-600">
                Yes. All coaching and workshops are available virtually, optimized for engagement. We also offer hybrid and in-person sessions for clients in London and globally.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-midnight-blue mb-2">How do we get started?</h3>
              <p className="text-gray-600">
                Book a <Link href="/contact" className="text-royal-purple hover:underline">Discovery Call</Link>. We'll discuss your specific context—whether it's a team alignment issue or a broader AI strategy need—and determine the best path forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
