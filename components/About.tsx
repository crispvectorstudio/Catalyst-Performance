import React from 'react';
import { founders, DECO_IMG_1 } from '../constants';
import AnimatedSection from './AnimatedSection';
import { Page } from '../App';


interface AboutProps {
    navigate: (page: Page) => void;
}


const About: React.FC<AboutProps> = ({ navigate }) => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-400">
          Catalyst Performance was Co founded by Phil Walker and Henare O Brien.
        </p>
      </div>

      <div className="space-y-20">
        {founders.map((founder, index) => (
          <div key={founder.name} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
               <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-indigo-600/30 rounded-2xl opacity-20 blur-2xl"></div>
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="rounded-2xl relative w-full h-auto aspect-square object-cover shadow-2xl"
                />
            </div>
            <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <h3 className="text-3xl font-bold text-white mb-4">{founder.name}</h3>
              <div className="space-y-4 text-gray-300">
                {founder.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
       <div className="text-center mt-16">
            <button
                onClick={() => navigate('team')}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20"
            >
                Meet the Team
            </button>
        </div>
    </AnimatedSection>
  );
};

export default About;
