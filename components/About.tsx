
import React from 'react';

const About: React.FC = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 
    'Three.js', 'UI/UX Design', 'Headless CMS', 'SEO Optimization'
  ];

  return (
    <section id="about" className="py-24 bg-brand-soft border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-brand-green/20 rounded-lg blur-2xl group-hover:opacity-100 transition duration-500 opacity-50"></div>
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-brand-blue/50">
              <img 
                src="https://picsum.photos/seed/farhan/800/800" 
                alt="Farhan Islam" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-lg shadow-xl hidden md:block">
              <span className="text-4xl font-black block">01+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80">Years Experience</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.4em] mb-4">The Developer</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">
              I BLEND <span className="text-brand-green">CODE</span> WITH CREATIVITY.
            </h3>
            <p className="text-lg text-brand-lightGray mb-6 leading-relaxed">
              Based in the digital realm, I help brands stand out through custom-built web solutions. My approach combines technical excellence with a sharp eye for modern aesthetics, ensuring every pixel serves a purpose.
            </p>
            <p className="text-lg text-brand-lightGray mb-10 leading-relaxed">
              I don't just build websites; I create digital homes for ambitious ideas. Whether you're a startup or an established brand, I bring the latest 2026-era tech stack to your project.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-brand-black/50 border border-white/10 rounded-full text-xs font-semibold text-brand-lightGray hover:border-brand-blue hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
