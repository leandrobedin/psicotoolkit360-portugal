import React, { useEffect } from 'react';

const Demonstration: React.FC = () => {
  useEffect(() => {
    // Load Wistia player script (shared)
    const wistiaScript = document.createElement('script');
    wistiaScript.src = "https://fast.wistia.com/player.js";
    wistiaScript.async = true;
    document.head.appendChild(wistiaScript);

    // Load Video 02 script
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/embed/88d8vuko2t.js";
    script1.async = true;
    script1.type = "module";
    document.head.appendChild(script1);

    // Load Video 03 script
    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/edkicicdat.js";
    script2.async = true;
    script2.type = "module";
    document.head.appendChild(script2);

    // Add Wistia styles for both videos
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='88d8vuko2t']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/88d8vuko2t/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
      wistia-player[media-id='edkicicdat']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/edkicicdat/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      document.head.removeChild(wistiaScript);
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="demonstration-section" className="py-16 px-4 bg-[#ccd5ae]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] mb-12 hidden md:block">
          Veja o PsicoToolkit 360° em ação
        </h2>
        
        <div className="space-y-16">
          <div>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
              <p className="text-lg md:text-lg text-[#2e2e2e] mb-4">
                Preenchimento digital, dispensando a necessidade de impressão.
                Maior adesão aos planos de ação (tarefas entre sessões).
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <wistia-player media-id="88d8vuko2t" aspect="1.7777777777777777"></wistia-player>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
              <p className="text-lg md:text-lg text-[#2e2e2e] mb-4">
                Baralhos e Jogos Interativos perfeitos para sessões online. Engajamento total dos pacientes para uma terapia mais envolvente e eficaz.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <wistia-player media-id="edkicicdat" aspect="1.7777777777777777"></wistia-player>
            </div>
            
            <p className="text-center text-[#2e2e2e] italic mt-4 text-lg md:text-base">
              Sem apps extras. Basta enviar o link ou imprimir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;