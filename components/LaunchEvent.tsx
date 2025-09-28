import React from 'react';
import AnimatedSection from './AnimatedSection';
import { launchEventData, DECO_IMG_1 } from '../constants';
import Contact from './Contact';

const LaunchEvent: React.FC = () => {
    const { superTitle, title, date, time, venue, fullDate, imageUrl, about, whyAttend, highlights, registration } = launchEventData;
    
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center bg-gradient-to-b from-gray-900 to-black/50">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <img src={imageUrl} alt="Launch Event Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="container mx-auto px-6 relative">
                    <AnimatedSection>
                        <p className="text-sky-400 font-bold uppercase tracking-widest mb-4 text-glow">{superTitle}</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">{title}</h1>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto text-lg font-semibold">
                            <span>{date}</span>
                            <span className="hidden md:inline text-gray-600">•</span>
                            <span>{time}</span>
                            <span className="hidden md:inline text-gray-600">•</span>
                            <span>{fullDate}</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* About Section */}
            <section id="about-event" className="py-16 md:py-24 bg-gray-900">
                <AnimatedSection className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* FIX: Property 'imageUrl' does not exist on type '{ title: string; description: string; }'. Using root imageUrl instead. */}
                        <img src={imageUrl} alt="Catalyst Performance Event" className="rounded-xl shadow-2xl w-full h-auto" />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{about.title}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{about.description}</p>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
            
            {/* Why Attend Section */}
            <section id="why-attend" className="py-16 md:py-24 bg-black bg-opacity-20">
                <AnimatedSection className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-12">{whyAttend.title}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyAttend.items.map(item => (
                            <div key={item.number} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 text-center">
                                <p className="text-sky-400 text-4xl font-black mb-2">{item.number}</p>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Highlights Section */}
             <section id="highlights" className="py-16 md:py-24 bg-gray-900">
                <AnimatedSection className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                         <div className="lg:order-2">
                             <img src={highlights.imageUrl} alt="Event Highlights" className="rounded-xl shadow-2xl w-full h-auto" />
                        </div>
                        <div className="lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{highlights.title}</h2>
                            <ul className="space-y-3 text-gray-300 text-lg">
                                {highlights.items.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Registration Section */}
            <section id="contact" className="py-16 md:py-24">
                <Contact title={registration.title} description={registration.description} />
            </section>
        </div>
    );
};

export default LaunchEvent;