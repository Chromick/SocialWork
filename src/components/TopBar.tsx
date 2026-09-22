import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Avatar } from './Avatar';
import { currentUser } from '../data/mock';
import { RootStackParamList } from '../navigation/types';

type Props = {
  placeholder?: string;
  onAvatarPress?: () => void;
  showMessage?: boolean;
};

export function TopBar({
  placeholder = 'Pesquisar',
  onAvatarPress,
  showMessage = true,
}: Props) {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.wrap, { paddingTop: insets.top + 8 }]}>
      <Pressable onPress={onAvatarPress}>
        <Avatar
          initials={currentUser.initials}
          color={currentUser.avatarColor}
          size={36}
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#EEF3F8',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 36,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
    padding: 0,
  },
  iconBtn: {
    padding: 4,
  },
});
