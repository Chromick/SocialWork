import { createContext, ReactNode, useContext, useState } from 'react';

// Aula 8: a sessão do app vive em um estado global (Context).
type AuthCtx = {
  usuario: string | null;
  entrar: (nome: string) => void;
  sair: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null);

  const entrar = (nome: string) => setUsuario(nome);
  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
