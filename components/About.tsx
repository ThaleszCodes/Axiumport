import React from 'react';
import { Layers, Zap, BarChart3, Globe, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-neutral-950 border-y border-white/5 relative overflow-hidden">
      {/* Ambient Background Light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
              Nossa Filosofia
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8 leading-[1.1]">
              Mais que código. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">
                Engenharia de Vendas.
              </span>
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg font-light">
              <p>
                A <strong>Axium Studio</strong> nasceu para preencher a lacuna entre o design bonito que não vende e o site funcional que carece de alma.
              </p>
              <p>
                Através da nossa divisão <strong className="text-white">Axium Web</strong>, unificamos três pilares essenciais que agências tradicionais costumam separar.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  "Estratégia de Negócio (O 'Porquê')",
                  "Design de Alta Conversão (O 'Como')",
                  "Tecnologia de Ponta (A 'Estrutura')"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-neutral-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* New Visual Component: The Reactor Core */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
             <div className="relative w-full max-w-md aspect-square">
                
                {/* Main Card Backdrop */}
                <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                   {/* Interior Grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
                   
                   {/* Radial Center Glow */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/10 rounded-full blur-[60px]"></div>
                </div>

                {/* VISUALIZATION CONTAINER */}
                <div className="absolute inset-0 p-8">
                  
                  {/* Connecting Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                        <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
                      </linearGradient>
                    </defs>
                    {/* Center to Top Left */}
                    <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                    {/* Center to Top Right */}
                    <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                    {/* Center to Bottom */}
                    <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                    
                    {/* Orbit Circles */}
                    <circle cx="50%" cy="50%" r="35%" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />
                  </svg>

                  {/* CENTER NODE: CORE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                     <div className="relative group cursor-default">
                        <div className="absolute inset-0 bg-brand-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="w-24 h-24 bg-black/80 backdrop-blur-md rounded-full border border-brand-accent/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500">
                          <Globe className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-neutral-800/80 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-neutral-300 backdrop-blur-sm whitespace-nowrap">
                          ECOSYSTEM
                        </div>
                     </div>
                  </div>

                  {/* SATELLITE 1: STRATEGY (Top Left) */}
                  <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-20 hover:z-30">
                    <div className="group flex flex-col items-center gap-2 cursor-default">
                      <div className="w-14 h-14 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:border-brand-accent/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                        <BarChart3 className="w-6 h-6 text-neutral-400 group-hover:text-brand-accent transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">Estratégia</span>
                    </div>
                  </div>

                  {/* SATELLITE 2: TECH (Top Right) */}
                  <div className="absolute top-[30%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20 hover:z-30">
                    <div className="group flex flex-col items-center gap-2 cursor-default">
                      <div className="w-14 h-14 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:border-brand-accent/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                        <Zap className="w-6 h-6 text-neutral-400 group-hover:text-brand-accent transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">Tech</span>
                    </div>
                  </div>

                  {/* SATELLITE 3: DESIGN (Bottom) */}
                  <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 hover:z-30">
                    <div className="group flex flex-col items-center gap-2 cursor-default">
                      <div className="w-14 h-14 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:border-brand-accent/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                        <Layers className="w-6 h-6 text-neutral-400 group-hover:text-brand-accent transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-neutral-500 group-hover:text-white transition-colors bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">Design</span>
                    </div>
                  </div>

                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};