import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mark-chivere-hero.png" 
          alt="Mark Chivere - Leadership Advisor" 
          fill 
          className="object-cover object-[65%_center] lg:object-right" 
          priority 
          sizes="100vw"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/90 lg:via-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20 lg:pt-0">
        <div className="max-w-2xl">
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
      <div className="hidden md:block absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-white/20 py-6 lg:py-8 z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Trusted by leaders at</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4 w-full">
            {["Microsoft", "Coca-Cola", "Ericsson", "UNICEF"].map((client) => (
              <div key={client} className="relative h-6 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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
