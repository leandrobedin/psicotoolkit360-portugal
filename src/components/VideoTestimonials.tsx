import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

interface TestimonialSlide {
  name: string;
  videoId: string;
}

const VideoTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialSlide[] = [
    { name: 'Depoimento 1', videoId: 'abbmvl30dm' },
    { name: 'Depoimento 2', videoId: '0sptvfym9d' },
    { name: 'Depoimento 3', videoId: '6bhc4cup3i' },
    { name: 'Depoimento 4', videoId: 'pytkx1y3rk' },
    { name: 'Depoimento 5', videoId: 'wtvwbkrqi7' },
    { name: 'Depoimento 6', videoId: '561utzkhmo' }
  ];

  useEffect(() => {
    // Load Wistia player script (shared)
    const wistiaScript = document.createElement('script');
    wistiaScript.src = "https://fast.wistia.com/player.js";
    wistiaScript.async = true;
    document.head.appendChild(wistiaScript);

    // Load all video scripts
    const scripts: HTMLScriptElement[] = [];
    testimonials.forEach(({ videoId }) => {
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${videoId}.js`;
      script.async = true;
      script.type = "module";
      document.head.appendChild(script);
      scripts.push(script);
    });

    // Add Wistia styles for all videos
    const style = document.createElement('style');
    style.textContent = testimonials.map(({ videoId }) => `
      wistia-player[media-id='${videoId}']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `).join('\n');
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(wistiaScript);
      scripts.forEach(script => document.head.removeChild(script));
      document.head.removeChild(style);
    };
  }, []);

  const renderTestimonialItems = () => {
    return testimonials.map(({ name, videoId }, index) => (
      <div key={videoId} className="px-4" onClick={() => setCurrentSlide(index)}>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <wistia-player media-id={videoId} aspect="1.7777777777777777"></wistia-player>
          <div className="py-4 text-center">
            <p className="text-lg font-bold text-[#2e2e2e]">{name}</p>
            <p className="text-lg md:text-sm text-[#5a5a5a]">Clique para assistir</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-16 px-4 bg-[#faedcd]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-4">
          Aperte o play e veja quem já está transformando a vida com nosso método!
        </h2>
        
        <p className="text-lg md:text-lg text-center text-[#5a5a5a] mb-8">
          Arraste para o lado ➡️ e inspire-se com resultados reais.
        </p>

        <div className="relative pb-16">
          <Carousel 
            items={renderTestimonialItems()}
            autoplaySpeed={0}
            showArrows={true}
            showDots={true}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;