import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-10 lg:pt-0 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full">
          <div className="relative">
            <div className="absolute inset-y-0 -right-10 w-1/2 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-royal-purple font-bold tracking-wider uppercase mb-4 lg:mb-6 text-xs md:text-sm lg:text-base flex items-center gap-2">
                <span className="w-6 md:w-8 h-0.5 bg-royal-purple inline-block"></span>
                Leadership Advisor • Keynote Speaker
              </h2>
              <h1 className="text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight mb-4 lg:mb-8 text-midnight-blue">
                Transforming How <br />
                <span className="text-royal-purple">Leaders and Teams Perform</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-700 max-w-lg mb-8 lg:mb-12 leading-relaxed font-light font-sans">
                Proven executive coaching, team effectiveness programs, and leadership development for organizations that demand measurable results.
              </p>
              <div className="hidden lg:flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-midnight-blue hover:bg-royal-purple text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-base md:text-lg"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="/services" 
                  className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-transparent border-2 border-midnight-blue hover:border-royal-purple hover:bg-white/50 text-midnight-blue font-semibold rounded-full transition-all duration-300 text-center text-base md:text-lg"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] lg:mt-0">
            <Image 
              src="/mark-chivere-hero.png" 
              alt="Mark Chivere - Leadership Advisor"
              fill
              className="object-cover object-[65%_50%] lg:object-right"
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            {/* Mobile Buttons Overlay */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4 px-6 lg:hidden">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-3.5 bg-midnight-blue hover:bg-royal-purple text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-center text-base"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white/90 backdrop-blur-sm border-2 border-midnight-blue hover:border-royal-purple hover:bg-white text-midnight-blue font-semibold rounded-full transition-all duration-300 text-center text-base"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner - Trust Indicators */}
      <div className="w-full bg-midnight-blue py-8 z-30">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap justify-between items-center w-full gap-y-6">
            {[
              { name: "Microsoft", logoUrl: "/microsoft-logo.svg" },
              { name: "UNICEF", logoUrl: "/unicef-logo.svg" },
              { name: "MTN Group", logoUrl: "/mtn-logo.svg" },
              { name: "Caterpillar", logoUrl: "/caterpillar-logo-white.svg" },
              { name: "Mars Wrigley", logoUrl: "/mars-wrigley-logo-white.svg" },
              { name: "McDonald's", logoUrl: "/mcdonalds-logo.svg" },
              { name: "Groupe Lactalis", logoUrl: "/lactalis-logo.svg" },
              { name: "AkzoNobel", logoUrl: "/akzonobel-logo-white.svg" }
            ].map((client) => (
              <div key={client.name} className="relative h-8 w-24 sm:w-28 md:h-10 md:w-32 lg:w-36 opacity-80 hover:opacity-100 transition-all duration-300">
                <Image
                   src={client.logoUrl || `https://placehold.co/120x40/transparent/FFFFFF/png?text=${client.name}`}
                   alt={`${client.name} logo`}
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
