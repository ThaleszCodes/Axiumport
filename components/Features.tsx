import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-950 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
            Por que nossos projetos <span className="text-brand-accent">vendem?</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Não entregamos apenas "bonito". Entregamos engenharia digital focada em resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 group-hover:text-brand-accent border border-white/5 group-hover:border-brand-accent/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};