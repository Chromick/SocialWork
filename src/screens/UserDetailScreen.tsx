import { useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { colors, radius, spacing } from '../theme/theme';

export function UserDetailScreen() {
  // Parâmetros da rota chegam como texto: convertemos com Number()
  const { id } = useLocalSearchParams<{ id: string }>();
  const buscar = useCallback(() => api.user(Number(id)), [id]);
  const { dados: user, loading, erro, recarregar } = useFetch(buscar);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (erro || !user) {
    return (
      <View style={styles.center}>
        <Text style={styles.msg}>Ops: {erro ?? 'Pessoa não encontrada'}</Text>
        <Pressable style={styles.btn} onPress={recarregar}>
          <Text style={styles.btnText}>Tentar de novo</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Avatar initials={user.name.slice(0, 2).toUpperCase()} color={colors.primary} size={96} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.sub}>{user.company.name}</Text>
      <Text style={styles.sub}>{user.address.city}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.xl,
    gap: spacing.sm,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: spacing.lg,
    gap: spacing.md,
  },
  name: { fontSize: 24, fontWeight: '700', color: colors.black, marginTop: spacing.md },
  sub: { fontSize: 15, color: colors.gray },
  email: { fontSize: 15, color: colors.primary, marginTop: spacing.sm },
  msg: { fontSize: 15, color: colors.gray, textAlign: 'center' },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
  },
  btnText: { color: colors.white, fontWeight: '700' },
});
