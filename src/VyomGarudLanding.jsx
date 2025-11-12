// VyomGarudLanding.jsx
// Main landing page component. All sections will be implemented here.
import React, { useState, useEffect } from 'react';
// ...sections will be added here...
export default function VyomGarudLanding() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-inter">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#222" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-accent drop-shadow-lg">VyomGarud</h1>
          <p className="text-lg md:text-2xl font-medium mb-8 text-gray-200">Precision Autonomy. Unrivaled Reliability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#capabilities" className="px-8 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">Explore Systems</a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors duration-200">Contact Sales</a>
          </div>
        </div>
      </section>
      {/* ...existing code... */}
    </div>
  );
}
