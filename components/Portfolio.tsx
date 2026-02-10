import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Phantom Wears',
      category: 'E-Commerce / Fashion',
      image: 'https://elmlfaxrtgrlgzeqiynp.supabase.co/storage/v1/object/public/products/Screenshot%202026-02-10%20135455.png',
      description: 'A futuristic dashboard for managing decentralized assets with real-time analytics.',
      link: 'https://shop.farhan-islam.org' // Replace with your actual link
    },
    {
      title: 'Lumina luxe',
      category: 'E-Commerce / Artisanal Goods',
      image: 'https://elmlfaxrtgrlgzeqiynp.supabase.co/storage/v1/object/public/products/Screenshot%202026-02-10%20134743.png',
      description: 'High-speed interface for a luxury electric vehicle configurator.',
      link: 'https://luminaluxe.vercel.app/' // Replace with your actual link
    },
  ];

  return (
    <section id="work" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.4em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-white">SELECTED <span className="text-brand-green">WORKS</span>.</h3>
          </div>
          <p className="text-brand-gray max-w-xs md:text-right">
            A collection of digital products focused on quality, innovation, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden bg-brand-soft rounded-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-2">
                  <span className="inline-block text-brand-green text-[10px] font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-heading font-black text-brand-blue mb-4">
                  {project.title}
                </h4>
                <p className="text-brand-lightGray text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-green font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  <span>View Case Study</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Decorative border glow */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-brand-blue/30 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
