import { FlatList, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { PostCard } from '../components/PostCard';
import { TopBar } from '../components/TopBar';
import { posts } from '../data/mock';
import { colors } from '../theme/theme';

export function FeedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Pesquisar"
        onAvatarPress={() => router.push('/profile')}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingBottom: 24,
    paddingTop: 4,
  },
});
