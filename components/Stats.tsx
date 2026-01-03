import React from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="bg-neutral-900/50 backdrop-blur-sm border-y border-white/5 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default py-10 px-4 transition-colors hover:bg-white/[0.02]">
              <div className="font-display font-bold text-3xl md:text-4xl text-white mb-2 group-hover:text-brand-accent group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};