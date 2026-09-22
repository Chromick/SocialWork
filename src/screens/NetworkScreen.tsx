import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { connections } from '../data/mock';
import { colors } from '../theme/colors';

export function NetworkScreen() {
  return (
    <View style={styles.container}>
      <TopBar placeholder="Pesquisar conexões" showMessage={false} />
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Gerenciar minha rede</Text>
        <Text style={styles.bannerSub}>Convites · Conexões · Seguir</Text>
      </View>
      <Text style={styles.section}>Pessoas que você talvez conheça</Text>
      <FlatList
        data={connections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar initials={item.initials} color={item.avatarColor} size={56} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.headline} numberOfLines={2}>
              {item.headline}
            </Text>
            <Text style={styles.mutual}>{item.mutual} conexões em comum</Text>
            <Pressable style={styles.connectBtn}>
              <Text style={styles.connectText}>Conectar</Text>
            </Pressable>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  banner: {
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  bannerSub: {
    marginTop: 4,
    color: colors.gray,
    fontSize: 13,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    backgroundColor: colors.white,
  },
  list: {
    padding: 8,
    backgroundColor: colors.white,
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
  headline: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'center',
    marginTop: 4,
    minHeight: 32,
  },
  mutual: {
    fontSize: 11,
    color: colors.grayLight,
    marginTop: 6,
    marginBottom: 10,
  },
  connectBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  connectText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
});
