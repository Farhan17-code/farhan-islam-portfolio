
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.08),transparent_50%)]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 md:w-64 h-48 md:h-64 bg-brand-blue/5 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 md:w-80 h-64 md:h-80 bg-brand-green/5 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-10 md:mb-12">
            <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-brand-blue uppercase">Open for new projects</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[12vw] sm:text-6xl md:text-8xl font-heading font-black text-white leading-[0.9] md:leading-tight mb-8 md:mb-10 uppercase tracking-tighter">
            CRAFTING <br />
            <span className="text-brand-blue">DIGITAL</span> <br className="md:hidden" /> EXPERIENCES <br />
            THAT <span className="relative inline-block">
              MATTER
              <span className="absolute left-0 -bottom-1 w-full h-1.5 md:h-3 bg-brand-green rounded-full"></span>
            </span>.
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-2xl text-brand-gray max-w-2xl mb-12 md:mb-16 font-medium leading-relaxed md:leading-snug">
            Freelance web developer specialized in building modern, high-performance websites with a focus on bold aesthetics and user-centric design.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8">
            <a 
              href="#work"
              className="px-8 py-5 md:py-4 bg-brand-green hover:bg-brand-green/90 text-brand-black font-black text-sm md:text-base rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,204,102,0.3)] hover:shadow-[0_0_30px_rgba(0,204,102,0.5)] transform hover:-translate-y-1 text-center"
            >
              VIEW PROJECTS
            </a>
            <a 
              href="#contact"
              className="group flex items-center justify-center sm:justify-start space-x-2 text-white font-bold text-base border-b-2 border-transparent hover:border-brand-blue transition-all py-1"
            >
              <span className="uppercase tracking-widest text-sm">Let's talk</span>
              <svg className="w-5 h-5 text-brand-blue group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-30 hidden sm:flex">
        <span className="text-[9px] uppercase tracking-[0.4em] mb-2 font-bold">Scroll</span>
        <div className="w-px h-10 md:h-12 bg-gradient-to-b from-brand-blue to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
