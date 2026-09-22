import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { Post } from '../data/mock';
import { Avatar } from './Avatar';

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Avatar
          initials={post.author.initials}
          color={post.author.avatarColor}
          size={48}
        />
        <View style={styles.meta}>
          <Text style={styles.name}>{post.author.name}</Text>
          <Text style={styles.headline} numberOfLines={1}>
            {post.author.headline}
          </Text>
          <Text style={styles.time}>{post.timeAgo} · 🌐</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={18} color={colors.gray} />
      </View>

      <Text style={styles.body}>{post.text}</Text>

      <View style={styles.stats}>
        <Text style={styles.statsText}>
          👍❤️ {post.likes} · {post.comments} comentários · {post.reposts} compartilhamentos
        </Text>
      </View>

      <View style={styles.actions}>
        <Action icon="thumbs-up-outline" label="Gostei" />
        <Action icon="chatbubble-outline" label="Comentar" />
        <Action icon="repeat-outline" label="Compartilhar" />
        <Action icon="paper-plane-outline" label="Enviar" />
      </View>
    </View>
  );
}

function Action({
  icon,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}) {
  return (
    <Pressable style={styles.action}>
      <Ionicons name={icon} size={18} color={colors.gray} />
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 8,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    gap: 10,
  },
  meta: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.black,
  },
  headline: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 1,
  },
  time: {
    fontSize: 12,
    color: colors.grayLight,
    marginTop: 2,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
  },
  stats: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  statsText: {
    fontSize: 12,
    color: colors.gray,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  action: {
    alignItems: 'center',
    gap: 2,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  actionLabel: {
    fontSize: 11,
    color: colors.gray,
    fontWeight: '600',
  },
});
