import Link from 'next/link';

import Image from 'next/image';

export default function Impact() {
  const clients = [
    { name: "Microsoft", logo: "microsoft" },
    { name: "Ericsson", logo: "ericsson" },
    { name: "Coca-Cola", logo: "coca-cola" },
    { name: "MTN Group", logo: "mtn" },
    { name: "Caterpillar", logo: "caterpillar" },
    { name: "UNICEF", logo: "unicef" },
    { name: "P&G", logo: "pg" },
    { name: "MarsWrigley", logo: "mars" },
    { name: "AkzoNobel", logo: "akzonobel" },
    { name: "Royal Haskoning", logo: "royal-haskoning" }
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
              Impact by the Numbers
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
                <div className="text-4xl font-bold text-royal-purple mb-2">15×</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Certifications</div>
                <div className="text-xs text-gray-400 mt-1">Leadership, Sales, Team Effectiveness</div>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-midnight-blue mb-2">1,000%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Growth in Networks</div>
                <div className="text-xs text-gray-400 mt-1">Value-Added Associate Networks</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Abstract visual representation of network/impact */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 blur-3xl rounded-full opacity-60"></div>
            <div className="relative z-10 p-8 md:p-12 border border-gray-100 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
               <h3 className="text-2xl font-bold text-midnight-blue mb-8">Trusted By Industry Leaders</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
                 {clients.map((client, index) => (
                   <div key={index} className="relative w-full h-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                     <Image
                       src={`https://placehold.co/200x80/transparent/0B1C2D/png?text=${client.name}`}
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
      </div>
    </section>
  );
}
