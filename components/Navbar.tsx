
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' : 'bg-transparent py-6 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-heading font-black tracking-tighter text-white">
          JAHIRUL ISLAM<span className="text-brand-blue">.</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-lightGray hover:text-brand-blue transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white p-2 -mr-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
