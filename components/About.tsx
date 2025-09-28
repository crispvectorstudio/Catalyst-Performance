import React from 'react';
import { founders } from '../constants';
import AnimatedSection from './AnimatedSection';

// FIX: The 'Page' type was not exported from App.tsx. The import has been removed
// and the 'navigate' prop type has been changed from 'Page' to 'string'.
interface AboutProps {
    navigate: (page: string) => void;
}


const About: React.FC<AboutProps> = ({ navigate }) => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-400">
          Catalyst Performance was co-founded by Henare O'Brien and Phil Walker.
        </p>
      </div>

      <div className="space-y-16">
        {founders.map((founder) => (
          <div key={founder.name} className="max-w-3xl mx-auto text-left">
            <h3 className="text-3xl font-bold text-white mb-4">{founder.name}</h3>
            <div className="space-y-4 text-gray-300">
              {founder.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
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