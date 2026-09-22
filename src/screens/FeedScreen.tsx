import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PostCard } from '../components/PostCard';
import { TopBar } from '../components/TopBar';
import { posts } from '../data/mock';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

export function FeedScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Pesquisar"
        onAvatarPress={() => navigation.navigate('Profile')}
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
