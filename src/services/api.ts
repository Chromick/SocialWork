import { ApiUser } from '../types/api';

// Aula 9: uma porta de entrada só para a API. As telas não sabem a URL.
const BASE =
  process.env.EXPO_PUBLIC_API_URL ?? 'https://jsonplaceholder.typicode.com';

async function req<T>(path: string): Promise<T> {
  const resposta = await fetch(BASE + path);
  // fetch só falha sozinho se a rede cair; 404/500 a gente confere aqui
  if (resposta.status === 404) throw new Error('Não encontrado');
  if (!resposta.ok) throw new Error(`Falha ${resposta.status}`);
  return (await resposta.json()) as T;
}

export const api = {
  users: () => req<ApiUser[]>('/users'),
  user: (id: number) => req<ApiUser>(`/users/${id}`),
};
