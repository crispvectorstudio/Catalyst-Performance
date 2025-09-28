import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';
import { Page } from '../App';

interface HeaderProps {
  navigate: (page: Page, anchor?: string) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' as Page, anchor: '#hero' },
    { label: 'Services', page: 'home' as Page, anchor: '#services' },
    { label: 'About', page: 'home' as Page, anchor: '#about' },
    { label: 'Launch Event', page: 'launchEvent' as Page },
    { label: 'Team', page: 'team' as Page },
  ];
  
  const handleNavClick = (page: Page, anchor?: string) => {
    navigate(page, anchor);
    setIsOpen(false);
  };

  const NavLink: React.FC<{ label: string; page: Page; anchor?: string }> = ({ label, page, anchor }) => {
    // Only highlight if it's not a home page section link and the current page matches.
    const isActive = currentPage === page && page !== 'home';
    return (
      <button
        onClick={() => handleNavClick(page, anchor)}
        className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
          isActive
            ? 'text-sky-400'
            : 'text-gray-300 hover:text-white'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => handleNavClick('home')}>
             <img src={LOGO_URL} alt="Catalyst Performance Logo" className="h-10 w-auto" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
          <button onClick={() => handleNavClick('home', '#contact')} className="ml-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm">
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <nav className="px-6 pb-4 flex flex-col items-center bg-gray-900/95">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
          <button onClick={() => handleNavClick('home', '#contact')} className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
