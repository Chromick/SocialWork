import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '../context/AuthContext';

// Aula 10: segura a splash enquanto o app lê a sessão salva
SplashScreen.preventAutoHideAsync();

function Navegacao() {
  const { pronto } = useAuth();

  useEffect(() => {
    if (pronto) SplashScreen.hideAsync();
  }, [pronto]);

  if (!pronto) return null; // splash continua visível

  return <Stack screenOptions={{ headerShown: false }} />;
}

// Aula 8: o _layout.tsx da raiz é a "moldura" do app. Aqui fica o Stack.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AuthProvider>
        <Navegacao />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
