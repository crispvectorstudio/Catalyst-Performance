import React, { useState, useEffect } from 'react';
import { testimonials, TESTIMONIALS_INTRO } from '../constants';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">What They’re Saying</h2>
        <p className="text-lg text-gray-400 mb-12">{TESTIMONIALS_INTRO}</p>
        
        <div className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 min-h-[280px] flex items-center justify-center box-glow">
           <div className="absolute top-6 left-6 text-sky-500 opacity-20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path d="M10.422 10.43c0 1.258-.453 2.336-1.359 3.242s-2.023 1.359-3.242 1.359c-1.258 0-2.32-.46-3.187-1.382S.648 11.75.648 10.531c0-.976.32-1.93.96-2.86.64-.93 1.5-1.64 2.58-2.132L5.43 3.82c-.156.64-.234 1.282-.234 1.922 0 1.125.375 2.148 1.125 3.07s1.688 1.383 2.812 1.383h.688v.234zm9.328 0c0 1.258-.453 2.336-1.359 3.242s-2.023 1.359-3.242 1.359c-1.258 0-2.32-.46-3.187-1.382s-.985-2.023-.985-3.242c0-.976.32-1.93.96-2.86.64-.93 1.5-1.64 2.58-2.132l1.242-1.718c-.156.64-.234 1.282-.234 1.922 0 1.125.375 2.148 1.125 3.07s1.688 1.383 2.812 1.383h.688v.234z"></path></svg>
           </div>
           <div className="relative">
                <p className="text-xl md:text-2xl italic text-white leading-relaxed">
                    "{currentTestimonial.quote}"
                </p>
                <div className="mt-6">
                    <p className="font-bold text-lg text-white">{currentTestimonial.author}</p>
                    <p className="text-sky-400 font-medium">{currentTestimonial.title}</p>
                </div>
           </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
