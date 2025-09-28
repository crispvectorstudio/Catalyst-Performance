import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import Founders from './components/Founders';
import { launchEventData } from './constants';

const App: React.FC = () => {
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <Header scrollTo={scrollTo} />
      <main>
        <section id="hero" className="relative overflow-hidden">
          <Hero scrollTo={scrollTo} />
        </section>
        
        <div className="angled-section-upper bg-black">
          <section id="event-details" className="relative z-20">
            <EventDetails />
          </section>
        </div>

        <div className="angled-section-lower bg-gray-900">
           <section id="founders" className="py-12 sm:py-16 md:py-24 bg-gray-900 relative z-20">
              <Founders />
          </section>
        </div>
        
        <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-black">
          <Testimonials />
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-900 bg-opacity-40">
          <Contact title={<>{launchEventData.registration.title}</>} description={launchEventData.registration.description} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;