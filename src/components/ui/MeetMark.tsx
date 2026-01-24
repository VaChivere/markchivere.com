import Image from 'next/image';

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
                    <span className="block text-2xl font-bold text-midnight-blue">4.3k+</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</span>
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
              Hi, I'm Mark.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                For nearly two decades, I have focused on one question: <strong className="font-semibold text-royal-purple">how do people and organisations change in ways that actually stick?</strong>
              </p>
              
              <p>
                My journey in Learning & Development has taken me across industries—from technology to global development—empowering over 4,300 professionals. I've had the privilege of partnering with organizations like Microsoft, Ericsson, and UNICEF to help leaders navigate complexity.
              </p>
              
              <p>
                Today, we face a new kind of complexity: Artificial Intelligence.
              </p>

              <div className="pl-6 border-l-2 border-electric-cyan my-8">
                <p className="text-xl text-midnight-blue font-medium italic">
                  "I don't see AI as a replacement for human judgment, but as the ultimate amplifier of it."
                </p>
              </div>
              
              <p>
                I translate AI through the lens of organisational psychology and leadership. My goal isn't just to teach you "how to prompt"—it's to help you discover where AI meaningfully improves how you lead, decide, and connect.
              </p>

              <div className="pt-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Trusted By</span>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium">
                  <span>Microsoft</span>
                  <span>Ericsson</span>
                  <span>Coca-Cola</span>
                  <span>UNICEF</span>
                  <span>MTN Group</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
