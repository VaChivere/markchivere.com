
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Mark Chivere",
  description: "Join Mark Chivere for upcoming workshops, webinars, and leadership events.",
};

export default function EventsPage() {
  return (
    <div className="bg-gray-50/30 min-h-screen">
      {/* Page Header */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-100 shadow-sm text-royal-purple text-xs font-bold uppercase tracking-widest rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Join the Conversation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-midnight-blue mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Upcoming <span className="text-royal-purple">Events</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Workshops, webinars, and interactive sessions designed to deepen your leadership impact.
          </p>
        </div>
      </section>

      {/* Calendar Embed */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 md:p-8 border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <div className="w-full flex justify-center">
                <iframe 
                    src="https://luma.com/embed/calendar/cal-ESpEFrrSTDvpcbT/events?lt=light" 
                    width="100%" 
                    height="600" 
                    style={{ border: 'none', borderRadius: '8px', minHeight: '600px' }}
                    allowFullScreen
                    aria-hidden="false" 
                    title="Mark Chivere Events Calendar"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
