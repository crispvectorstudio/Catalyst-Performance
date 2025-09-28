import React from 'react';
import { testimonials, TESTIMONIALS_INTRO } from '../constants';
import AnimatedSection from './AnimatedSection';

const TestimonialCard: React.FC<{ quote: string; author: string; title: string }> = ({ quote, author, title }) => (
    <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700/50 h-full flex flex-col justify-between box-glow transform transition-transform duration-300 hover:-translate-y-2">
        <div className="relative">
            <svg className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:w-16 text-sky-500 opacity-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6 14.996c0-2.48 0.82-4.695 2.459-6.648s3.83-2.929 6.571-2.929v4.686c-1.393 0-2.583 0.434-3.571 1.301s-1.482 1.946-1.482 3.239h5.023v9.375h-9.375v-9.024zM20 14.996c0-2.48 0.82-4.695 2.459-6.648s3.83-2.929 6.571-2.929v4.686c-1.393 0-2.583 0.434-3.571 1.301s-1.482 1.946-1.482 3.239h5.023v9.375h-9.375v-9.024z"/></svg>
            <p className="text-lg italic text-white leading-relaxed z-10 relative">
                "{quote}"
            </p>
        </div>
        <div className="mt-6 text-right">
            <p className="font-bold text-lg text-white">{author}</p>
            <p className="text-sky-400 font-medium">{title}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 uppercase"><span className="text-gradient">PROVEN.</span> POWERFUL. <span className="text-gradient">REAL.</span></h2>
        <p className="text-lg text-gray-400 mb-12">{TESTIMONIALS_INTRO}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;