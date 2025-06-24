import React from 'react';
import Carousel from './Carousel';

const ProductShowcase: React.FC = () => {
  // PDF Preenchíveis images
  const pdfImages = [
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/84-e1692495077643.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/83-e1692495038631.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/82-e1692494967900.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/81-e1692494922189.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/87-e1692495204706.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/85-e1692495124359.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/86-e1692495165327.avif"
  ];

  // Baralhos e Jogos Interativos images
  const interactiveImages = [
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/78-e1692477624880.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/79-e1692476425479.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/77-e1692476254965.avif"
  ];

  // Baralhos para Terapeuta images
  const therapistDeckImages = [
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/69B-e1692478277747.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/70-e1692476997672.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/68-e1692477491245.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/67-e1692476848751.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/71-e1692477545416.avif"
  ];

  // Baralhos para Pacientes images
  const patientDeckImages = [
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/76-e1692477418519.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/75-e1692477312922.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/74-e1692477273107.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/73-e1692477229768.webp",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/72-e1692477181489.avif"
  ];

  const renderCarouselItems = (images: string[]) => {
    return images.map((image, index) => (
      <div key={index} className="flex justify-center p-2">
        <img 
          src={image} 
          alt={`Product showcase ${index + 1}`} 
          className="rounded-lg shadow-md max-h-96 object-contain"
        />
      </div>
    ));
  };

  return (
    <section className="py-16 px-4 bg-[#fefae0]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-12">
          CONFIRA TUDO QUE VOCÊ RECEBERÁ:
        </h2>
        
        <div className="space-y-16">
          {/* PDFs Preenchíveis */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-[#2e2e2e] mb-6">
              +250 PDFs PREENCHÍVEIS!
            </h3>
            <div className="h-96 bg-white rounded-xl p-4 shadow-lg">
              <Carousel items={renderCarouselItems(pdfImages)} />
            </div>
          </div>
          
          {/* Baralhos e Jogos Interativos */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-[#2e2e2e] mb-6">
              BARALHOS E JOGOS INTERATIVOS!
            </h3>
            <div className="h-96 bg-white rounded-xl p-4 shadow-lg">
              <Carousel items={renderCarouselItems(interactiveImages)} />
            </div>
          </div>
          
          {/* Baralhos Prontos para Impressão */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-center text-[#2e2e2e] mb-6">
              BARALHOS PRONTOS PARA IMPRESSÃO!
            </h3>
            
            <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
              <p className="text-lg md:text-lg text-[#2e2e2e]">
                Se você é alguém que aprecia materiais impressos, apresentamos nossos Baralhos Prontos para Impressão, uma abordagem envolvente para mergulhar em ferramentas terapêuticas de maneira tangível e visual.
              </p>
              <p className="text-lg md:text-lg text-[#2e2e2e] mt-4">
                Oferecemos duas versões:
              </p>
              <p className="text-lg md:text-lg text-[#2e2e2e] font-medium mt-2">
                Uma para uso pelo terapeuta durante as sessões.
              </p>
            </div>
            
            <div className="h-96 bg-white rounded-xl p-4 shadow-lg mb-8">
              <Carousel items={renderCarouselItems(therapistDeckImages)} />
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
              <p className="text-lg md:text-lg text-[#2e2e2e] font-medium">
                E outra como recurso de apoio para o dia a dia dos pacientes.
              </p>
            </div>
            
            <div className="h-96 bg-white rounded-xl p-4 shadow-lg">
              <Carousel items={renderCarouselItems(patientDeckImages)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;