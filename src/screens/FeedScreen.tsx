import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { PostCard } from '../components/PostCard';
import { TopBar } from '../components/TopBar';
import { posts } from '../data/mock';
import { colors } from '../theme/colors';
import { MainTabParamList } from '../navigation/types';

export function FeedScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Pesquisar"
        onAvatarPress={() => navigation.navigate('Profile')}
      />
      <Pressable
        style={styles.startPost}
        onPress={() => navigation.navigate('Post')}
      >
        <Text style={styles.startPostText}>Começar uma publicação</Text>
      </Pressable>
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
  startPost: {
    backgroundColor: colors.white,
    marginBottom: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  startPostText: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '600',
  },
  list: {
    paddingBottom: 24,
  },
});
