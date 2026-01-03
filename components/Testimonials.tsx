import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">
          O que dizem quem já escalou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-8 right-8 text-neutral-800 w-8 h-8" />
              <p className="text-neutral-300 mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-neutral-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};