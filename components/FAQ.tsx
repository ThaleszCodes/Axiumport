import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-black/40 transition-all hover:border-white/20"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white text-base md:text-lg pr-4 md:pr-8">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-accent flex-shrink-0" />
                ) : (
                  <Plus className="text-neutral-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-white/5 mt-2 text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};