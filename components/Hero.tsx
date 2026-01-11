
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Warehousing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Strategic Nagpur Location - The Logistics Heart of India</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            20 Years of <span className="text-blue-400">Supply Chain</span> Excellence.
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Empowering businesses with 500,000 sqft of Grade-A warehousing and smart 3PL solutions near Nagpur. Scale your operations with absolute reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#facilities"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-center hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/20"
            >
              Explore Our Facilities
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-center hover:bg-white/20 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
