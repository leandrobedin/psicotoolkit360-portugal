import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#ccd5ae]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://terapiaevoluida.com/wp-content/uploads/2025/05/6789518d4d71d_garantia-de-30-dias-ou-seu-dinheiro-de-volta-copy.webp" 
                alt="Garantia Total de 30 Dias PsicoToolkit 360" 
                className="w-full max-w-[200px] mx-auto"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e2e] mb-4">
                GARANTIA TOTAL DE 30 DIAS
              </h2>
              
              <p className="text-lg md:text-lg text-[#5a5a5a]">
                Aplique em suas sessões durante 30 dias. Se não economizar tempo ou ver mais adesão, devolvemos 100% sem perguntas.
              </p>
              
              <p className="text-lg md:text-lg text-[#5a5a5a] mt-4">
                Não existe risco para você. Nosso compromisso é com a sua satisfação e com a qualidade do seu atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;