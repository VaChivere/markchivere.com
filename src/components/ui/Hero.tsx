import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gray-50">
      
      {/* Background Image Layer - Constrained Width to prevent "Zoom" */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] z-0 flex items-end justify-end">
        <div className="relative w-full h-full lg:h-[90%] lg:mr-12 lg:mt-12">
          <Image 
            src="/mark-chivere-hero.png" 
            alt="Mark Chivere - Leadership Advisor" 
            fill 
            className="object-contain object-bottom lg:object-right-bottom" 
            priority 
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
        {/* Gradient Overlay: Fades the image's left edge into the section's background color */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-transparent lg:via-gray-50/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20 lg:pt-0">
        <div className="max-w-2xl lg:w-1/2">
          <h2 className="text-royal-purple font-bold tracking-wider uppercase mb-4 lg:mb-6 text-xs md:text-sm lg:text-base flex items-center gap-2">
            <span className="w-6 md:w-8 h-0.5 bg-royal-purple inline-block"></span>
            Leadership Advisor • Keynote Speaker
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight leading-[1.1] mb-6 lg:mb-8 text-midnight-blue">
            Leadership in the <br />
            <span className="text-royal-purple">Age of AI.</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-700 max-w-lg mb-8 lg:mb-10 leading-relaxed font-light font-sans">
            I help executives and L&D teams integrate AI to enhance decision-making and performance—without sacrificing human connection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8 lg:mb-16">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-midnight-blue hover:bg-royal-purple text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-base md:text-lg"
            >
              Book a Discovery Call
            </Link>
            <Link 
              href="/work-with-me" 
              className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-transparent border-2 border-midnight-blue hover:border-royal-purple hover:bg-white/50 text-midnight-blue font-semibold rounded-full transition-all duration-300 text-center text-base md:text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md border-t border-white/20 py-6 lg:py-8 z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Trusted by leaders at</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4 w-full">
            {["Microsoft", "Coca-Cola", "Ericsson", "UNICEF"].map((client) => (
              <div key={client} className="relative h-6 w-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                   src={`https://placehold.co/120x40/transparent/0B1C2D/png?text=${client}`}
                   alt={`${client} logo`}
                   fill
                   className="object-contain"
                   sizes="100px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
