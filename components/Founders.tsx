import React from 'react';
import AnimatedSection from './AnimatedSection';
import { founders } from '../constants';

const Founders: React.FC = () => {
    return (
        <AnimatedSection className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 uppercase"><span className="text-gradient">Learn From The Masters</span></h2>
                <p className="text-lg md:text-xl text-gray-400">
                    Catalyst Performance was co-founded by two seasoned professionals dedicated to transforming challenges into growth.
                </p>
            </div>
            <div className="space-y-16 mt-20">
                {founders.map((founder) => (
                  <div key={founder.name} className="max-w-4xl mx-auto text-left bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-gray-700/50 box-glow">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">{founder.name}</h3>
                    <p className="text-sky-400 font-semibold text-lg mb-4 text-glow-gold">{founder.title}</p>
                    <div className="space-y-4 text-gray-300 border-t border-gray-700 pt-4 mt-4">
                      {founder.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
        </AnimatedSection>
    );
};
export default Founders;