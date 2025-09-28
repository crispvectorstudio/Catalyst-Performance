import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';
import { Page } from '../App';

interface HeaderProps {
  navigate: (page: Page, anchor?: string) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleNavClick = (page: Page, anchor?: string) => {
    navigate(page, anchor);
    setIsOpen(false);
  };
  
  const navLinks = [
    { label: 'Services', page: 'home', anchor: '#services' },
    { label: 'About Us', page: 'home', anchor: '#about' },
    { label: 'Launch Event', page: 'launchEvent' },
    { label: 'Contact', page: 'home', anchor: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('home')} className="transition-opacity hover:opacity-80">
              <img src={LOGO_URL} alt="Catalyst Performance" className="h-10" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.page as Page, link.anchor)}
                className="text-gray-300 hover:text-white font-semibold tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none z-50 relative h-8 w-8" aria-label="Open menu">
              <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg transition-transform duration-300 ease-in-out transform z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full">
           <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.page as Page, link.anchor)}
                className="text-2xl font-bold text-gray-200 hover:text-sky-400 transition-all duration-300"
                style={{
                  transitionDelay: `${isOpen ? index * 75 + 150 : 0}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;