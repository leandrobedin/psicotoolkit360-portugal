import React from 'react';
import { useScroll } from '../context/ScrollContext';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollToSection } = useScroll();

  return (
    <section className="pt-32 md:pt-24 pb-16 px-4 bg-gradient-to-b from-[#fefae0] to-[#faedcd]">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-center text-[#fb8500] leading-tight mb-4">
          <span className="text-[black] mt-10">
            <span className="text-[#780000]"><b>Acesso Imediato a 5.000 Ferramentas</b> de TCC e Recursos Terapêuticos.</span>
            <br /> Libere 1 Dia na Sua Agenda por Semana e Aumente em 65% a Adesão dos Pacientes em <b>APENAS 1 CLIQUE!</b>
          </span>
          <br />
          <div className="mt-3 mb-2"></div>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-center text-[#101010] mb-8 max-w-3xl mx-auto">
          Formulários inteligentes, baralhos gamificados e jogos interativos prontos para usar, aplique sua marca em 2 min e faça a adesão dos pacientes decolar em mais de 65 %.
        </h2>

        <div className="flex justify-center mb-8">
          <img 
            src="https://terapiaevoluida.com/wp-content/uploads/2025/05/biblioteca_topo0524-3.png" 
            alt="Biblioteca de Ferramentas TCC PsicoToolkit 360" 
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              <strong>Aumento médio de 65%</strong> na adesão às tarefas entre sessões.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              <strong>Até 7h/semana economizadas</strong> em preparo de materiais.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              <strong>8.147 psicólogos</strong> de 22 estados já utilizam.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-[#d4a373] h-6 w-6 mt-1 flex-shrink-0" />
            <p className="text-[#2e2e2e] text-lg md:text-lg">
              <strong>Acesso imediato</strong> + atualizações grátis para sempre.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <button 
            onClick={() => scrollToSection('offer-section')}
            className="bg-[#d4a373] hover:bg-[#c3956a] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-lg text-center"
          >
            QUERO TER ACESSO A TODAS FERRAMENTAS AGORA!
          </button>
          <p className="text-lg md:text-sm text-[#5a5a5a] mt-2">
            Acesso digital imediato • pagamento único
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 text-lg md:text-sm text-[#5a5a5a]">
          <div className="flex items-center">
            <span className="font-bold">4,9/5 ⭐ Hotmart</span>
          </div>
          <div className="w-px h-5 bg-[#5a5a5a]"></div>
          <div>Garantia Total 30 dias</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;