import React from 'react';
import { services } from '../constants';
import AnimatedSection from './AnimatedSection';

const ServiceCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 transition-all duration-300 hover:border-sky-500/50 hover:bg-gray-800/80 hover:-translate-y-2 box-glow">
    <img src={icon} alt={`${title} icon`} className="h-16 w-16 mb-6" />
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Services;
