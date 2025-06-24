import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: ReactNode[];
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  showArrows = true,
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full">
        {items[currentIndex]}
      </div>

      {showArrows && (
        <>
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-[#2e2e2e]" />
          </button>

          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-[#2e2e2e]" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#d4a373] w-6' : 'bg-[#ccd5ae]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;