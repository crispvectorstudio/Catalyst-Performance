import React from 'react';
import AnimatedSection from './AnimatedSection';
import { DECO_IMG_1 } from '../constants';
import { Page } from '../App';

interface HeroProps {
    navigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
    
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <AnimatedSection>
                        <p className="text-sky-400 font-bold uppercase tracking-widest mb-4 text-glow">Catalyst Performance</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                            Turning Challenge<br />Into <span className="text-sky-400 text-glow">Growth</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
                            Needed support for your people and optimising performance for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button onClick={scrollToContact} className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20">
                                Contact Us
                            </button>
                             <div className="w-full sm:w-auto text-sm font-semibold text-gray-400">
                                Launching March 2025
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mt-12 bg-gray-800/50 border border-gray-700/50 rounded-lg p-6 text-center lg:text-left box-glow">
                        <h3 className="font-bold text-white text-lg">Join our launch event</h3>
                        <p className="text-gray-400 text-sm mb-4">"Early bird tickets available"</p>
                        <button onClick={() => navigate('launchEvent')} className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 text-sm">
                            Join Now
                        </button>
                    </AnimatedSection>
                </div>
                <div className="relative hidden lg:block">
                    <img src={DECO_IMG_1} alt="Abstract decorative element" className="w-full max-w-md mx-auto animate-spin-slow opacity-30" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
