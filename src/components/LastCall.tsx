import React, { useState, useEffect } from 'react';
import { useScroll } from '../context/ScrollContext';

const LastCall: React.FC = () => {
  const { scrollToSection } = useScroll();
  const [hours, setHours] = useState(3);
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(29);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(interval);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <section className="py-16 px-4 bg-[#2e2e2e] text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Última chance: o preço volta para 197€ quando o relógio zerar.
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-[#d4a373] p-4 rounded-lg">
              <div className="text-4xl font-bold">{formatTime(hours)}</div>
              <div className="text-base md:text-sm">Horas</div>
            </div>
            <div className="bg-[#d4a373] p-4 rounded-lg">
              <div className="text-4xl font-bold">{formatTime(minutes)}</div>
              <div className="text-base md:text-sm">Minutos</div>
            </div>
            <div className="bg-[#d4a373] p-4 rounded-lg">
              <div className="text-4xl font-bold">{formatTime(seconds)}</div>
              <div className="text-base md:text-sm">Segundos</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('offer-section')}
            className="bg-[#d4a373] hover:bg-[#c3956a] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase"
          >
            GARANTIR MINHAS +5.000 FERRAMENTAS COM 66% OFF
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastCall;