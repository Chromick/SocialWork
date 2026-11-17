import { useCallback, useEffect, useState } from 'react';
import { storage } from '../services/storage';

// Aula 10: igual ao useState, mas o valor sobrevive ao fechar o app.
export function usePersistedState<T>(chave: string, inicial: T) {
  const [valor, setValor] = useState<T>(inicial);
  const [pronto, setPronto] = useState(false);

  // hidratação: lê o valor salvo ao abrir a tela
  useEffect(() => {
    storage.get(chave, inicial).then((v) => {
      setValor(v);
      setPronto(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  const atualizar = useCallback(
    (novo: T) => {
      setValor(novo);
      storage.set(chave, novo); // grava em segundo plano
    },
    [chave],
  );

  return [valor, atualizar, pronto] as const;
}
