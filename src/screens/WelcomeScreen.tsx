import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { colors, radius, spacing } from '../theme/theme';

export function WelcomeScreen() {
  const router = useRouter();
  const { entrar } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>LinkedIn</Text>
        <Ionicons name="logo-linkedin" size={36} color={colors.primary} />
      </View>

      <Text style={styles.title}>Conecte-se ao seu futuro profissional</Text>
      <Text style={styles.subtitle}>
        Mockup visual do app LinkedIn — trabalho acadêmico com Expo.
      </Text>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.primaryText}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryBtn}
        onPress={() => {
          entrar('Visitante');
          router.replace('/');
        }}
      >
        <Text style={styles.secondaryText}>Continuar como visitante</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: 32,
  },
  brand: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.primary,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 34,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: 15,
    color: colors.gray,
    lineHeight: 22,
    marginBottom: 40,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: radius.pill,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '700',
  },
});
