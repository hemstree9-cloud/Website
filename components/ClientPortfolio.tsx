
import React from 'react';

const ClientPortfolio: React.FC = () => {
  const industries = [
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Pharmaceuticals', icon: '💊' },
    { name: 'FMCG', icon: '📦' },
    { name: 'Manufacturing', icon: '⚙️' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Electronics', icon: '💻' }
  ];

  return (
    <section id="industries" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Industries Served</h2>
          <p className="text-4xl font-bold mb-4">Domain Expertise Across Sectors</p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We understand the unique logistical challenges of different sectors and provide tailored solutions to match.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-all cursor-default">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="font-bold text-lg">{industry.name}</h3>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-slate-400">Trusted by Global Leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder for real logos - Using stylized text for the demo */}
             {['AMAZON', 'P&G', 'SAMSUNG', 'NESTLE', 'TOYOTA'].map((logo, i) => (
               <div key={i} className="flex justify-center">
                 <span className="text-2xl font-black tracking-tighter text-white/50">{logo}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortfolio;
