import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
      
      {/* Left Panel: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 lg:py-0 relative z-10 order-2 lg:order-1 bg-white">
        
        {/* Subtle Background Elements for Texture */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-50/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-2xl pt-4 lg:pt-0 pb-24 lg:pb-0">
          <h2 className="text-royal-purple font-bold tracking-wider uppercase mb-4 lg:mb-6 text-xs md:text-sm lg:text-base flex items-center gap-2">
            <span className="w-6 md:w-8 h-0.5 bg-royal-purple inline-block"></span>
            Leadership Advisor • Keynote Speaker
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight leading-[1.1] mb-6 lg:mb-8 text-midnight-blue">
            Leadership in the <br />
            <span className="text-royal-purple">Age of AI.</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-600 max-w-lg mb-8 lg:mb-10 leading-relaxed font-light">
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
              className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-transparent border-2 border-gray-200 hover:border-royal-purple/30 hover:bg-gray-50 text-midnight-blue font-semibold rounded-full transition-all duration-300 text-center text-base md:text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel: Image (Full Bleed Banner Style) */}
      <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:min-h-auto order-1 lg:order-2 bg-white lg:pb-20">
         <Image 
            src="/mark-chivere-hero.png" 
            alt="Mark Chivere - Leadership Advisor" 
            fill 
            className="object-contain object-bottom lg:object-cover lg:object-center" 
            priority 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient overlay for text readability on mobile if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
          
          {/* Desktop Left-Edge Blend: Fades from white to transparent to hide the image seam */}
          <div className="hidden lg:block absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      </div>

      {/* Bottom Banner - Overlays Image */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 py-6 lg:py-8 z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Trusted by leaders at</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4 w-full">
            {["Microsoft", "Coca-Cola", "Ericsson", "UNICEF"].map((client) => (
              <div key={client} className="relative h-6 w-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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
