import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Mark | Executive Coach & Facilitator",
  description: "Learn about Mark Chivere's 17+ years of experience partnering with global organizations to unlock leadership potential and drive team effectiveness.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Visual/Image Column */}
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 relative shadow-2xl shadow-blue-900/10">
              <Image
                src="/mark-chivere-meet.png"
                alt="Mark Chivere"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="block text-3xl font-bold text-royal-purple mb-1">17+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="block text-3xl font-bold text-electric-cyan mb-1">220+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Programs Delivered</span>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm col-span-2">
                <span className="block text-3xl font-bold text-midnight-blue mb-1">4,300+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Professionals Developed</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-midnight-blue mb-8">
              About Mark
            </h1>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="font-medium text-xl text-midnight-blue">
                For nearly two decades, Mark has partnered with organizations like Microsoft, Ericsson, Coca-Cola, and UNICEF to unlock the potential of their leaders and teams.
              </p>
              
              <p>
                Mark works with executives and leadership teams who face complex challenges: building trust in distributed teams, improving decision-making under pressure, developing high-potential leaders, driving sales performance, and navigating organizational change.
              </p>
              
              <p>
                His approach combines behavioral science, proven frameworks like Situational Leadership II® and DISC, and practical tools that create immediate impact. Whether it’s one-on-one executive coaching, team effectiveness programs, or enterprise-wide training, everything he does is designed around one question: <strong>What will actually work in your environment?</strong>
              </p>

              <p>
                Mark believes that while technology and AI are rapidly changing the landscape of work, the fundamental human skills of leadership, communication, and judgment are more critical than ever. He helps leaders not just adapt to change, but leverage it to build stronger, more resilient organizations.
              </p>

              <div className="pt-8 mt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold font-heading text-midnight-blue mb-4">
                  Trusted By Leading Organizations
                </h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-500 font-medium">
                  <span>Microsoft</span>
                  <span>Ericsson</span>
                  <span>Coca-Cola</span>
                  <span>UNICEF</span>
                  <span>MTN Group</span>
                  <span>Caterpillar</span>
                  <span>P&G</span>
                  <span>MarsWrigley</span>
                </div>
              </div>

              <div className="pt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-midnight-blue hover:bg-royal-purple rounded-full transition-colors duration-300"
                >
                  Work With Mark
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
