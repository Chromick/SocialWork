import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" options={{ headerShown: true, title: 'Mensagens' }} />
      <Stack.Screen name="profile" options={{ headerShown: true, title: 'Eu' }} />
    </Stack>
  );
}
