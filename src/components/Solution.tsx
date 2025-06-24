import React from 'react';
import { useScroll } from '../context/ScrollContext';
import { Check } from 'lucide-react';

const Solution: React.FC = () => {
  const { scrollToSection } = useScroll();

  React.useEffect(() => {
    // Load Wistia player scripts for Video 01
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/dhfnb5iz0x.js";
    script2.async = true;
    script2.type = "module";
    document.head.appendChild(script2);

    // Add Wistia styles for Video 01
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='dhfnb5iz0x']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/dhfnb5iz0x/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-[#e9edc9]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2e2e2e] mb-4">
          Conheça o PsicoToolkit 360°: o maior arsenal interativo para psicólogos de TCC no Brasil
        </h2>
        
        <p className="text-xl md:text-xl text-center text-[#5a5a5a] mb-10">
          Baixe uma vez, personalize em minutos e aplique para sempre.
        </p>
        
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <wistia-player media-id="dhfnb5iz0x" aspect="1.7777777777777777"></wistia-player>
        </div>
        
        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              Formulários & questionários 100% editáveis (Canva + PDF preenchível).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              Baralhos & jogos on-line que duplicam o engajamento.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              Materiais prontos para impressão com design profissional.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              Atualizações vitalícias incluídas, sem taxa adicional.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('demonstration-section')}
            className="bg-[#ccd5ae] hover:bg-[#b8c292] text-[#2e2e2e] text-lg md:text-lg font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            VER O KIT EM AÇÃO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;