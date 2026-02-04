
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-heading font-black text-white">
            JAHIRUL ISLAM<span className="text-brand-blue">.</span>
          </div>
          
          <div className="flex space-x-8">
            {['Twitter', 'LinkedIn', 'Github', 'Dribbble'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-blue transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
            © {currentYear} ALL RIGHTS RESERVED
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-gray/50 uppercase tracking-[0.3em]">
          <span>Designed & Built with Passion</span>
          <span className="mt-2 md:mt-0">Powered by Innovation</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
