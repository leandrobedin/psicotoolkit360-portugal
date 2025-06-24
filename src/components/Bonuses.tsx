import React from 'react';
import { useScroll } from '../context/ScrollContext';

interface BonusCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  originalPrice: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, image, alt, description, originalPrice }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#2e2e2e] mb-4">{title}</h3>
        <p className="text-[#d4a373] font-bold mb-4 text-lg md:text-base">{originalPrice}</p>
        
        <div className="flex justify-center mb-4">
          <img 
            src={image} 
            alt={alt} 
            className="h-48 object-contain"
          />
        </div>
        
        <div className="text-[#5a5a5a] text-lg md:text-base" dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      
      <div className="bg-[#ccd5ae] p-3 text-center text-[#2e2e2e] font-bold text-lg md:text-base">
        GRÁTIS NESSA OFERTA!
      </div>
    </div>
  );
};

const Bonuses: React.FC = () => {
  const { scrollToSection } = useScroll();

  return (
    <section className="py-16 px-4 bg-[#faedcd]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-12">
          SUPER BÓNUS!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <BonusCard
            title="PRONTUÁRIO DIGITAL"
            image="https://terapiaevoluida.com/wp-content/uploads/2025/05/note.png"
            alt="Bónus Prontuário Digital"
            description="Modelo de prontuário para preenchimento online sem depender de plataformas pagas (100% editável)."
            originalPrice="Vendido separado por 22€"
          />
          
          <BonusCard
            title="DOCUMENTOS PSICOLÓGICOS"
            image="https://terapiaevoluida.com/wp-content/uploads/2025/05/docpsicologico_organizador.avif"
            alt="Bónus Documentos Psicológicos"
            description="Modelos para documentos psicológicos com instruções passo a passo, em conformidade com as resoluções atualizadas do Conselho Federal de Psicologia (Declaração, atestado psicológico, laudo psicológico, relatório psicológico, parecer psicológico e encaminhamento) 100% editável."
            originalPrice="Vendido separado por 17€"
          />
          
          <BonusCard
            title="CADERNO DE TERAPIA TCC"
            image="https://terapiaevoluida.com/wp-content/uploads/2025/05/caderno10-e1692317628341.png"
            alt="Bónus Caderno de Terapia TCC"
            description="Ao adquirir nosso conjunto de ferramentas da Psicointeração, você receberá um caderno de terapia TCC como bónus. Todas as ferramentas fundamentais estão organizadas em um só lugar para facilitar o progresso dos seus pacientes.<br/>✅ Disponível em versão pronta para impressão;<br/>✅ Versão digital;<br/>✅ Capa personalizada, insira seu logo ou informações profissionais."
            originalPrice="Vendido separado por 22€"
          />
          
          <BonusCard
            title="PLANNER MAIS FOCO E MENOS ANSIEDADE + BLOQUINHO LIMPE SUA MENTE"
            image="https://terapiaevoluida.com/wp-content/uploads/2025/05/PLANNER-BONUS-e1701949983608.png"
            alt="Bónus Planner Mais Foco Menos Ansiedade e Bloquinho Limpe Sua Mente"
            description="O Kit Planner 'Mais Foco e Menos Ansiedade' com o Bloquinho Limpe sua Mente é uma ferramenta exclusiva, criada especialmente para aqueles que buscam gerenciar a ansiedade diária, concentrar-se no que é verdadeiramente significativo e cuidar de si mesmos para atingir metas e cumprir tarefas diárias.<br/>✅ Disponível em versão pronta para impressão;<br/>✅ Versão digital."
            originalPrice="Vendido separado por 29€"
          />
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('offer-section')}
            className="bg-[#d4a373] hover:bg-[#c3956a] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            QUERO TODOS OS BÓNUS AGORA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;