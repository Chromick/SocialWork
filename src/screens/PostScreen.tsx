import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../components/Avatar';
import { currentUser } from '../data/mock';
import { colors } from '../theme/colors';
import { MainTabParamList } from '../navigation/types';

export function PostScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Ionicons name="close" size={28} color={colors.black} />
        </Pressable>
        <Pressable style={styles.userSelect}>
          <Avatar
            initials={currentUser.initials}
            color={currentUser.avatarColor}
            size={36}
          />
          <Ionicons name="caret-down" size={14} color={colors.gray} />
        </Pressable>
        <View style={styles.headerRight}>
          <Pressable style={styles.clockBtn}>
            <Ionicons name="time-outline" size={22} color={colors.gray} />
          </Pressable>
          <Pressable style={styles.publishBtn}>
            <Text style={styles.publishText}>Publicar</Text>
          </Pressable>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Compartilhe suas ideias..."
        placeholderTextColor={colors.grayLight}
        multiline
        textAlignVertical="top"
      />

      <View style={[styles.fabs, { bottom: insets.bottom + 20 }]}>
        <Pressable style={styles.fab}>
          <Ionicons name="image-outline" size={22} color={colors.gray} />
        </Pressable>
        <Pressable style={[styles.fab, styles.fabLarge]}>
          <Ionicons name="add" size={28} color={colors.gray} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  userSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  clockBtn: {
    padding: 4,
  },
  publishBtn: {
    backgroundColor: colors.publishDisabled,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  publishText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    fontSize: 18,
    color: colors.black,
  },
  fabs: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fab: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabLarge: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
});
