import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { jobs } from '../data/mock';
import { colors } from '../theme/colors';

export function JobsScreen() {
  return (
    <View style={styles.container}>
      <TopBar placeholder="Pesquisar vagas" showMessage={false} />
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Vagas recomendadas</Text>
        <Text style={styles.bannerSub}>Com base no seu perfil</Text>
      </View>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar initials={item.initials} color={item.avatarColor} size={48} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.meta}>
                {item.location} · {item.type}
              </Text>
              <Text style={styles.posted}>{item.posted}</Text>
              <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        )}
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
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
  },
  bannerSub: {
    marginTop: 4,
    color: colors.gray,
    fontSize: 13,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 8,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  company: {
    fontSize: 14,
    color: colors.black,
    marginTop: 2,
  },
  meta: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 4,
  },
  posted: {
    fontSize: 12,
    color: colors.grayLight,
    marginTop: 4,
    marginBottom: 10,
  },
  btn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  btnText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
});
