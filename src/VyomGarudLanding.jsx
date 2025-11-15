// VyomGarudLanding.jsx
// Main landing page component. All sections will be implemented here.
import React, { useState, useEffect, useRef } from 'react';
import { Brain, Shield, Box, Satellite, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';

export default function VyomGarudLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));
  const [scrollY, setScrollY] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  // Scroll position tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    let observer;
    let sections = [];

    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      sections = Array.from(document.querySelectorAll('section[id], .animate-on-scroll'));
      sections.forEach(section => {
        if (section.id || section.classList.contains('animate-on-scroll')) {
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer && sections.length > 0) {
        sections.forEach(section => {
          if ((section.id || section.classList.contains('animate-on-scroll')) && observer) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href') || e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold text-accent tracking-tight">VyomGarud</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors duration-200">About</a>
                <a href="#capabilities" className="text-gray-300 hover:text-accent transition-colors duration-200">Capabilities</a>
                <a href="#highlights" className="text-gray-300 hover:text-accent transition-colors duration-200">Highlights</a>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors duration-200">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavOpen(!navOpen)} className="text-gray-300 hover:text-accent">
                {navOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#about" className="block py-2 text-gray-300 hover:text-accent" onClick={() => setNavOpen(false)}>About</a>
              <a href="#capabilities" className="block py-2 text-gray-300 hover:text-accent" onClick={() => setNavOpen(false)}>Capabilities</a>
              <a href="#highlights" className="block py-2 text-gray-300 hover:text-accent" onClick={() => setNavOpen(false)}>Highlights</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-accent" onClick={() => setNavOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}
      >
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            opacity: 0.2
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 z-0" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
        }} />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-accent bg-clip-text text-transparent">
                VyomGarud
              </span>
            </h1>
            <p className="text-xl md:text-3xl font-medium mb-4 text-gray-200">
              Precision Autonomy. Unrivaled Reliability.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Mission-critical UAV systems engineered for the most demanding operational environments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#capabilities" 
                className="group px-8 py-4 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Systems
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm bg-gray-900/30"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      {/* About Section with Image */}
      <section 
        id="about" 
        className={`relative py-24 px-4 transition-all duration-1000 ${
          visibleSections.has('about') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`animate-on-scroll ${visibleSections.has('about') ? 'slide-in-left' : ''}`}>
              <div 
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: `translateY(${Math.max(0, scrollY - 800) * 0.1}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
            </div>
            <div className={`animate-on-scroll ${visibleSections.has('about') ? 'slide-in-right' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Forging the Future of Flight</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                VyomGarud is dedicated to developing and deploying mission-critical UAV systems. Our platforms are built on a foundation of proprietary advanced AI and robust, military-spec hardware, ensuring operational success in the most demanding environments globally.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                We don't just fly; we execute with absolute precision. Every system is engineered for reliability, tested in extreme conditions, and optimized for mission success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Capabilities Section with Parallax Image */}
      <section 
        id="capabilities" 
        className="relative py-24 px-4 bg-gray-950 overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${Math.max(0, scrollY - 1200) * 0.2}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900" />
        
        <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
          visibleSections.has('capabilities') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-accent mb-16">
            The Arsenal
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Advanced Autonomy */}
            <div className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-gray-800 p-8 flex flex-col items-center shadow-xl hover:border-accent hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${
              visibleSections.has('capabilities') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Brain size={48} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Advanced Autonomy</h3>
              <p className="text-gray-300 text-center leading-relaxed">Deep learning algorithms for complex flight paths, real-time decision-making, and swarm coordination.</p>
            </div>
            {/* Mission Durability */}
            <div className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-gray-800 p-8 flex flex-col items-center shadow-xl hover:border-accent hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${
              visibleSections.has('capabilities') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Shield size={48} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mission Durability</h3>
              <p className="text-gray-300 text-center leading-relaxed">Hardened hardware and encrypted communication links (AES-256) designed for extreme weather and adversarial environments.</p>
            </div>
            {/* Modular Payload */}
            <div className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-gray-800 p-8 flex flex-col items-center shadow-xl hover:border-accent hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${
              visibleSections.has('capabilities') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Box size={48} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Modular Payload</h3>
              <p className="text-gray-300 text-center leading-relaxed">Quick-swap payload architecture supporting ISR, electronic warfare (EW), and specialized sensor packages.</p>
            </div>
            {/* Global Reach */}
            <div className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl border-2 border-gray-800 p-8 flex flex-col items-center shadow-xl hover:border-accent hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${
              visibleSections.has('capabilities') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.4s' }}>
              <div className="mb-6 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Satellite size={48} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Global Reach</h3>
              <p className="text-gray-300 text-center leading-relaxed">Multi-band satellite communication enabling persistent, beyond-visual-line-of-sight (BVLOS) operation anywhere.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Image Showcase Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${Math.max(0, scrollY - 1800) * 0.15}px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every component, every algorithm, every system designed with one goal: mission success.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section 
        id="highlights" 
        className={`relative py-24 px-4 transition-all duration-1000 ${
          visibleSections.has('highlights') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-accent">The Edge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-accent animate-on-scroll ${
              visibleSections.has('highlights') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                99.99%
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Mission Success Rate</h3>
              <p className="text-gray-300 text-center">Field-proven reliability metrics across thousands of operational hours.</p>
            </div>
            <div className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-accent animate-on-scroll ${
              visibleSections.has('highlights') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                T-L3
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Certified Hardware</h3>
              <p className="text-gray-300 text-center">Meeting the highest industry durability standards for military applications.</p>
            </div>
            <div className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-accent animate-on-scroll ${
              visibleSections.has('highlights') ? 'fade-in-up' : ''
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4 bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Edge AI
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-Time Processing</h3>
              <p className="text-gray-300 text-center">Processing critical data onboard, minimizing latency and maximizing responsiveness.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact / Footer Section */}
      <section 
        id="contact" 
        className={`relative py-24 px-4 bg-gray-950 transition-all duration-1000 ${
          visibleSections.has('contact') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-accent">Ready for Mission Briefing?</h2>
            <p className="text-lg text-gray-400">Get in touch with our team to discuss your requirements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`animate-on-scroll ${visibleSections.has('contact') ? 'slide-in-left' : ''}`}>
              <div 
                className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-4 text-white">Connect With Us</h3>
                  <p className="text-gray-300 mb-6">
                    Our team of experts is ready to discuss how VyomGarud systems can meet your mission-critical requirements.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="text-accent mr-3" size={20} />
                      <span>24/7 Technical Support</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="text-accent mr-3" size={20} />
                      <span>Custom Solutions Available</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="text-accent mr-3" size={20} />
                      <span>Global Deployment Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form 
              onSubmit={handleSubmit} 
              className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl flex flex-col gap-6 border border-gray-800 animate-on-scroll ${
                visibleSections.has('contact') ? 'slide-in-right' : ''
              }`}
            >
              {formSubmitted && (
                <div className="px-4 py-3 rounded-lg bg-green-600/90 text-white text-center font-medium flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address" 
                className="px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" 
                required 
              />
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                rows="5" 
                className="px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none" 
                required
              ></textarea>
              <button 
                type="submit" 
                className="group px-8 py-4 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
        <footer className="mt-20 pt-12 border-t border-gray-800 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
            <a href="#legal" className="hover:text-accent transition-colors">Legal</a>
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#careers" className="hover:text-accent transition-colors">Careers</a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} VyomGarud UAV Systems. All rights reserved.</div>
        </footer>
      </section>
    </div>
  );
}
