import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function AppLayout() {
  const { usuario } = useAuth();

  // Aula 8: guarda na porta do grupo (app) — sem sessão, volta para o início
  if (!usuario) {
    return <Redirect href="/welcome" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" options={{ headerShown: true, title: 'Mensagens' }} />
      <Stack.Screen name="profile" options={{ headerShown: true, title: 'Eu' }} />
    </Stack>
  );
}
