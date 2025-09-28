import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  scrollTo: (selector: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => scrollTo('#hero')}>
             <img src={LOGO_URL} alt="Catalyst Performance Logo" className="h-8 sm:h-10 w-auto" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;