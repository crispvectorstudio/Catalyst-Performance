import React from 'react';
import AnimatedSection from './AnimatedSection';

const OurDifference: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">Our Difference</h2>
        <p className="text-lg md:text-xl text-gray-300">
          At Catalyst Performance, we deliver essential EAP and critical incident services, while also equipping organisations with the tools to transform challenge into growth. By improving wellbeing and performance together, we create workplaces that thrive.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default OurDifference;
