import React, { useState, useEffect } from 'react';
import { useScroll } from '../context/ScrollContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#d4a373] shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#2e2e2e]">
          PsicoToolkit 360°
        </div>
        <button 
          onClick={() => scrollToSection('offer-section')}
          className="bg-[#ccd5ae] hover:bg-[#d4a373] text-[#2e2e2e] px-4 py-2 rounded-lg transition-all duration-300 text-lg md:text-sm font-medium"
        >
          Quero as ferramentas!
        </button>
      </div>
    </header>
  );
};

export default Header;