import React from 'react';
import AnimatedSection from './AnimatedSection';
import { launchEventData } from '../constants';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
    scrollTo: (selector: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    const { superTitle, title, fullDate, date, imageUrl, eventDate } = launchEventData;
    
    return (
        <div className="relative pt-28 pb-20 md:pt-40 lg:pt-48 lg:pb-32 text-center bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10"></div>
            <img src={imageUrl} alt="Abstract high-energy background" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
            
            <div className="container mx-auto px-6 relative z-20">
                <AnimatedSection>
                    <p className="font-heading text-sky-400 font-bold uppercase tracking-widest mb-4 text-glow text-lg md:text-xl">{superTitle}</p>
                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 uppercase">
                        <span className="text-gradient">{title}</span>
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 max-w-4xl mx-auto text-base md:text-lg text-gray-300 font-semibold mb-8">
                        <span className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {fullDate}
                        </span>
                    </div>

                    <CountdownTimer targetDate={eventDate} />

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => scrollTo('#contact')} className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow text-base md:text-lg uppercase tracking-wider">
                            Claim Your Spot
                        </button>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Hero;