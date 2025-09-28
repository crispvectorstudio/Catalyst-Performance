import React from 'react';
import AnimatedSection from './AnimatedSection';
import { launchEventData } from '../constants';

const WhyAttendCard: React.FC<{ icon: JSX.Element, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-700/50 text-center transition-all duration-300 hover:border-sky-500/50 hover:bg-gray-800 hover:-translate-y-2 box-glow h-full">
        <div className="flex justify-center items-center mb-4">
            <div className="text-sky-400">{icon}</div>
        </div>
        <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const EventDetails: React.FC = () => {
    const { about, whyAttend, highlights } = launchEventData;

    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ];

    return (
        <>
            {/* About Section */}
            <div id="about-event" className="py-12 sm:py-16 md:py-24 bg-black">
                <AnimatedSection className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-center">
                        <div className="lg:col-span-3">
                            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 uppercase"><span className="text-gradient">{about.title}</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{about.description}</p>
                        </div>
                        <div className="lg:col-span-2">
                           <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border-2 border-sky-500/30 box-glow text-center">
                                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Event Details</h3>
                                <div className="space-y-3 text-gray-300 text-left">
                                     <p><strong className="font-semibold text-sky-400">Date:</strong> {launchEventData.fullDate}</p>
                                     <p><strong className="font-semibold text-sky-400">Time:</strong> {launchEventData.date}</p>
                                     <p><strong className="font-semibold text-sky-400">Venue:</strong> {launchEventData.time}</p>
                                     <p><strong className="font-semibold text-sky-400">Location:</strong> {launchEventData.venue}</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Why Attend Section */}
            <div className="py-12 sm:py-16 md:py-24 bg-black">
                <AnimatedSection className="container mx-auto px-6">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 uppercase">{whyAttend.title}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyAttend.items.map((item, index) => (
                           <WhyAttendCard 
                                key={item.title}
                                icon={icons[index]}
                                title={item.title}
                                description={item.description}
                           />
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            {/* Highlights Section */}
             <div className="py-12 sm:py-16 md:py-24 bg-black">
                <AnimatedSection className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                         <div className="lg:order-2">
                             <img src={highlights.imageUrl} alt="Event Highlights" className="rounded-xl shadow-2xl w-full h-auto" />
                        </div>
                        <div className="lg:order-1">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase">{highlights.title}</h2>
                            <ul className="space-y-4 text-gray-300 text-lg">
                                {highlights.items.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 md:w-7 md:h-7 text-sky-400 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </>
    );
};
export default EventDetails;