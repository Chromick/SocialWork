import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { notifications, Notification } from '../data/mock';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

const filters = ['Todas', 'Vagas', 'Publicações', 'Menções'];

export function NotificationsScreen() {
  const [active, setActive] = useState('Todas');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Pesquisar"
        showSettings
        onAvatarPress={() => navigation.navigate('Profile')}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <Pressable
              key={filter}
              style={[styles.chip, selected && styles.chipActive]}
              onPress={() => setActive(filter)}
            >
              <Text style={[styles.chipText, selected && styles.chipTextActive]}>
                {filter}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationRow item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function NotificationRow({ item }: { item: Notification }) {
  return (
    <View style={[styles.row, item.unread && styles.unread]}>
      {item.unread ? <View style={styles.dot} /> : <View style={styles.dotSpacer} />}
      <Avatar initials={item.initials} color={item.avatarColor} size={48} />
      <View style={styles.content}>
        <Text style={styles.text}>
          {item.textParts.map((part, index) => (
            <Text key={index} style={part.bold ? styles.bold : undefined}>
              {part.text}
            </Text>
          ))}
        </Text>
        {item.subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>
        ) : null}
        {item.mutual ? (
          <View style={styles.mutualRow}>
            <Ionicons name="people-circle-outline" size={14} color={colors.gray} />
            <Text style={styles.mutual}>{item.mutual}</Text>
          </View>
        ) : null}
        {item.kind === 'premium' ? (
          <View style={styles.premiumBlock}>
            <Pressable style={styles.premiumBtn}>
              <Text style={styles.premiumBtnText}>
                Experimente Premium por R$ 0
              </Text>
            </Pressable>
            <Text style={styles.premiumFine}>
              Grátis por 1 mês. Fácil de cancelar. Sem multas ou taxas.
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.right}>
        <Text style={styles.time}>{item.timeAgo}</Text>
        <Ionicons name="ellipsis-vertical" size={14} color={colors.gray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chips: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginRight: 4,
  },
  chipActive: {
    backgroundColor: colors.chipGreen,
    borderColor: colors.chipGreen,
  },
  chipText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '600',
  },
  chipTextActive: {
    color: colors.white,
  },
  list: {
    paddingBottom: 24,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  unread: {
    backgroundColor: colors.unreadBg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginTop: 20,
  },
  dotSpacer: {
    width: 8,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 13,
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: colors.gray,
  },
  mutualRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  mutual: {
    fontSize: 12,
    color: colors.gray,
  },
  premiumBlock: {
    marginTop: 10,
  },
  premiumBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  premiumBtnText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  premiumFine: {
    marginTop: 6,
    fontSize: 11,
    color: colors.grayLight,
  },
  right: {
    alignItems: 'flex-end',
    gap: 8,
  },
  time: {
    fontSize: 12,
    color: colors.gray,
  },
});
