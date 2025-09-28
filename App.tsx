import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurDifference from './components/OurDifference';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LaunchEvent from './components/LaunchEvent';
import Team from './components/Team';

export type Page = 'home' | 'launchEvent' | 'team';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const navigate = (page: Page, anchor?: string) => {
    // If we are already on the target page and just need to scroll
    if (page === currentPage && anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // If we are changing pages
    setCurrentPage(page);
    setScrollTarget(anchor || null);
  };
  
  // This effect runs after a page state change to handle scrolling
  useEffect(() => {
    if (scrollTarget) {
      // A brief timeout allows the new page component to render before we try to scroll
      setTimeout(() => {
        const element = document.querySelector(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setScrollTarget(null); // Clear the target after scrolling
      }, 100); 
    } else {
      // If no anchor is specified, scroll to the top of the new page
      window.scrollTo(0, 0);
    }
  }, [currentPage, scrollTarget]);


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'launchEvent':
        return <LaunchEvent />;
      case 'team':
        return <Team />;
      case 'home':
      default:
        return (
          <>
            <section id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
              <Hero navigate={navigate} />
            </section>
            <section id="difference" className="py-16 md:py-24 bg-gray-900">
              <OurDifference />
            </section>
            <section id="services" className="py-16 md:py-24 bg-black bg-opacity-20">
              <Services />
            </section>
            <section id="why-us" className="py-16 md:py-24">
              <WhyUs />
            </section>
            <section id="about" className="py-16 md:py-24 bg-gray-900">
              <About navigate={navigate} />
            </section>
            <section id="testimonials" className="py-16 md:py-24 bg-black bg-opacity-20">
              <Testimonials />
            </section>
            <section id="contact" className="py-16 md:py-24">
              <Contact title={<>Ready to Get <span className="text-sky-400">Started?</span></>} description="Let’s talk about how we can support your people and strengthen your workplace performance." />
            </section>
          </>
        );
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navigate={navigate} currentPage={currentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
