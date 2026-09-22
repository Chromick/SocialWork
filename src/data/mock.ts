export type User = {
  id: string;
  name: string;
  headline: string;
  location: string;
  avatarColor: string;
  initials: string;
  connections: number;
  premium?: boolean;
  degree?: string;
};

export type Post = {
  id: string;
  author: User;
  timeAgo: string;
  text: string;
  likes: string;
  comments: number;
  reposts: number;
  hasInfographic?: boolean;
};

export type Invite = {
  id: string;
  type: string;
  title: string;
  logoText: string;
  logoColor: string;
};

export type Notification = {
  id: string;
  kind: 'suggest' | 'comment' | 'share' | 'premium' | 'hiring';
  textParts: { bold?: boolean; text: string }[];
  subtitle?: string;
  mutual?: string;
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
  posted?: string;
  logoText: string;
  logoColor: string;
  promoted?: boolean;
  earlyApplicant?: boolean;
  easyApply?: boolean;
  verified?: boolean;
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

export const currentUser: User = {
  id: 'me',
  name: 'Bruno Silva',
  headline: 'Desenvolvedor Mobile | React Native & Expo',
  location: 'São Paulo, Brasil',
  avatarColor: '#8B1E3F',
  initials: 'BS',
  connections: 348,
};

export const posts: Post[] = [
  {
    id: 'p1',
    author: {
      id: '1',
      name: 'Brendo Nunes',
      headline: 'Cloud Engineer | Serverless Obsessed...',
      location: 'Brasil',
      avatarColor: '#1E3A5F',
      initials: 'BN',
      connections: 1200,
      premium: true,
      degree: '3º e +',
    },
    timeAgo: '21 h',
    text: '🛑 AS CERTIFICAÇÕES DE CLOUD MAIS BARATAS 🛑\n💸 GUIA DE PREÇOS 2026 💸',
    likes: '1.2 mil',
    comments: 22,
    reposts: 111,
    hasInfographic: true,
  },
  {
    id: 'p2',
    author: {
      id: '2',
      name: 'Ana Costa',
      headline: 'Product Designer @ TechBrasil',
      location: 'Rio de Janeiro, Brasil',
      avatarColor: '#7C3AED',
      initials: 'AC',
      connections: 890,
      degree: '2º',
    },
    timeAgo: '5 h',
    text: 'Acabei de publicar um case study sobre redesign de onboarding mobile. Feedbacks são bem-vindos!',
    likes: '128',
    comments: 24,
    reposts: 9,
  },
];

export const invites: Invite[] = [
  {
    id: 'i1',
    type: 'Newsletter • mensal',
    title: 'Unimed convidou você para assinar Unimed: Voz e Ação',
    logoText: 'U',
    logoColor: '#00995D',
  },
  {
    id: 'i2',
    type: 'Newsletter • mensal',
    title: 'Foursys convidou você para assinar Artigos Foursys',
    logoText: 'f',
    logoColor: '#1B2A4A',
  },
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    kind: 'suggest',
    textParts: [
      { text: 'Talvez você conheça ' },
      { bold: true, text: 'Thalles Cruz do Nascimento' },
      { text: '. Adicione essa pessoa à sua rede.' },
    ],
    subtitle: 'FullStack Developer | Java, Spring...',
    mutual: '9 conexões em comum',
    timeAgo: '2 d',
    initials: 'TC',
    avatarColor: '#9CA3AF',
    unread: true,
  },
  {
    id: 'n2',
    kind: 'comment',
    textParts: [
      { bold: true, text: 'Lucas Marins' },
      { text: ' comentou a publicação de ' },
      { bold: true, text: 'Verônica Freire' },
      { text: ': Busco vagas como Desenvolvedor Back-e...' },
    ],
    timeAgo: '1 h',
    initials: 'LM',
    avatarColor: '#2563EB',
    unread: true,
  },
  {
    id: 'n3',
    kind: 'share',
    textParts: [
      { bold: true, text: 'Lucas Marins' },
      { text: ' compartilhou a publicação: Code Review 😂 de ' },
      { bold: true, text: 'Márcia Agostinho' },
    ],
    timeAgo: '16 h',
    initials: 'LM',
    avatarColor: '#2563EB',
    unread: true,
  },
  {
    id: 'n4',
    kind: 'premium',
    textParts: [
      { text: 'Seu perfil foi exibido em ' },
      { bold: true, text: '3 pesquisas' },
      { text: ' esta semana. Saiba mais com uma conta Premium.' },
    ],
    timeAgo: '1 d',
    initials: 'in',
    avatarColor: '#0A66C2',
    unread: true,
  },
  {
    id: 'n5',
    kind: 'hiring',
    textParts: [
      { bold: true, text: 'Richarle Amaral' },
      { text: ' tem uma conexão que está contratando para uma vaga de ' },
      { bold: true, text: 'Banco de Talentos - Gerente de ...' },
    ],
    timeAgo: '2 d',
    initials: 'RA',
    avatarColor: '#059669',
    unread: false,
  },
];

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Estágio em Desenvolvimento de Sistemas - Presencial Niterói RJ',
    company: "talent's club",
    location: 'Niterói, RJ (Presencial)',
    posted: 'há 2 semanas',
    logoText: 'tc',
    logoColor: '#DC2626',
  },
  {
    id: 'j2',
    title: 'Python Developer (Junior) - Remote Work',
    company: 'INDI Staffing Services',
    location: 'Duque de Caxias, RJ (Remoto)',
    logoText: 'IN',
    logoColor: '#1D4ED8',
    promoted: true,
    earlyApplicant: true,
    easyApply: true,
  },
  {
    id: 'j3',
    title: 'Desenvolvedor Júnior',
    company: 'Jobbol',
    location: 'Rio de Janeiro, RJ (Remoto)',
    posted: 'há 2 dias',
    logoText: 'J',
    logoColor: '#1E3A5F',
    verified: true,
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
];

export const certItems = [
  { n: '01', name: 'AWS Cloud Practitioner (CLF-C02)', provider: 'Amazon Web Services', price: 'grátis', free: true },
  { n: '02', name: 'Oracle Cloud Infrastructure Foundations', provider: 'Oracle', price: 'grátis', free: true },
  { n: '03', name: 'Azure Fundamentals (AZ-900)', provider: 'Microsoft', price: 'US$ 50', old: 'US$ 99' },
  { n: '04', name: 'Google Cloud Digital Leader', provider: 'Google Cloud', price: 'US$ 50', old: 'US$ 99' },
  { n: '05', name: 'AWS AI Practitioner', provider: 'Amazon Web Services', price: 'US$ 50', old: 'US$ 100' },
];
