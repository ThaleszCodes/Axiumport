import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black relative pt-32 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Próximo Passo
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-[1.1]">
            Vamos construir seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              próximo nível?
            </span>
          </h2>
          <p className="text-neutral-400 mb-10 text-lg md:text-xl max-w-2xl font-light">
            Sua marca merece um posicionamento que impõe respeito. Preencha o briefing e receba uma análise estratégica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
             <Button href="https://axium-web.vercel.app" variant="primary" className="px-10 py-5 text-lg shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:scale-105">
                Quero meu site profissional
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/10">
          <div className="mb-6 md:mb-0">
            <span className="font-display font-bold text-2xl text-white block mb-2">AXIUM</span>
            <span className="text-neutral-500 text-sm max-w-xs block">
              Design estratégico e engenharia digital para negócios que buscam escala.
            </span>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-neutral-600">
             <a href="mailto:contato@axium.studio" className="hover:text-white transition-colors">contato@axium.studio</a>
            <span>&copy; {new Date().getFullYear()} Axium Studio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};