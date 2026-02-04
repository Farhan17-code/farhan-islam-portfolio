
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Jahirul transformed our vision into a digital masterpiece. His attention to detail and technical skill are unparalleled in the freelance market.",
      author: "SARAH JENKINS",
      role: "CEO, NexaCorp",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      text: "The website speed and design quality exceeded our expectations. Our conversion rate increased by 40% after the redesign.",
      author: "MARCUS CHENG",
      role: "Founder, Peak Digital",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="w-12 h-1 bg-brand-blue mb-6"></div>
          <h3 className="text-3xl font-heading font-black text-white text-center">TRUSTED BY INNOVATORS</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-soft p-12 border-l-4 border-brand-green relative">
              <svg className="absolute top-8 right-8 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12L12.017 12V10C12.017 7.79086 13.8079 6 16.017 6H19.017C21.2261 6 23.017 7.79086 23.017 10V15C23.017 17.2091 21.2261 19 19.017 19H16.017C14.9124 19 14.017 19.8954 14.017 21H12.017L12.017 21L14.017 21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 8.89543 5.017 10V12L3.017 12V10C3.017 7.79086 4.80786 6 7.017 6H10.017C12.2261 6 14.017 7.79086 14.017 10V15C14.017 17.2091 12.2261 19 10.017 19H7.017C5.91243 19 5.017 19.8954 5.017 21H3.017L3.017 21L5.017 21Z" />
              </svg>
              <p className="text-xl text-brand-lightGray italic mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-brand-blue" />
                <div>
                  <h5 className="font-bold text-white text-sm tracking-widest">{t.author}</h5>
                  <p className="text-brand-blue text-xs uppercase font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {['TECHNO', 'VANTAGE', 'QUANTUM', 'NOVA', 'ECHO'].map(logo => (
            <span key={logo} className="text-2xl font-black tracking-widest text-white">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
