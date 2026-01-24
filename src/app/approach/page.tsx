import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Approach | Human-First AI",
  description: "A methodology grounded in behavioral science and human psychology, using AI as an amplifier of judgment, not a replacement.",
};

export default function Approach() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-8">
          The Human-First Approach
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl leading-relaxed mb-12 text-gray-600">
            Most AI initiatives fail not because of technology, but because they ignore human behavior. 
            My methodology ensures that intelligent systems amplify your best people, rather than alienating them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose mb-20">
            <div className="relative pl-8 border-l-2 border-royal-purple/30 hover:border-royal-purple transition-colors duration-300">
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Contextual, Not Generic</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                I don't deliver off-the-shelf "AI Training." We start with your specific business challenges 
                and leadership dynamics, then apply AI where it solves a real problem.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-electric-cyan/30 hover:border-electric-cyan transition-colors duration-300">
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Behavioral Science Grounding</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Technology changes fast; human nature doesn't. My work is rooted in proven frameworks of 
                motivation, trust-building, and decision science.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-heading text-midnight-blue mb-8">Core Principles</h2>
          <ul className="space-y-8 list-none pl-0">
            <li className="flex gap-6 items-start">
              <span className="text-royal-purple font-light text-3xl opacity-40">01</span>
              <div>
                <strong className="block text-xl text-midnight-blue mb-2">AI as Amplifier</strong>
                <span className="text-gray-600 text-lg leading-relaxed">We use AI to remove drudgery and enhance cognitive capacity, allowing leaders to focus on judgment and empathy.</span>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-royal-purple font-light text-3xl opacity-40">02</span>
              <div>
                <strong className="block text-xl text-midnight-blue mb-2">Trust by Design</strong>
                <span className="text-gray-600 text-lg leading-relaxed">Transparency in how AI is used is non-negotiable. We build protocols that maintain trust within teams.</span>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-royal-purple font-light text-3xl opacity-40">03</span>
              <div>
                <strong className="block text-xl text-midnight-blue mb-2">Outcome Over Tooling</strong>
                <span className="text-gray-600 text-lg leading-relaxed">We don't chase the latest model. We chase the business result—whether that's speed, quality, or innovation.</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-600 mb-6">
            Interested in how this methodology applies to your organisation?
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-royal-purple text-white font-semibold rounded-full hover:bg-midnight-blue transition-colors shadow-lg">
            Discuss Your Context
          </Link>
        </div>
      </div>
    </div>
  );
}
