import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sales Training & PRISM Framework",
  description: "Sales consultancy and training based on the PRISM framework and behavioural psychology.",
};

export default function SalesTraining() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-midnight-blue text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-royal-purple/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-electric-cyan/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-sm font-bold tracking-wider text-electric-cyan uppercase mb-4">
              Sales Training & Consultancy
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
              PRISM: Selling Through the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
                Lens of Value
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Moving beyond feature/benefit selling to a strategy of value perception, leveraging behavioural science and AI.
            </p>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-bold font-heading text-midnight-blue mb-6">
                The Philosophy: <br />
                <span className="text-royal-purple">Perception is the New Reality</span>
              </h3>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In the modern marketplace, decisions are rarely made based on objective superiority; instead, they are made on <strong className="text-midnight-blue">perceived value</strong>. To succeed today, sales professionals must understand that different stakeholders see value through different lenses. My work focuses on moving your team beyond traditional feature/benefit selling to a strategy of value perception.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By leveraging social, digital, and <strong className="text-midnight-blue">behavioural skills</strong>, I help teams connect with prospects in new and existing accounts. This approach is built on the reality of how buyers actually buy today, replacing dated "buying centre" language with modern concepts like the <strong className="text-midnight-blue">Decision Hub</strong> and the <strong className="text-midnight-blue">Advocacy Zone</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The PRISM Framework */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-6">
              The PRISM Framework
            </h3>
            <p className="text-lg text-gray-600">
              My methodology follows the PRISM system, which maps directly to the five stages of the <strong className="text-midnight-blue">Modern Buying Journey</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1: Perceive */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-midnight-blue/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-royal-purple">P</span>
              </div>
              <h4 className="text-xl font-bold text-midnight-blue mb-3">Perceive</h4>
              <p className="text-gray-600">
                We identify the <strong>Value Anchor</strong>—the specific point where customer dissatisfaction is strongest—and use AI conversation intelligence to detect early buying signals.
              </p>
            </div>

            {/* Step 2: Research */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-midnight-blue/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-royal-purple">R</span>
              </div>
              <h4 className="text-xl font-bold text-midnight-blue mb-3">Research</h4>
              <p className="text-gray-600">
                We use <strong>situational intelligence</strong> to understand the customer’s context deeply, identifying who recognises the need first and what "better" truly means to them.
              </p>
            </div>

            {/* Step 3: Illuminate */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-midnight-blue/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-royal-purple">I</span>
              </div>
              <h4 className="text-xl font-bold text-midnight-blue mb-3">Illuminate</h4>
              <p className="text-gray-600">
                We demonstrate how value flows across the entire organisation, stimulating demand by bringing insight to a customer’s objectives and the barriers to achieving them.
              </p>
            </div>

            {/* Step 4: Synthesize */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-midnight-blue/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-royal-purple">S</span>
              </div>
              <h4 className="text-xl font-bold text-midnight-blue mb-3">Synthesize</h4>
              <p className="text-gray-600">
                We co-create a business case that resonates with all stakeholders, using AI to anticipate and defuse objections before they become blockers.
              </p>
            </div>

            {/* Step 5: Mobilize */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-midnight-blue/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-royal-purple">M</span>
              </div>
              <h4 className="text-xl font-bold text-midnight-blue mb-3">Mobilize</h4>
              <p className="text-gray-600">
                We formalise the commitment with clear next steps and set baseline metrics to ensure <strong>Value Delivery</strong>, proving impact to create future expansion pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help You Win */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12">
               <h3 className="text-3xl font-bold font-heading text-midnight-blue mb-6">
                How I Help You Win
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My training and consultancy services focus on the practical application of <strong>Behavioural Economics</strong> and <strong>Psychology</strong> to drive momentum. We don’t just teach sales; we teach:
              </p>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
                {/* Placeholder for a relevant image or illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue to-royal-purple opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm uppercase tracking-widest">Visual: Sales Momentum</span>
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 space-y-8">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-electric-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-midnight-blue mb-2">Building Momentum</h4>
                  <p className="text-gray-600">Using techniques like <strong>Loss Aversion</strong> to show the cost of the status quo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-electric-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-midnight-blue mb-2">The Perfect Pitch</h4>
                  <p className="text-gray-600">Structuring presentations that manage customer perceptions around their specific selection criteria.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-electric-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-midnight-blue mb-2">Active Stakeholder Management</h4>
                  <p className="text-gray-600">Strategies for influencing the diverse mix of <strong>Champions, Nemeses, Supporters, and Opponents</strong> within a Decision Hub.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-electric-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-midnight-blue mb-2">Risk Resolution</h4>
                  <p className="text-gray-600">Identifying and alleviating risk at four critical levels: <strong>Strategic, Tactical, Political, and Individual</strong>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-electric-cyan flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-midnight-blue mb-2">AI Integration</h4>
                  <p className="text-gray-600">Using AI as an amplifier at every stage to understand, navigate, and prove value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-20 lg:py-24 bg-midnight-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              The Impact on Your Bottom Line
            </h3>
            <p className="text-lg text-gray-300">
              The goal of this work is to provide a measurable shift in your sales performance. By aligning your team with the PRISM framework, we target key performance indicators:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-electric-cyan mb-3">Pipeline Health</h4>
              <p className="text-gray-300">Improved lead generation through better identification of <strong>Need Emergence</strong>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-electric-cyan mb-3">Conversion & Win Rates</h4>
              <p className="text-gray-300">Higher success rates against the competition and the "do nothing" status quo.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-electric-cyan mb-3">Deal Velocity</h4>
              <p className="text-gray-300">Faster movement through the funnel by resolving stakeholder risks early.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-electric-cyan mb-3">Revenue Growth</h4>
              <p className="text-gray-300">Increased average deal sizes and "share of wallet" across existing accounts through demonstrated <strong>Value Delivery</strong>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-electric-cyan mb-3">Quota Attainment</h4>
              <p className="text-gray-300">A consistent, repeatable system for hitting and exceeding targets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PRISM? + CTA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-100 text-center">
            <h3 className="text-3xl font-bold font-heading text-midnight-blue mb-6">
              Why PRISM?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unlike traditional programs, the PRISM framework is built for the digital age. It features <strong>modern terminology</strong>, <strong>AI integration</strong> at every stage, and an explicit mapping to the <strong>Modern Buying Journey</strong>. It is designed to be highly interactive, practical, and focused on the real-world complexities of high-stakes B2B sales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-midnight-blue hover:bg-royal-purple text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discuss PRISM for Your Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
