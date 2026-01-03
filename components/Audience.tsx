import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Audience: React.FC = () => {
  const audienceList = [
    "Prestadores de Serviço que querem autoridade.",
    "Pequenas Empresas buscando profissionalização digital.",
    "Negócios Digitais (Infoprodutores/SaaS).",
    "Quem já tem tráfego mas não converte."
  ];

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Para quem é a <br/> Axium Web?
              </h2>
              <p className="text-neutral-400 mb-8 text-sm md:text-base">
                Não atendemos todo mundo. Focamos em clientes que entendem o valor de um posicionamento digital estratégico e buscam qualidade acima do "precinho".
              </p>
              <div className="space-y-4">
                {audienceList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0" />
                    <span className="text-neutral-200 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl max-w-md">
                <p className="text-white text-lg font-medium mb-2">
                  "O design é o embaixador silencioso da sua marca."
                </p>
                <p className="text-neutral-500 text-sm">
                  — Paul Rand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};