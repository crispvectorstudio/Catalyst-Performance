import React from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  scrollTo: (selector: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6 flex justify-center items-center">
        <button onClick={() => scrollTo('#hero')}>
           <img 
             src={LOGO_URL} 
             alt="Catalyst Performance Logo" 
             className="h-14 sm:h-16 w-auto transition-all duration-300 [filter:drop-shadow(0_0_15px_rgba(56,189,248,0.7))] hover:[filter:drop-shadow(0_0_20px_rgba(56,189,248,1))]" 
           />
        </button>
      </div>
    </header>
  );
};

export default Header;