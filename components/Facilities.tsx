
import React from 'react';

const Facilities: React.FC = () => {
  const facilityHighlights = [
    "Grade-A Pre-Engineered Buildings (PEB)",
    "VNA Racking & Modern MHE Support",
    "24/7 Security & CCTV Monitoring",
    "Fire Suppression System (NFPA Compliant)",
    "Full Power Backup & LED Lighting",
    "Large Docking Areas for 40ft Trailers"
  ];

  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Infrastructure</h2>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              World-Class Infrastructure <br /> 
              at the Hub of India
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Operating over 500,000 sqft of strategically located warehousing space near Nagpur, we provide the backbone for national distribution. Our facilities are designed for maximum efficiency, safety, and scalability.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilityHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border-l-4 border-blue-600">
              <p className="text-slate-800 font-semibold italic">
                "Our Nagpur facilities allow brands to reach 70% of India's population within 48 hours. Strategic placement isn't just a benefit; it's a competitive advantage."
              </p>
              <p className="mt-4 text-sm font-bold text-blue-900">— Director, Grace Logistics</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                alt="Inside Facility" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Safety Record</div>
                </div>
                <div className="w-[1px] h-8 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">24/7</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Operations</div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
