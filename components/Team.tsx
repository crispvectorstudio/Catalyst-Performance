import React from 'react';
import AnimatedSection from './AnimatedSection';
import { founders } from '../constants';
import Contact from './Contact';

const Team: React.FC = () => {
    return (
        <div className="pt-24 md:pt-32">
             <section id="team-intro" className="py-16 md:py-24 bg-gray-900">
                <AnimatedSection className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">Meet the Team</h1>
                        <p className="text-lg md:text-xl text-gray-400">
                            Catalyst Performance was co-founded by Henare O'Brien and Phil Walker, two seasoned professionals dedicated to transforming challenges into growth.
                        </p>
                    </div>

                    <div className="space-y-16 mt-20">
                        {founders.map((founder) => (
                          <div key={founder.name} className="max-w-4xl mx-auto text-left">
                            <h3 className="text-3xl font-bold text-white mb-4">{founder.name}</h3>
                            <div className="space-y-4 text-gray-300">
                              {founder.bio.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
            <section id="contact" className="py-16 md:py-24">
              <Contact title={<>Ready to Get <span className="text-sky-400">Started?</span></>} description="Let’s talk about how we can support your people and strengthen your workplace performance." />
            </section>
        </div>
    );
};

export default Team;