import React from 'react';
import AnimatedSection from './AnimatedSection';
import Counter from './Counter';
import { stats } from '../constants';

const WhyUs: React.FC = () => {
    
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatedSection className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">Why Work With Us?</h2>
                    <ul className="space-y-4 text-gray-300 text-lg">
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>NZ-based professionals with decades of combined experience</span>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Trusted providers for both individual support and organisational development</span>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Flexible delivery: in-person, online, or onsite at short notice</span>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>More than EAP — a true partner in growth and performance</span>
                        </li>
                    </ul>
                     <div className="mt-8">
                        <button onClick={scrollToContact} className="bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="relative">
                     <div className="absolute -inset-2 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl opacity-10 blur-xl"></div>
                     <div className="grid sm:grid-cols-2 gap-4 relative">
                        {stats.slice(0, 2).map((stat) => (
                            <Counter key={stat.label} end={stat.value} suffix={stat.suffix} label={stat.label} />
                        ))}
                        <div className="sm:col-span-2">
                             <Counter end={stats[2].value} suffix={stats[2].suffix} label={stats[2].label} />
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default WhyUs;
