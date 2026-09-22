import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Avatar } from './Avatar';
import { currentUser } from '../data/mock';
import { RootStackParamList } from '../navigation/types';

type Props = {
  placeholder?: string;
  onAvatarPress?: () => void;
  showMessage?: boolean;
  showSettings?: boolean;
  badgeCount?: number;
};

export function TopBar({
  placeholder = 'Pesquisar',
  onAvatarPress,
  showMessage = true,
  showSettings = false,
  badgeCount = 1,
}: Props) {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.wrap, { paddingTop: insets.top + 6 }]}>
      <Pressable onPress={onAvatarPress}>
        <Avatar
          initials={currentUser.initials}
          color={currentUser.avatarColor}
          size={34}
        />
      </Pressable>
      <View style={styles.search}>
        <Ionicons name="search" size={16} color={colors.gray} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.grayLight}
          style={styles.input}
          editable={false}
        />
      </View>
      {showSettings ? (
        <Pressable style={styles.iconBtn}>
          <Ionicons name="settings-outline" size={22} color={colors.gray} />
        </Pressable>
      ) : null}
      {showMessage ? (
        <Pressable
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Messages')}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color={colors.gray}
          />
          {badgeCount > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badgeCount}</Text>
            </View>
          ) : null}
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    height: 36,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
    padding: 0,
  },
  iconBtn: {
    padding: 2,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -4,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.badge,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
});
