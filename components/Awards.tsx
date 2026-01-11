
import React from 'react';

const Awards: React.FC = () => {
  const awards = [
    { year: '2023', title: 'Top Warehouse Operator - Western India', org: 'Logistics Asia Forum' },
    { year: '2021', title: 'Supply Chain Innovation Award', org: 'India Logistics Excellence' },
    { year: '2019', title: 'Safety First Certification', org: 'National Safety Council' },
    { year: '2018', title: 'Sustainability Excellence', org: 'GreenLogistics Global' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Recognition</h2>
            <h2 className="text-4xl font-bold text-slate-900">Awards & Certifications</h2>
          </div>
          <div className="text-slate-500 max-w-md md:text-right">
            Two decades of dedication to quality and safety has earned us recognition from industry leaders worldwide.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
                 </svg>
              </div>
              <div className="text-blue-600 font-bold text-lg mb-2">{award.year}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{award.title}</h3>
              <p className="text-slate-600 text-sm">{award.org}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
           {['ISO 9001:2015', 'FSSAI CERTIFIED', 'GDP COMPLIANT', 'OHSAS 18001'].map((cert, i) => (
             <div key={i} className="px-6 py-2 border-2 border-slate-400 rounded-full font-bold text-slate-600 tracking-tighter">
               {cert}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
