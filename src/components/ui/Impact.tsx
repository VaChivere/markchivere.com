import Image from 'next/image';

export default function Impact() {
  const clients: { name: string; logo: string; logoUrl?: string }[] = [
    { name: "Microsoft", logo: "microsoft", logoUrl: "/microsoft-logo.svg" },
    { name: "MTN Group", logo: "mtn", logoUrl: "/mtn-oval-logo.svg" },
    { name: "Caterpillar", logo: "caterpillar", logoUrl: "/caterpillar-logo.svg" },
    { name: "UNICEF", logo: "unicef", logoUrl: "/unicef-logo.svg" },
    { name: "McDonald's", logo: "mcdonalds", logoUrl: "/mcdonalds-logo.svg" },
    { name: "MINI", logo: "mini", logoUrl: "/mini-logo.svg" },
    { name: "MarsWrigley", logo: "mars", logoUrl: "/mars-wrigley-logo.svg" },
     { name: "Groupe Lactalis", logo: "lactalis", logoUrl: "/lactalis-logo.svg" },
     { name: "AkzoNobel", logo: "akzonobel", logoUrl: "/akzonobel-logo.svg" }
   ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration - Light */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-8">
              Impact Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-royal-purple mb-2">42%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Reduction in Staff Stress</div>
                <div className="text-xs text-gray-400 mt-1">(Enterprise Clients)</div>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-midnight-blue mb-2">30×</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Revenue Growth</div>
                <div className="text-xs text-gray-400 mt-1">(Enabled via Partnerships)</div>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-royal-purple mb-2">15+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Professional Certifications</div>
                <div className="text-xs text-gray-400 mt-1">Leadership, Sales, Team Effectiveness</div>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-midnight-blue mb-2">4,300+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Professionals Developed</div>
                <div className="text-xs text-gray-400 mt-1">Across 220+ Programs</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Abstract visual representation of network/impact */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 blur-3xl rounded-full opacity-60"></div>
            <div className="relative z-10 p-8 md:p-12 border border-gray-100 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
               <h3 className="text-2xl font-bold text-midnight-blue mb-8">Trusted by Leading Organizations</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
                 {clients.map((client, index) => (
                  <div key={index} className="relative w-full h-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logoUrl || `https://placehold.co/200x80/transparent/0B1C2D/png?text=${client.name}`}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="max-w-6xl mx-auto mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-12 text-center">
            Client Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;Mark&apos;s facilitation transformed how our regional leadership team communicates across borders. We went from constant misalignment to genuine collaboration that spans multiple time zones and cultures.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">Brenda Barton</div>
                <div className="text-royal-purple font-medium text-sm">Regional Director - WFP Regional Office</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;Navigating organizational change in challenging operational contexts requires facilitators who understand complexity. Treamio brought that depth of understanding and helped our team emerge stronger.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">Eliaba Damundu</div>
                <div className="text-royal-purple font-medium text-sm">UNICEF South Sudan</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;The supply chain team alignment sessions fundamentally shifted how our departments collaborate. Cross-functional execution went from a struggle to a competitive advantage.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">Dave Hallett</div>
                <div className="text-royal-purple font-medium text-sm">Supply Director - MARS Africa</div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;In manufacturing, team performance directly impacts production quality. Working with Mark helped our leadership team move past entrenched positions to genuine solutions.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">Hermie Hendricks</div>
                <div className="text-royal-purple font-medium text-sm">Operations Director BMW</div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;The integration of AI tools into our leadership curriculum didn&apos;t just modernize the content—it engaged our leaders in a way we haven&apos;t seen in years. Mark&apos;s approach demystified the technology and focused purely on the human advantage, resulting in a 40% increase in adoption.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">Global Telecommunications Giant</div>
                <div className="text-royal-purple font-medium text-sm">Leadership Development Program</div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-royal-purple/10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              
              <blockquote className="relative z-10 text-lg text-gray-700 leading-relaxed text-center font-medium italic mb-6 pt-8 flex-grow">
                &quot;We were struggling with hybrid work friction. The data-driven insights combined with Mark&apos;s facilitation helped us reset our team norms. Productivity is up, but more importantly, stress is down by 42% across participating teams.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center mt-auto">
                <div className="font-bold text-midnight-blue text-lg">FMCG Multinational</div>
                <div className="text-royal-purple font-medium text-sm">Team Effectiveness Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}