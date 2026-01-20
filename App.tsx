
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll handling or intersection observer logic if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
