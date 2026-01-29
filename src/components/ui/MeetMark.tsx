import Image from 'next/image';
import Link from 'next/link';

export default function MeetMark() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Visual/Image Column */}
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gray-100 relative shadow-2xl shadow-blue-900/10">
              <Image
                src="/mark-chivere-meet.png"
                alt="Mark Chivere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Floating Stat Card - Minimalist (Hidden on Mobile) */}
              <div className="hidden md:block absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <div className="flex justify-between items-center text-center">
                  <div>
                    <span className="block text-2xl font-bold text-royal-purple">17+</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Years</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div>
                    <span className="block text-2xl font-bold text-electric-cyan">220+</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Programs</span>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div>
                    <span className="block text-2xl font-bold text-midnight-blue">4,300+</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Professionals</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 top-12 -left-12 w-full h-full border border-gray-100 rounded-2xl hidden md:block"></div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12 lg:pt-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-midnight-blue mb-6 md:mb-8 tracking-tight">
              Meet Mark Chivere
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                For nearly two decades, Mark has partnered with organizations like Microsoft, Ericsson, and UNICEF to unlock the potential of their leaders. His approach combines behavioral science with practical strategies to build trust, improve decision-making, and navigate complex organizational change.
              </p>
              
              <p>
                Whether it’s executive coaching or enterprise-wide training, Mark focuses on one question: <strong className="font-semibold text-royal-purple">What will actually work in your environment?</strong>
              </p>

              <div className="pt-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Trusted By Clients Like</span>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium">
                  <span>Microsoft</span>
                  <span>Ericsson</span>
                  <span>Coca-Cola</span>
                  <span>UNICEF</span>
                  <span>MTN Group</span>
                </div>
              </div>

              <div className="pt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-midnight-blue font-semibold hover:text-royal-purple transition-colors group"
                >
                  Read full bio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
