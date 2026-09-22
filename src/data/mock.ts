export type User = {
  id: string;
  name: string;
  headline: string;
  location: string;
  avatarColor: string;
  initials: string;
  connections: number;
};

export type Post = {
  id: string;
  author: User;
  timeAgo: string;
  text: string;
  likes: number;
  comments: number;
  reposts: number;
};

export type Connection = {
  id: string;
  name: string;
  headline: string;
  initials: string;
  avatarColor: string;
  mutual: number;
};

export type Notification = {
  id: string;
  text: string;
  timeAgo: string;
  initials: string;
  avatarColor: string;
  unread: boolean;
};

export type Message = {
  id: string;
  name: string;
  preview: string;
  timeAgo: string;
  initials: string;
  avatarColor: string;
  unread: boolean;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  initials: string;
  avatarColor: string;
};

export const currentUser: User = {
  id: 'me',
  name: 'Bruno Silva',
  headline: 'Desenvolvedor Mobile | React Native & Expo',
  location: 'São Paulo, Brasil',
  avatarColor: '#0A66C2',
  initials: 'BS',
  connections: 348,
};

export const users: User[] = [
  {
    id: '1',
    name: 'Ana Costa',
    headline: 'Product Designer @ TechBrasil',
    location: 'Rio de Janeiro, Brasil',
    avatarColor: '#7C3AED',
    initials: 'AC',
    connections: 890,
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    headline: 'Engenheiro de Software Sênior',
    location: 'Curitiba, Brasil',
    avatarColor: '#059669',
    initials: 'CM',
    connections: 1204,
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    headline: 'Recrutadora Tech | Talent Acquisition',
    location: 'Belo Horizonte, Brasil',
    avatarColor: '#DB2777',
    initials: 'FL',
    connections: 2100,
  },
  {
    id: '4',
    name: 'Pedro Alves',
    headline: 'Founder @ StartupLab',
    location: 'Florianópolis, Brasil',
    avatarColor: '#EA580C',
    initials: 'PA',
    connections: 560,
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    author: users[0],
    timeAgo: '2 h',
    text: 'Acabei de publicar um case study sobre redesign de onboarding mobile. Feedbacks são bem-vindos! 🚀',
    likes: 128,
    comments: 24,
    reposts: 9,
  },
  {
    id: 'p2',
    author: users[1],
    timeAgo: '5 h',
    text: 'Dica rápida: Componentes bem tipados no React Native economizam horas de debug. TypeScript vale cada minuto investido.',
    likes: 342,
    comments: 51,
    reposts: 67,
  },
  {
    id: 'p3',
    author: users[3],
    timeAgo: '1 d',
    text: 'Estamos contratando desenvolvedores júnior para o time de produto. Se conhece alguém, indique!',
    likes: 89,
    comments: 33,
    reposts: 12,
  },
  {
    id: 'p4',
    author: users[2],
    timeAgo: '2 d',
    text: 'Participei de um evento incrível sobre carreira em tecnologia. Networking muda tudo.',
    likes: 210,
    comments: 18,
    reposts: 5,
  },
];

export const connections: Connection[] = [
  {
    id: 'c1',
    name: 'Juliana Rocha',
    headline: 'UX Writer | Conteúdo Digital',
    initials: 'JR',
    avatarColor: '#0891B2',
    mutual: 12,
  },
  {
    id: 'c2',
    name: 'Rafael Souza',
    headline: 'Full Stack Developer',
    initials: 'RS',
    avatarColor: '#4F46E5',
    mutual: 8,
  },
  {
    id: 'c3',
    name: 'Mariana Dias',
    headline: 'Analista de Dados',
    initials: 'MD',
    avatarColor: '#BE185D',
    mutual: 21,
  },
  {
    id: 'c4',
    name: 'Lucas Ferreira',
    headline: 'DevOps Engineer',
    initials: 'LF',
    avatarColor: '#0F766E',
    mutual: 4,
  },
  {
    id: 'c5',
    name: 'Beatriz Nunes',
    headline: 'Marketing Digital',
    initials: 'BN',
    avatarColor: '#C2410C',
    mutual: 15,
  },
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    text: 'Ana Costa e outras 14 pessoas reagiram à sua publicação.',
    timeAgo: '1 h',
    initials: 'AC',
    avatarColor: '#7C3AED',
    unread: true,
  },
  {
    id: 'n2',
    text: 'Fernanda Lima visualizou seu perfil.',
    timeAgo: '3 h',
    initials: 'FL',
    avatarColor: '#DB2777',
    unread: true,
  },
  {
    id: 'n3',
    text: 'Carlos Mendes aceitou seu convite de conexão.',
    timeAgo: '1 d',
    initials: 'CM',
    avatarColor: '#059669',
    unread: false,
  },
  {
    id: 'n4',
    text: 'Nova vaga que pode te interessar: Desenvolvedor React Native.',
    timeAgo: '2 d',
    initials: 'JB',
    avatarColor: '#0A66C2',
    unread: false,
  },
  {
    id: 'n5',
    text: 'Pedro Alves comentou na sua publicação.',
    timeAgo: '3 d',
    initials: 'PA',
    avatarColor: '#EA580C',
    unread: false,
  },
];

export const messages: Message[] = [
  {
    id: 'm1',
    name: 'Fernanda Lima',
    preview: 'Oi Bruno! Vi seu perfil e gostaria de conversar sobre uma oportunidade...',
    timeAgo: '10 min',
    initials: 'FL',
    avatarColor: '#DB2777',
    unread: true,
  },
  {
    id: 'm2',
    name: 'Carlos Mendes',
    preview: 'Valeu pela dica do TypeScript, funcionou perfeito!',
    timeAgo: '2 h',
    initials: 'CM',
    avatarColor: '#059669',
    unread: true,
  },
  {
    id: 'm3',
    name: 'Ana Costa',
    preview: 'Podemos marcar um call na sexta?',
    timeAgo: '1 d',
    initials: 'AC',
    avatarColor: '#7C3AED',
    unread: false,
  },
  {
    id: 'm4',
    name: 'Pedro Alves',
    preview: 'Manda o link do repositório quando puder.',
    timeAgo: '3 d',
    initials: 'PA',
    avatarColor: '#EA580C',
    unread: false,
  },
];

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Desenvolvedor React Native',
    company: 'TechBrasil',
    location: 'São Paulo, SP (Híbrido)',
    type: 'Tempo integral',
    posted: 'Há 2 dias',
    initials: 'TB',
    avatarColor: '#0A66C2',
  },
  {
    id: 'j2',
    title: 'Mobile Engineer',
    company: 'StartupLab',
    location: 'Remoto',
    type: 'Tempo integral',
    posted: 'Há 5 dias',
    initials: 'SL',
    avatarColor: '#EA580C',
  },
  {
    id: 'j3',
    title: 'Estágio em Desenvolvimento',
    company: 'Inova Soft',
    location: 'Campinas, SP',
    type: 'Estágio',
    posted: 'Há 1 semana',
    initials: 'IS',
    avatarColor: '#059669',
  },
  {
    id: 'j4',
    title: 'Frontend Developer',
    company: 'Digital Hub',
    location: 'Rio de Janeiro, RJ',
    type: 'Tempo integral',
    posted: 'Há 2 semanas',
    initials: 'DH',
    avatarColor: '#7C3AED',
  },
];
