import React from 'react';
import Carousel from './Carousel';

const Testimonials: React.FC = () => {
  const testimonialImages = [
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Avaliacao_Biblioteca0524b.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Avaliacao_Hotmart_Biblioteca0524-04.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Avaliacao_Hotmart_Biblioteca0524-03.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Avaliacao_Hotmart_Biblioteca0524-02.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Avaliacao_Biblioteca0524-01.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-10.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-27.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-21.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-22.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-09.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/DEP-Joquebede-B.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-08.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-20.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-17.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-12.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-14.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-15.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-23.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-29.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-28.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/DEP-Celia-P.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/Plataforma-18.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/DEP-Luana-M.avif",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/flapires05-e1702836219412.jpg",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/alinecrispimpsi.png",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/juliabrazcosta.psi_-1.png",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/psicojuoliveira-e1698464693641.png",
    "https://terapiaevoluida.com/wp-content/uploads/2025/05/DEP-insta-thais.png"
  ];

  const renderTestimonialItems = (images: string[]) => {
    return images.map((image, index) => (
      <div key={index} className="flex justify-center p-2">
        <img 
          src={image} 
          alt={`Depoimento de cliente ${index + 1}`} 
          className="rounded-lg shadow-md max-h-[500px] object-contain"
        />
      </div>
    ));
  };

  return (
    <section className="py-16 px-4 bg-[#e9edc9]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md mb-4">
            <span className="text-xl md:text-xl font-bold text-[#2e2e2e]">Hotmart 4,9 ⭐/5</span>
          </div>
          
          <div className="bg-[#d4a373] text-white text-xl md:text-2xl font-bold py-4 px-8 rounded-lg inline-block">
            8.147 psicólogos ativos
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <Carousel 
            items={renderTestimonialItems(testimonialImages)} 
            autoplaySpeed={4000}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;