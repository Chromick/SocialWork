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
      <Stack.Screen name="people" options={{ headerShown: true, title: 'Pessoas' }} />
      <Stack.Screen name="user/[id]" options={{ headerShown: true, title: 'Perfil' }} />
      <Stack.Screen name="job/[id]" options={{ headerShown: true, title: 'Vaga' }} />
      <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: 'Conversa' }} />
      <Stack.Screen name="profile" options={{ headerShown: true, title: 'Eu' }} />
    </Stack>
  );
}
