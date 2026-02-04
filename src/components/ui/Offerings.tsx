import Link from 'next/link';

export default function Offerings() {
  return (
    <section className="py-16 md:py-24 bg-white" id="offerings">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-4">
            How Mark Can Help
          </h2>
          <p className="text-lg text-gray-600">
            Programs designed for real-world challenges facing corporate leaders and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Executive Coaching */}
          <div className="group flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-royal-purple/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">
              One-on-One Executive Coaching
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
              Confidential, results-focused coaching for senior leaders navigating transition, building executive presence, or facing complex strategic decisions.
            </p>
            <Link href="/services#coaching" className="inline-flex items-center text-sm font-semibold text-royal-purple hover:text-midnight-blue transition-colors">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Service 2: Team Effectiveness Programs */}
          <div className="group flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-royal-purple/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">
              High-Performing Team Development
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
              For teams that need to move fast without breaking things. We align strategy, roles, and rules of engagement so you can execute with confidence. Ideal for distributed or hybrid teams facing &apos;collaborative overload&apos;.
            </p>
            <Link href="/services#teams" className="inline-flex items-center text-sm font-semibold text-royal-purple hover:text-midnight-blue transition-colors">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Service 3: Personal Effectiveness Programs */}
          <div className="group flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-royal-purple/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">
              Personal Effectiveness & Productivity
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
              Practical strategies for managing time, energy, and focus. Help your people work smarter and build sustainable habits.
            </p>
            <Link href="/services#productivity" className="inline-flex items-center text-sm font-semibold text-royal-purple hover:text-midnight-blue transition-colors">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Service 4: AI Integration Workshops */}
          <div className="group flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-royal-purple/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">
              Practical AI for Leaders and Teams
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
              No-hype, hands-on workshops showing exactly how to use AI tools for decision support, content creation, and data analysis.
            </p>
            <Link href="/workshops" className="inline-flex items-center text-sm font-semibold text-royal-purple hover:text-midnight-blue transition-colors">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Service 5: Sales Training (PRISM Framework) */}
          <div className="group flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-royal-purple/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold font-heading text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">
              Value-Based Sales Training
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
              Teach sales teams to understand buyer psychology and communicate value effectively using the PRISM framework.
            </p>
            <Link href="/sales-training" className="inline-flex items-center text-sm font-semibold text-royal-purple hover:text-midnight-blue transition-colors">
              Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* View All / Contact Card */}
          <div className="group flex flex-col p-8 bg-midnight-blue rounded-2xl border border-midnight-blue hover:shadow-lg transition-all duration-300 justify-center items-center text-center">
            <h3 className="text-xl font-bold font-heading text-white mb-3">
              Not sure where to start?
            </h3>
            <p className="text-blue-100 mb-6 text-sm">
              Let&apos;s discuss your specific context and design a program that fits your needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2 bg-white text-midnight-blue font-semibold rounded-full hover:bg-electric-cyan transition-colors"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
