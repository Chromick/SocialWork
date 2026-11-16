import AsyncStorage from '@react-native-async-storage/async-storage';

// Aula 10: o AsyncStorage só guarda texto, então o JSON fica escondido aqui.
export const storage = {
  async get<T>(chave: string, padrao: T): Promise<T> {
    try {
      const bruto = await AsyncStorage.getItem(chave);
      return bruto ? (JSON.parse(bruto) as T) : padrao;
    } catch {
      return padrao; // dado corrompido? usa o padrão
    }
  },
  async set<T>(chave: string, valor: T) {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  },
  remove: (chave: string) => AsyncStorage.removeItem(chave),
};
