import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ContactProps {
  title?: React.ReactNode;
  description?: string;
}

const Contact: React.FC<ContactProps> = ({ title, description }) => {
  const defaultTitle = <>Get in <span className="text-sky-400">Touch</span></>;
  const defaultDescription = "Ready to transform your team's performance? We're here to help. Reach out to discuss your needs, and we'll create a solution that works for you.";

  return (
    <AnimatedSection className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {title || defaultTitle}
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          {description || defaultDescription}
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <a href="tel:64210583234" className="flex items-center gap-3 text-lg text-gray-200 hover:text-sky-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>64210583234</span>
            </a>
             <a href="mailto:info@catalystperformance.co.nz" className="flex items-center gap-3 text-lg text-gray-200 hover:text-sky-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@catalystperformance.co.nz</span>
            </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;