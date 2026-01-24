import Hero from "@/components/ui/Hero";
import MeetMark from "@/components/ui/MeetMark";
import HowIWork from "@/components/ui/HowIWork";
import Offerings from "@/components/ui/Offerings";
import Impact from "@/components/ui/Impact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MeetMark />
      <HowIWork />
      <Offerings />
      <Impact />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-royal-purple/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-6">Ready to Transform Your Leadership?</h2>
          <p className="mb-10 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover how we can integrate AI into your organization without losing the human element.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-midnight-blue hover:bg-royal-purple text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
