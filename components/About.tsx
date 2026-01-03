import React from 'react';
import { Layers, Zap, BarChart3, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-neutral-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Mais que código. <br />
              <span className="text-neutral-500">Método e visão de negócio.</span>
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-base md:text-lg">
              <p>
                A <strong>Axium Studio</strong> nasceu para preencher a lacuna entre o design bonito que não vende e o site funcional que carece de alma.
              </p>
              <p>
                Através da nossa divisão <strong>Axium Web</strong>, aplicamos processos de engenharia e design para criar estruturas que passam confiança imediata.
              </p>
              <p>
                Não fazemos "o que dá". Entregamos o que o seu negócio precisa para escalar no digital, sem improvisos e sem reuniões intermináveis.
              </p>
            </div>
          </div>
          
          <div className="relative group order-1 md:order-2">
             {/* Ecosystem Visualization */}
            <div className="aspect-square md:aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent opacity-50"></div>
              
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-neutral-800 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-all duration-500">
                  <Globe className="text-white w-10 h-10" />
                </div>
                <div className="mt-4 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs text-brand-accent tracking-wider font-medium">ECOSYSTEM</div>
              </div>

              {/* Connected Nodes */}
              {/* Node 1: Strategy */}
              <div className="absolute top-1/4 left-1/4 animate-[pulse_4s_infinite]">
                 <div className="w-12 h-12 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center relative z-10">
                    <BarChart3 className="text-neutral-400 w-5 h-5" />
                 </div>
                 <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-white/10 to-transparent -translate-y-1/2 origin-left rotate-45"></div>
              </div>

              {/* Node 2: Design */}
              <div className="absolute bottom-1/3 right-1/4 animate-[pulse_5s_infinite]">
                 <div className="w-12 h-12 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center relative z-10">
                    <Layers className="text-neutral-400 w-5 h-5" />
                 </div>
              </div>

              {/* Node 3: Tech */}
              <div className="absolute top-1/3 right-1/4 animate-[pulse_6s_infinite]">
                 <div className="w-12 h-12 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center relative z-10">
                    <Zap className="text-neutral-400 w-5 h-5" />
                 </div>
              </div>

              {/* Connecting Lines (Simulated SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="33%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-accent/20 blur-2xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};