
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Warehousing Capacity', value: '500,000+', unit: 'Sq. Ft.' },
    { label: 'Industry Experience', value: '20+', unit: 'Years' },
    { label: 'Happy Clients', value: '150+', unit: 'Global Brands' },
    { label: 'Successful Shipments', value: '1M+', unit: 'Annually' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-800">{stat.unit}</div>
              <div className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
