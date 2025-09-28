import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

interface ContactProps {
  title?: React.ReactNode;
  description?: string;
}

const Contact: React.FC<ContactProps> = ({ title, description }) => {
  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase">
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          {description}
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          <a href={`mailto:${CONTACT_EMAIL}`} className="group text-center transition-all transform hover:-translate-y-2 bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-sky-500 duration-300 box-glow">
            <div className="flex justify-center mb-4">
              <div className="bg-black p-4 rounded-full border border-gray-600 group-hover:border-sky-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1 uppercase">Email Us</h3>
            <p className="text-sky-400 group-hover:text-white transition-colors duration-300 text-lg">{CONTACT_EMAIL}</p>
          </a>

          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="group text-center transition-all transform hover:-translate-y-2 bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-sky-500 duration-300 box-glow">
            <div className="flex justify-center mb-4">
               <div className="bg-black p-4 rounded-full border border-gray-600 group-hover:border-sky-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1 uppercase">Call Us</h3>
            <p className="text-sky-400 group-hover:text-white transition-colors duration-300 text-lg">{CONTACT_PHONE}</p>
          </a>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;