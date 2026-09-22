import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { notifications } from '../data/mock';
import { colors } from '../theme/colors';

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <TopBar placeholder="Pesquisar notificações" />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[styles.row, item.unread && styles.unread]}>
            <Avatar initials={item.initials} color={item.avatarColor} size={48} />
            <View style={styles.content}>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.time}>{item.timeAgo}</Text>
            </View>
            {item.unread ? <View style={styles.dot} /> : null}
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
  list: {
    backgroundColor: colors.white,
    paddingBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  unread: {
    backgroundColor: '#EAF3FB',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: colors.black,
    lineHeight: 20,
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    color: colors.gray,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
