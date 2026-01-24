import Link from 'next/link';

export default function Offerings() {
  return (
    <section className="py-16 md:py-24 bg-white" id="offerings">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600">
            Strategic interventions designed for executive impact and organizational resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
          {/* Offering 1 */}
          <div className="group flex flex-col h-full border-t border-gray-200 pt-8 hover:border-royal-purple transition-colors duration-300">
            <h3 className="text-2xl font-bold font-heading text-midnight-blue mb-4 group-hover:text-royal-purple transition-colors">
              AI-Augmented Leadership
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Equipping leaders to make faster, higher-quality decisions under complexity while maintaining executive presence and human connection.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Cognitive support systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Situational Leadership II®</span>
              </div>
            </div>
            <Link 
              href="/workshops" 
              className="text-royal-purple font-semibold hover:text-midnight-blue inline-flex items-center gap-2 transition-colors"
            >
              Explore Leadership
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Offering 2 */}
          <div className="group flex flex-col h-full border-t border-gray-200 pt-8 hover:border-royal-purple transition-colors duration-300">
            <h3 className="text-2xl font-bold font-heading text-midnight-blue mb-4 group-hover:text-royal-purple transition-colors">
              High-Performance Teams
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Building trust, alignment, and accountability. We reduce friction and enhance collaboration through AI-supported frameworks.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>AI-enhanced communication</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>DISC & Feedback loops</span>
              </div>
            </div>
            <Link 
              href="/workshops" 
              className="text-royal-purple font-semibold hover:text-midnight-blue inline-flex items-center gap-2 transition-colors"
            >
              Explore Teams
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Offering 3 */}
          <div className="group flex flex-col h-full border-t border-gray-200 pt-8 hover:border-royal-purple transition-colors duration-300">
            <h3 className="text-2xl font-bold font-heading text-midnight-blue mb-4 group-hover:text-royal-purple transition-colors">
              Productivity Workshops
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Practical, non-technical workshops that translate intent into daily habits, driving immediate productivity gains without burnout.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Role-specific use cases</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Habit formation</span>
              </div>
            </div>
            <Link 
              href="/workshops" 
              className="text-royal-purple font-semibold hover:text-midnight-blue inline-flex items-center gap-2 transition-colors"
            >
              Explore Workshops
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Offering 4 */}
          <div className="group flex flex-col h-full border-t border-gray-200 pt-8 hover:border-royal-purple transition-colors duration-300">
            <h3 className="text-2xl font-bold font-heading text-midnight-blue mb-4 group-hover:text-royal-purple transition-colors">
              Sales Training & PRISM
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Selling through the lens of value. A behavioural framework tailored for the modern buying journey.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Value perception</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                 <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                 <span>Modern Buying Journey</span>
              </div>
            </div>
            <Link 
              href="/sales-training" 
              className="text-royal-purple font-semibold hover:text-midnight-blue inline-flex items-center gap-2 transition-colors"
            >
              Explore PRISM
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
