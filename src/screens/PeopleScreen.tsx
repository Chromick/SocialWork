import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar } from '../components/Avatar';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';
import { colors, radius, spacing } from '../theme/theme';

const cores = ['#0A66C2', '#7C3AED', '#057642', '#B45309', '#BE185D'];

export function PeopleScreen() {
  const router = useRouter();
  const { dados, loading, erro, recarregar } = useFetch(api.users);
  const [refreshing, setRefreshing] = useState(false);

  // Os 4 estados da tela: carregando -> erro -> vazio -> sucesso
  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.center}>
        <Text style={styles.msg}>Ops: {erro}</Text>
        <Pressable style={styles.btn} onPress={recarregar}>
          <Text style={styles.btnText}>Tentar de novo</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={dados ?? []}
      keyExtractor={(u) => String(u.id)}
      refreshing={refreshing}
      onRefresh={async () => {
        setRefreshing(true);
        await recarregar();
        setRefreshing(false);
      }}
      ListEmptyComponent={<Text style={styles.msg}>Nenhuma pessoa por aqui.</Text>}
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() =>
            router.push({ pathname: '/user/[id]', params: { id: String(item.id) } })
          }
        >
          <Avatar
            initials={item.name.slice(0, 2).toUpperCase()}
            color={cores[item.id % cores.length]}
            size={48}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>{item.company.name}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: colors.white },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: spacing.lg,
    gap: spacing.md,
  },
  msg: { fontSize: 15, color: colors.gray, textAlign: 'center', padding: spacing.md },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
  },
  btnText: { color: colors.white, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: colors.black },
  sub: { fontSize: 13, color: colors.gray, marginTop: 2 },
});
