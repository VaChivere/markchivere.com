import Link from 'next/link';

export default function HowIWork() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Header Column */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-6">
              The Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every engagement is designed around specific client contexts, not generic best practices.
            </p>
            <div className="h-1 w-20 bg-royal-purple rounded-full mb-8"></div>
            
            <Link href="/approach" className="inline-flex items-center text-royal-purple font-semibold hover:text-midnight-blue transition-colors group">
              Read full methodology 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Points Column 1 */}
          <div className="space-y-10">
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Context-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Mark doesn’t bring cookie-cutter solutions. Every program begins with understanding organizational culture, challenges, and what success looks like.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Science-Backed</h3>
              <p className="text-gray-600 leading-relaxed">
                His work is grounded in organizational psychology, neuroscience, and behavioral change. He uses what actually works, not what sounds good.
              </p>
            </div>
          </div>

          {/* Points Column 2 */}
          <div className="space-y-10">
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Outcome-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Everything is measured against real business outcomes: better decisions, stronger collaboration, increased sales, reduced stress, improved retention.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Immediately Applicable</h3>
              <p className="text-gray-600 leading-relaxed">
                Theory matters, but only if people can use it. Participants leave with tools, frameworks, and habits they can implement the next day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
