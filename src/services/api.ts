import { ApiUser } from '../types/api';
import { storage } from './storage';

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
  // Aula 10: guarda a última lista no aparelho; sem internet, mostra a salva
  users: async () => {
    try {
      const lista = await req<ApiUser[]>('/users');
      await storage.set('cache:users', lista);
      return lista;
    } catch (e) {
      const salva = await storage.get<ApiUser[] | null>('cache:users', null);
      if (salva) return salva;
      throw e;
    }
  },
  user: (id: number) => req<ApiUser>(`/users/${id}`),
};
