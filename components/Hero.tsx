import React from 'react';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black selection:bg-brand-accent selection:text-white">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Background Ambience - Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-brand-accent/20 blur-[120px] md:blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      {/* Vignette to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md animate-[fadeInUp_1s_ease-out] hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all cursor-default shadow-[0_0_15px_-3px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_-3px_rgba(99,102,241,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-neutral-300 tracking-wider uppercase font-display">Agenda Aberta 2024</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] md:leading-[1.05] mb-8 text-white animate-[fadeInUp_1s_ease-out_0.2s_both] text-balance">
          Websites que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 drop-shadow-sm">
            organizam a venda.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both] text-balance font-light">
          Transformamos tráfego em receita através de <span className="text-white font-medium">design estratégico</span> e <span className="text-white font-medium">engenharia digital</span> de alta performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_0.6s_both] w-full sm:w-auto">
          <Button href="#projetos" icon className="w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]">
            Ver Portfolio
          </Button>
          <Button variant="outline" href="#contact" className="w-full sm:w-auto hover:bg-white/5">
            Solicitar Proposta
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-neutral-700 hidden md:block opacity-50">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};