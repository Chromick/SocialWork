import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { messages } from '../data/mock';
import { colors } from '../theme/colors';

export function MessagesScreen() {
  return (
    <View style={styles.container}>
      <TopBar placeholder="Pesquisar mensagens" showMessage={false} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Avatar initials={item.initials} color={item.avatarColor} size={52} />
            <View style={styles.content}>
              <View style={styles.top}>
                <Text style={[styles.name, item.unread && styles.bold]}>
                  {item.name}
                </Text>
                <Text style={styles.time}>{item.timeAgo}</Text>
              </View>
              <Text
                style={[styles.preview, item.unread && styles.bold]}
                numberOfLines={2}
              >
                {item.preview}
              </Text>
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
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 15,
    color: colors.black,
  },
  bold: {
    fontWeight: '700',
  },
  time: {
    fontSize: 12,
    color: colors.gray,
  },
  preview: {
    fontSize: 13,
    color: colors.gray,
    lineHeight: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
