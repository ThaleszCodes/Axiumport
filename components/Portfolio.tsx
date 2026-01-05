import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="projetos" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Portfolio Selecionado
            </h2>
            <p className="text-neutral-400 max-w-lg text-sm md:text-base">
              Casos reais. De landing pages de alta conversão a produtos digitais complexos (SaaS).
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-mono text-neutral-500">
              {PROJECTS.length} PROJETOS ENTREGUES
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:bg-neutral-900 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              {/* Image Container - Forced 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                      <ExternalLink className="text-white w-5 h-5" />
                   </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded border ${
                        tag === 'Destaque' 
                          ? 'bg-brand-accent/20 text-brand-accent border-brand-accent/30 shadow-[0_0_10px_-3px_rgba(99,102,241,0.4)]' 
                          : 'text-neutral-500 border-neutral-800 bg-black/40'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-glow transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};