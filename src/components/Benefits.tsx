import React from 'react';
import { Clock, Gamepad2, Award } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="text-[#d4a373] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2e2e2e] mb-2">{title}</h3>
        <p className="text-lg md:text-[#5a5a5a]">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#fefae0]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<Clock size={48} />}
            title="Economia de Tempo"
            description="+5h livres/sem menos preparo, mais sessões pagas."
          />
          <BenefitCard
            icon={<Gamepad2 size={48} />}
            title="Engajamento"
            description="Sessões dinâmicas materiais gamificados que aumentam tarefas concluídas"
          />
          <BenefitCard
            icon={<Award size={48} />}
            title="Autoridade"
            description="Logo nos PDFs, design coeso, respaldo científico"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;