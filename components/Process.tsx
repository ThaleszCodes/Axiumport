import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-16 md:py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Como trabalhamos
          </h2>
          <p className="text-neutral-400">
            Sem burocracia. Direto ao ponto. Focado no resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative p-6 border-l border-white/10 hover:border-brand-accent transition-colors duration-300 group">
              <span className="block text-4xl font-display font-bold text-neutral-800 mb-6 group-hover:text-white transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};