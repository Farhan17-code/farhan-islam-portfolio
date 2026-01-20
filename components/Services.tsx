
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom-coded high-performance websites using React, Next.js, and modern headless solutions.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Bold, conversion-focused design systems that prioritize user experience and brand identity.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Speed Optimization',
      description: 'Lighting-fast loading times and optimized core web vitals for superior SEO rankings.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-soft border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.4em] mb-4">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-white">SOLUTIONS THAT <span className="text-brand-green">SCALE</span>.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-10 group hover:border-brand-blue/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-brand-green mb-8 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-black text-white mb-4 uppercase tracking-wider">
                {service.title}
              </h4>
              <p className="text-brand-gray leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-8 h-1 w-0 bg-brand-blue group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
