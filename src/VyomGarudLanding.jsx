// VyomGarudLanding.jsx
// Main landing page component. All sections will be implemented here.
import React, { useState, useEffect } from 'react';
import { Brain, Shield, Box, Satellite } from 'lucide-react';
export default function VyomGarudLanding() {
      {/* Contact / Footer Section */}
      <section className="px-4 py-16 bg-gray-950" id="contact">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-accent">Ready for Mission Briefing?</h2>
        </div>
        <form className="max-w-xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-accent focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-accent focus:outline-none" required />
          <textarea name="message" placeholder="Message" rows="4" className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-accent focus:outline-none" required></textarea>
          <button type="submit" className="px-8 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">Submit</button>
        </form>
        <footer className="mt-16 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
            <a href="#legal" className="hover:underline">Legal</a>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#careers" className="hover:underline">Careers</a>
          </div>
          <div className="text-xs">&copy; {new Date().getFullYear()} VyomGarud UAV Systems. All rights reserved.</div>
        </footer>
      </section>
      {/* Highlights Section */}
      <section className="px-4 py-16" id="highlights">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-accent">The Edge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-accent mb-2">99.99%</span>
            <p className="text-gray-300 text-center">Mission Success Rate: Field-proven reliability metrics.</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-accent mb-2">T-L3</span>
            <p className="text-gray-300 text-center">Certified Hardware: Meeting the highest industry durability standards.</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl font-bold text-accent mb-2">Edge AI</span>
            <p className="text-gray-300 text-center">Real-Time Edge AI: Processing critical data onboard, minimizing latency.</p>
          </div>
        </div>
      </section>
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
      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center" id="about">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-accent">Forging the Future of Flight</h2>
        <p className="text-base md:text-lg text-gray-300 font-medium">
          VyomGarud is dedicated to developing and deploying mission-critical UAV systems. Our platforms are built on a foundation of proprietary advanced AI and robust, military-spec hardware, ensuring operational success in the most demanding environments globally. We don't just fly; we execute with absolute precision.
        </p>
      </section>
      {/* Capabilities Section */}
      <section className="px-4 py-16 bg-gray-950" id="capabilities">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-accent">The Arsenal</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Advanced Autonomy */}
          <div className="bg-gray-900 rounded-xl border-2 border-accent p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
            <Brain size={40} className="text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Advanced Autonomy</h3>
            <p className="text-gray-300 text-center">Deep learning algorithms for complex flight paths, real-time decision-making, and swarm coordination.</p>
          </div>
          {/* Mission Durability */}
          <div className="bg-gray-900 rounded-xl border-2 border-accent p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
            <Shield size={40} className="text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Mission Durability</h3>
            <p className="text-gray-300 text-center">Hardened hardware and encrypted communication links (AES-256) designed for extreme weather and adversarial environments.</p>
          </div>
          {/* Modular Payload */}
          <div className="bg-gray-900 rounded-xl border-2 border-accent p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
            <Box size={40} className="text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Modular Payload</h3>
            <p className="text-gray-300 text-center">Quick-swap payload architecture supporting ISR, electronic warfare (EW), and specialized sensor packages.</p>
          </div>
          {/* Global Reach */}
          <div className="bg-gray-900 rounded-xl border-2 border-accent p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:-translate-y-1 transition-transform duration-200">
            <Satellite size={40} className="text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-300 text-center">Multi-band satellite communication enabling persistent, beyond-visual-line-of-sight (BVLOS) operation anywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
