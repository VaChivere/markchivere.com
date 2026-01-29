import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Executive Coaching & Team Effectiveness",
  description: "Comprehensive leadership programs including executive coaching, team alignment, personal effectiveness, and AI integration workshops.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] lg:h-[70vh]">
        <Image 
          src="/executive-coaching.png" 
          alt="Mark Chivere in an executive coaching session" 
          fill 
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/90 via-midnight-blue/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 drop-shadow-md max-w-3xl">
              How Mark Can Help
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-sm font-light">
              Programs designed for real-world challenges facing corporate leaders and teams.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Service 1: Executive Coaching */}
            <div className="group border-t border-gray-200 pt-8 md:pt-12" id="coaching">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                <div className="md:col-span-1">
                   <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">01</span>
                   <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                    Executive Coaching
                  </h2>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl text-midnight-blue font-bold mb-4 uppercase tracking-wide">
                    One-on-One Executive Coaching
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                    Confidential, results-focused coaching for senior leaders navigating transition, building executive presence, or facing complex strategic decisions. Using evidence-based frameworks and behavioral assessments, Mark creates clarity and accelerates leadership impact.
                  </p>
                  
                  <div className="mb-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-midnight-blue mb-3 uppercase tracking-wider">What clients get</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {[
                      "Strategic thinking partnership",
                      "Leadership presence development",
                      "Decision-making under complexity",
                      "Behavioral assessment and insight",
                      "Accountability and momentum"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-midnight-blue mb-2 uppercase tracking-wider">Ideal for</h4>
                  <p className="text-sm text-gray-600">
                    C-suite executives, VPs, senior directors facing transition or complex leadership challenges
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Inquire about coaching
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Team Effectiveness */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12" id="teams">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">02</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Team Development
                </h2>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl text-midnight-blue font-bold mb-4 uppercase tracking-wide">
                  High-Performing Team Development
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  Transform leadership teams from groups of talented individuals into cohesive, high-trust units. Using proven methodologies, Mark builds psychological safety, improves communication, clarifies roles, and establishes accountability systems that stick.
                </p>

                <div className="mb-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-midnight-blue mb-3 uppercase tracking-wider">What teams get</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {[
                      "Trust-building frameworks",
                      "Communication and conflict skills",
                      "Role clarity and accountability",
                      "DISC behavioral insights for teams",
                      "Sustainable collaboration systems"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-midnight-blue mb-2 uppercase tracking-wider">Ideal for</h4>
                  <p className="text-sm text-gray-600">
                    Executive teams, leadership cohorts, project teams, cross-functional groups
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Discuss team programs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Personal Effectiveness */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12" id="productivity">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">03</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Personal Effectiveness
                </h2>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl text-midnight-blue font-bold mb-4 uppercase tracking-wide">
                  Personal Effectiveness & Productivity
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  Help your people work smarter, not just harder. These programs teach practical strategies for managing time, energy, and focus in demanding environments. Participants leave with habits and systems they can implement immediately.
                </p>

                <div className="mb-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-midnight-blue mb-3 uppercase tracking-wider">What participants get</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {[
                      "Time and energy management",
                      "Priority-setting frameworks",
                      "Focus and deep work strategies",
                      "Stress reduction techniques",
                      "Sustainable productivity habits"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-midnight-blue mb-2 uppercase tracking-wider">Ideal for</h4>
                  <p className="text-sm text-gray-600">
                    Individual contributors, managers, high-performers experiencing burnout or overwhelm
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Inquire about workshops
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4: AI Integration */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12" id="ai">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">04</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  AI Workshops
                </h2>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl text-midnight-blue font-bold mb-4 uppercase tracking-wide">
                  Practical AI for Leaders and Teams
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  No-hype, hands-on workshops that show people exactly how to use AI tools to enhance their work. From decision support to content creation to data analysis, Mark focuses on real use cases that create immediate time savings and quality improvements.
                </p>

                <div className="mb-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-midnight-blue mb-3 uppercase tracking-wider">What participants get</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {[
                      "Role-specific AI applications",
                      "Prompt engineering basics",
                      "Workflow integration",
                      "Ethical considerations",
                      "Habit formation support"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-midnight-blue mb-2 uppercase tracking-wider">Ideal for</h4>
                  <p className="text-sm text-gray-600">
                    Leadership teams, L&D professionals, knowledge workers ready to leverage AI practically
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Book an AI workshop
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5: Sales Training */}
          <div className="group border-t border-gray-200 pt-8 md:pt-12" id="sales">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
              <div className="md:col-span-1">
                 <span className="text-sm font-semibold tracking-wider text-royal-purple uppercase">05</span>
                 <h2 className="text-2xl font-bold font-heading text-midnight-blue mt-2 group-hover:text-royal-purple transition-colors">
                  Sales Training
                </h2>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl text-midnight-blue font-bold mb-4 uppercase tracking-wide">
                  Value-Based Sales Training (PRISM Framework)
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  Modern B2B selling requires a different approach. Using the PRISM framework, Mark teaches sales teams to understand buyer psychology, communicate value effectively, and build trust throughout complex sales cycles.
                </p>

                <div className="mb-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-sm font-bold text-midnight-blue mb-3 uppercase tracking-wider">What sales teams get</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {[
                      "Modern buying journey insights",
                      "Value perception strategies",
                      "Consultative selling skills",
                      "Behavioral buyer profiling",
                      "Objection handling frameworks"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-midnight-blue mb-2 uppercase tracking-wider">Ideal for</h4>
                  <p className="text-sm text-gray-600">
                    B2B sales teams, account managers, business development professionals
                  </p>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-midnight-blue font-semibold hover:text-royal-purple transition-colors group-hover:translate-x-1 duration-300">
                  Boost sales performance
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
