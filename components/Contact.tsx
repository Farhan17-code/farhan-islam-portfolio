import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  // Using the specific Formspree ID provided: xzddarry
  const [state, handleSubmit] = useForm("xzddarry");

  return (
    <section id="contact" className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.4em] mb-4">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
              READY TO START <br />
              <span className="text-brand-green">YOUR PROJECT?</span>
            </h3>
            <p className="text-brand-gray text-lg mb-12 max-w-md">
              Have an idea but not sure how to build it? Let's sit down and talk about how we can bring it to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-blue uppercase tracking-widest">Email me</p>
                  <p className="text-white font-medium">postarfan@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-green uppercase tracking-widest">Current Location</p>
                  <p className="text-white font-medium">Gazipur, Bangladesh (Remote Worldwide)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black p-8 md:p-12 rounded-2xl border border-white/5 relative">
            {state.succeeded ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,204,102,0.2)]">
                  <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tighter">Message Sent!</h4>
                <p className="text-brand-gray mb-8">Thanks for joining and reaching out. Farhan will get back to you soon.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-3 border border-brand-blue text-brand-blue font-bold uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-brand-soft border border-white/10 p-4 text-white focus:outline-none focus:border-brand-blue transition-colors rounded-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-brand-soft border border-white/10 p-4 text-white focus:outline-none focus:border-brand-blue transition-colors rounded-sm"
                      placeholder="john@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-tighter"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Project Type</label>
                  <select 
                    id="projectType"
                    name="projectType"
                    className="w-full bg-brand-soft border border-white/10 p-4 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none rounded-sm"
                  >
                    <option>Website Redesign</option>
                    <option>New SaaS Landing Page</option>
                    <option>E-commerce Solution</option>
                    <option>Custom Web App</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    required
                    className="w-full bg-brand-soft border border-white/10 p-4 text-white focus:outline-none focus:border-brand-blue transition-colors rounded-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-tighter"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className={`w-full py-5 bg-brand-green text-brand-black font-black uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(0,204,102,0.2)] rounded-sm ${state.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-green/90 hover:shadow-[0_0_30px_rgba(0,204,102,0.4)]'}`}
                >
                  {state.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
