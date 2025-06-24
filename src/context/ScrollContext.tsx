import React, { createContext, useContext, ReactNode } from 'react';

interface ScrollContextType {
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};