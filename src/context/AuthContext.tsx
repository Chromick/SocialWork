import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { storage } from '../services/storage';

// Aula 8: a sessão do app vive em um estado global (Context).
// Aula 10: agora ela também é salva no aparelho, para não perder ao fechar o app.
type AuthCtx = {
  usuario: string | null;
  pronto: boolean; // true quando terminamos de ler a sessão salva
  entrar: (nome: string) => Promise<void>;
  sair: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx | null>(null);
const CHAVE = 'app:sessao';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null);
  const [pronto, setPronto] = useState(false);

  // ao abrir o app: lê a sessão salva
  useEffect(() => {
    storage
      .get<string | null>(CHAVE, null)
      .then(setUsuario)
      .finally(() => setPronto(true));
  }, []);

  async function entrar(nome: string) {
    setUsuario(nome);
    await storage.set(CHAVE, nome);
  }

  async function sair() {
    setUsuario(null);
    await storage.remove(CHAVE);
  }

  return (
    <AuthContext.Provider value={{ usuario, pronto, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
