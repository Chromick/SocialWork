import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { Post, certItems } from '../data/mock';
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
          <View style={styles.nameRow}>
            <Text style={styles.name}>{post.author.name}</Text>
            {post.author.premium ? (
              <View style={styles.premium}>
                <Text style={styles.premiumText}>in</Text>
              </View>
            ) : null}
            {post.author.degree ? (
              <Text style={styles.degree}> · {post.author.degree}</Text>
            ) : null}
          </View>
          <Text style={styles.headline} numberOfLines={1}>
            {post.author.headline}
          </Text>
          <Text style={styles.time}>
            {post.timeAgo} · <Ionicons name="earth" size={11} color={colors.grayLight} />
          </Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={16} color={colors.gray} />
        <Ionicons
          name="close"
          size={20}
          color={colors.gray}
          style={{ marginLeft: 8 }}
        />
      </View>

      <Text style={styles.body}>
        {post.text}
        <Text style={styles.more}>... mais</Text>
      </Text>

      {post.hasInfographic ? <CertInfographic /> : null}

      <View style={styles.stats}>
        <Text style={styles.statsText}>
          👍🎉❤️ {post.likes} · {post.comments} comentários · {post.reposts}{' '}
          compartilhamentos
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

function CertInfographic() {
  return (
    <View style={styles.infographic}>
      <View style={styles.infoTop}>
        <Text style={styles.infoBrand}>Clouding Academy</Text>
        <Text style={styles.infoGuide}>GUIA DE PREÇOS · 2026</Text>
      </View>
      <Text style={styles.infoTitle}>As certificações de cloud{'\n'}mais baratas</Text>
      <Text style={styles.infoSub}>Preço oficial do exame</Text>

      {certItems.map((item) => (
        <View key={item.n} style={styles.certRow}>
          <Text style={styles.certNum}>{item.n}</Text>
          <View style={styles.certBadge}>
            <Text style={styles.certBadgeText}>☁</Text>
          </View>
          <View style={styles.certInfo}>
            <Text style={styles.certName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.certProvider}>{item.provider}</Text>
          </View>
          <View style={styles.priceCol}>
            {item.old ? <Text style={styles.oldPrice}>{item.old}</Text> : null}
            <Text style={[styles.price, item.free && styles.freePrice]}>
              {item.price}
            </Text>
          </View>
        </View>
      ))}

      <Text style={styles.infoFooter}>Clouding Academy · clouding.academy</Text>
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
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
  premium: {
    backgroundColor: colors.premiumGold,
    borderRadius: 2,
    paddingHorizontal: 3,
    marginLeft: 4,
  },
  premiumText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#5C3B00',
  },
  degree: {
    fontSize: 12,
    color: colors.gray,
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
    paddingBottom: 10,
  },
  more: {
    color: colors.gray,
  },
  infographic: {
    marginHorizontal: 0,
    backgroundColor: '#0B1230',
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoBrand: {
    color: '#A5B4FC',
    fontSize: 11,
    fontWeight: '600',
  },
  infoGuide: {
    color: '#94A3B8',
    fontSize: 10,
  },
  infoTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },
  infoSub: {
    color: colors.premiumGold,
    fontSize: 12,
    marginTop: 6,
    marginBottom: 14,
  },
  certRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  certNum: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '700',
    width: 22,
  },
  certBadge: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  certBadgeText: {
    fontSize: 12,
  },
  certInfo: {
    flex: 1,
  },
  certName: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  certProvider: {
    color: '#94A3B8',
    fontSize: 10,
  },
  priceCol: {
    alignItems: 'flex-end',
  },
  oldPrice: {
    color: '#64748B',
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  price: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '700',
  },
  freePrice: {
    color: '#4ADE80',
  },
  infoFooter: {
    color: '#64748B',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
  },
  stats: {
    paddingHorizontal: 12,
    paddingVertical: 8,
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
