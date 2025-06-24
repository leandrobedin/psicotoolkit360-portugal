import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#e9edc9] last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-lg md:text-lg text-[#2e2e2e]">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#d4a373]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#d4a373]" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-[#5a5a5a] text-lg md:text-base" dangerouslySetInnerHTML={{ __html: answer }}></div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Como receberei o material?",
      answer: "Após a compra, você receberá um e-mail em imediato com as instruções para acessar a plataforma. Lembre-se de usar o e-mail correto durante o cadastro! Uma vez logado(a), você terá acesso imediato aos materiais em formato digital, sem custos adicionais. Não oferecemos versões físicas, tudo está disponível para download e uso prático no seu computador, tablet ou celular."
    },
    {
      question: "Como editar os PDFs pelo Canva?",
      answer: "É mais fácil do que parece! Basta criar uma conta gratuita no Canva (você encontra o link em nossa Biblioteca). Com ele, você pode personalizar seus materiais de forma criativa, ajustando cores, layouts e até adicionar sua marca. Transforme seus arquivos em algo único e profissional!<br/><br/><strong>Todos os arquivos são editáveis?</strong><br/>A maioria dos arquivos é editável, mas há algumas exceções:<br/>Baralhos prontos para impressão e jogos interativos: não podem ser editados devido ao formato.<br/>Laminas em PDF : Duas Opções!<br/>Preenchível: com espaço para inserir seu logo e informações profissionais.<br/>Personalizável no Canva: totalmente adaptável, mas não preenchível.<br/>Escolha a versão que melhor se adequa ao seu trabalho!"
    },
    {
      question: "Como usar os jogos interativos?",
      answer: "É simples! Basta ter o PowerPoint instalado (versão 2013 ou superior para Windows, 2019 ou superior para Mac) ou usar a versão online do OneDrive (com uma conta do Outlook). Flexibilidade total: use os jogos no seu computador ou diretamente pelo navegador (Google Chrome ou Microsoft Edge). Prático, rápido e adaptável a qualquer dispositivo!"
    },
    {
      question: "Posso inserir minha logo nos PDFs interativos?",
      answer: "Sim! Você pode adicionar seu logo nos PDFs interativos, mas essa funcionalidade está disponível apenas em computadores (Windows ou Mac) . Após a personalização, os arquivos ficam prontos para uso em qualquer dispositivo.  IPhone, Android, tablet ou computador."
    },
    {
      question: "Para quem é destinado esse material?",
      answer: "A Plataforma PsicoToolkit 360° é ideal para psicólogos que atendem online ou presencialmente . Todos os formulários PDF preenchíveis podem ser impressos, mas também são perfeitos para uso digital. Adapte o material à sua rotina e aproveite ao máximo!"
    },
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer: "Seu acesso à Biblioteca PsicoToolkit 360° é vitalício , com atualizações gratuitas para sempre após a compra. Nenhuma assinatura, nenhum custo adicional! Dica: Recomendamos baixar todos os materiais e atualizações para garantir acesso permanente. Salve-os em uma pasta segura para garantir acesso permanente. Sua responsabilidade, nosso apoio!"
    },
    {
      question: "Como posso tirar minhas dúvidas?",
      answer: "Estamos aqui para ajudar! Envie um e-mail para contato@psicotoolkit360.com.br e nossa equipe responderá com rapidez e atenção. Sua satisfação é nossa prioridade!"
    },
    {
      question: "Como receberei os bônus?",
      answer: "Os bônus (como o Caderno TCC e o Kit Planner + Bloquinho ) estarão disponíveis automaticamente 8 dias após a compra . Mais valor para o seu investimento!"
    },
    {
      question: "Como funciona as atualizações regulares?",
      answer: "Nossa equipe está sempre trabalhando para melhorar os materiais! Atualizações gratuitas serão disponibilizadas para sempre após a compra, incluindo novos conteúdos e melhorias nas ferramentas. Caso alguma ferramenta tenha problemas técnicos, podemos removê-la da plataforma, mas sempre buscando soluções. O foco é a sua experiência!"
    },
    {
      question: "Posso vender os materiais?",
      answer: "Não! A comercialização dos materiais é estritamente proibida e sujeita a ação judicial e multas . Ao comprar, você concorda com os termos de uso da Psicointeração. Esse é um investimento para o seu trabalho, não para revenda."
    },
    {
      question: "Por que escolher a Plataforma PsicoToolkit 360°?",
      answer: "Materiais práticos, atualizados e cheios de utilidade. Acesso vitalício, sem custos ocultos. Suporte ágil e personalizado. Ferramentas que economizam tempo e aumentam a qualidade do seu atendimento. Invista em sua carreira e transforme seu trabalho com a PsicoToolkit 360°!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#faedcd]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-8">
          Perguntas Frequentes
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;