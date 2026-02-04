import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Approach | Science-Backed Leadership & Team Performance",
  description: "A methodology grounded in behavioral science and organizational psychology, focused on sustainable change and human-centric performance.",
};

export default function Approach() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 md:py-28 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-midnight-blue mb-6 tracking-tight">
            Real Change for <br className="hidden md:block" />
            <span className="text-royal-purple">Complex Systems</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Organizations don&apos;t change; people do. My methodology combines behavioral science 
            with practical strategy to build resilient leaders and high-trust teams 
            that can navigate any shift—technological or otherwise.
          </p>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-royal-purple/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-royal-purple">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Contextual Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                I don&apos;t deliver off-the-shelf playbooks. We start by mapping your specific business ecosystem 
                and leadership dynamics. The intervention must fit <em>your</em> reality, not a textbook ideal.
                Your context determines the solution.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-royal-purple/30 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-royal-purple">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Behavioral Science Rooted</h3>
              <p className="text-gray-600 leading-relaxed">
                My work is grounded in organizational psychology and neuroscience. 
                We focus on how adults actually learn, change, and make decisions under pressure. 
                No fluff—just proven frameworks for human performance.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-royal-purple/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-electric-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Business Outcome First</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t chase trends or &quot;training hours.&quot; We chase the business result—whether that&apos;s 
                revenue growth, speed to market, or retention. We focus on the &quot;why&quot; before the &quot;how,&quot; 
                ensuring every intervention drives measurable value.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-royal-purple/30 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-midnight-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Sustainable Habits</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformation fails when it relies on willpower alone. We build systems and habits 
                that persist long after the coaching session ends. We bridge the gap between 
                knowing what to do and actually doing it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-midnight-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-purple/20 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              The Human-First Standard
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-electric-cyan">Psychology Before Technology</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Tools change; human needs don&apos;t. We prioritize understanding the motivations, fears, and dynamics of your people first. Technology is just the amplifier—if the signal is weak, the amplifier only creates noise.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-electric-cyan">Trust as Currency</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  In distributed teams and high-stakes environments, trust is the only performance metric that matters. We build protocols that maintain psychological safety, allowing for faster conflict resolution and deeper collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-6">
            Ready to apply this to your context?
          </h2>
          <p className="mb-10 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Let&apos;s discuss how we can tailor this methodology to your organization&apos;s specific challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-royal-purple hover:bg-midnight-blue text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            Discuss Your Strategy
          </Link>
        </div>
      </section>
    </div>
  );
}
