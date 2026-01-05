import { Project, ProcessStep } from './types';
import { Zap, Search, Layout, Smartphone } from 'lucide-react';

export const AXIUM_LINKS = {
  briefing: "https://axium-web.vercel.app", 
  contact: "mailto:contato@axium.studio"
};

export const STATS = [
  { label: "Projetos Entregues", value: "48+" },
  { label: "Taxa de Aprovação", value: "98%" },
  { label: "Anos de Experiência", value: "6+" },
  { label: "Faturamento Gerado", value: "R$ 2M+" },
];

export const FEATURES = [
  {
    icon: Zap,
    title: "Ultra Performance",
    description: "Sites otimizados para carregar em milissegundos. Google adora, seu cliente também."
  },
  {
    icon: Search,
    title: "SEO Nativo",
    description: "Estrutura de código preparada para ranquear no topo das buscas desde o primeiro dia."
  },
  {
    icon: Layout,
    title: "Design de Conversão",
    description: "Layouts pensados psicologicamente para guiar o visitante até o botão de compra."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Experiência perfeita em qualquer tela. Seu site não quebra no celular."
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechFlow",
    content: "A Axium transformou nossa presença digital. O site novo não só é lindo, mas dobrou nossa taxa de conversão em 2 meses."
  },
  {
    name: "Fernanda Souza",
    role: "Marketing, Beleza & Co",
    content: "Profissionalismo raro. Entregaram antes do prazo e o design ficou exatamente como imaginávamos. Recomendo de olhos fechados."
  },
  {
    name: "Ricardo Alencar",
    role: "Founder, Startup One",
    content: "A visão de negócios deles é o diferencial. Não fizeram só um site, desenharam uma ferramenta de vendas para minha startup."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva para entregar o projeto?",
    answer: "Depende da complexidade. Landing Pages levam em média 5 a 7 dias úteis. Projetos institucionais completos, de 15 a 20 dias."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com 50% de entrada para início do desenvolvimento e 50% na aprovação final/entrega. Aceitamos Pix e Cartão."
  },
  {
    question: "O site será otimizado para o Google?",
    answer: "Sim. Todos os projetos seguem as melhores práticas de SEO On-Page, garantindo estrutura correta de títulos, meta-tags e performance."
  },
  {
    question: "Tenho suporte após a entrega?",
    answer: "Com certeza. Oferecemos 30 dias de garantia para correções de bugs e suporte técnico pós-entrega."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'adsales',
    name: 'AdSales Performance',
    description: 'Landing Page de alta conversão focada em captação de leads para gestores de tráfego.',
    url: 'https://adsales-project.vercel.app/',
    image: 'https://i.imgur.com/gad1xyv.png',
    tags: ['Destaque', 'Landing Page', 'Leads'],
    featured: true
  },
  {
    id: 'nexusfit',
    name: 'Nexus Fit Studio',
    description: 'Site para studio fitness focado em agendamento local e apresentação visual.',
    url: 'https://nexusfit-project.vercel.app/',
    image: 'https://i.imgur.com/U6GpzZv.png',
    tags: ['Destaque', 'Local Business', 'Fitness'],
    featured: true
  },
  {
    id: 'silva-adv',
    name: 'Silva Advocacia',
    description: 'Design que transmite autoridade e confiança para escritório jurídico.',
    url: 'https://silvaadv-project.vercel.app/',
    image: 'https://i.imgur.com/Nqc2dI3.png',
    tags: ['Destaque', 'Legal', 'Institucional'],
    featured: true
  },
  {
    id: 'axium-web',
    name: 'Axium Web',
    description: 'Divisão especializada em sites de alta conversão.',
    url: 'https://axium-web.vercel.app',
    image: 'https://i.imgur.com/audJBq2.png',
    tags: ['Institucional', 'Agency', 'Flagship'],
    featured: true
  },
  {
    id: 'axium-ai',
    name: 'Axium AI One',
    description: 'Plataforma de inteligência artificial integrada.',
    url: 'https://axium-ai-one.vercel.app',
    image: 'https://i.imgur.com/5DqCcFT.png',
    tags: ['SaaS', 'AI', 'Product'],
    featured: true
  },
  {
    id: 'freelanew',
    name: 'FreelaNew',
    description: 'Marketplace moderno para freelancers e produtores.',
    url: 'https://freelanew.vercel.app',
    image: 'https://i.imgur.com/kCx4c5m.png',
    tags: ['Platform', 'Marketplace'],
    featured: false
  },
  {
    id: 'axium-studio',
    name: 'Axium Studio One',
    description: 'Hub central criativo e estratégico.',
    url: 'https://axium-studio-one.vercel.app',
    image: 'https://i.imgur.com/5mEVkfn.png',
    tags: ['Institucional', 'Hub'],
    featured: false
  },
  {
    id: 'newgen-ruby',
    name: 'NewGen Ruby',
    description: 'Soluções tecnológicas para próxima geração.',
    url: 'https://newgen-ruby.vercel.app',
    image: 'https://i.imgur.com/Ltq8M43.png',
    tags: ['Tech', 'Dev'],
    featured: false
  },
  {
    id: 'axifysocial',
    name: 'Axify Social',
    description: 'Ferramenta de automação e gestão social.',
    url: 'https://axifysocial.vercel.app',
    image: 'https://i.imgur.com/nUbLp5h.png',
    tags: ['SaaS', 'Social Media'],
    featured: false
  },
  {
    id: 'moneyclips',
    name: 'Money Clips 15k',
    description: 'Portal de conteúdo e mídia digital.',
    url: 'https://moneyclips15k.vercel.app',
    image: 'https://i.imgur.com/HQnw2fe.png',
    tags: ['Media', 'Content'],
    featured: false
  },
  {
    id: 'zeniptv',
    name: 'Zen IPTV',
    description: 'Landing page para serviço de streaming.',
    url: 'https://zeniptv.vercel.app',
    image: 'https://i.imgur.com/zK2iWR4.png',
    tags: ['Service', 'Sales Page'],
    featured: false
  },
  {
    id: 'maribraids',
    name: 'Mari Braids',
    description: 'Site para profissional de beleza e estética.',
    url: 'https://maribraids-tst.vercel.app',
    image: 'https://i.imgur.com/335d6fC.png',
    tags: ['Local Business', 'Beauty'],
    featured: false
  },
  {
    id: 'projeta-teste',
    name: 'Projeta Concept',
    description: 'Ambiente de validação de protótipos visuais.',
    url: 'https://projeta-teste.vercel.app',
    image: 'https://i.imgur.com/Z4rYt7U.png',
    tags: ['Concept', 'Prototype'],
    featured: false
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Briefing focado no negócio. Entendemos sua oferta, público e gargalos de venda."
  },
  {
    number: "02",
    title: "Estratégia & Estrutura",
    description: "Definimos o sitemap e a arquitetura de informação para guiar o usuário à conversão."
  },
  {
    number: "03",
    title: "Design & Build",
    description: "Visual 'clean', código limpo e performance. Sem templates genéricos quebrados."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Seu ativo digital pronto para escalar. Publicação e ajustes finais."
  }
];