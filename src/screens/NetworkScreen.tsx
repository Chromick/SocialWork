import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
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
import { invites } from '../data/mock';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

export function NetworkScreen() {
  const [tab, setTab] = useState<'amplie' | 'fique'>('amplie');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Pesquisar"
        onAvatarPress={() => navigation.navigate('Profile')}
      />

      <View style={styles.tabs}>
        <Pressable style={styles.tab} onPress={() => setTab('amplie')}>
          <Text style={[styles.tabText, tab === 'amplie' && styles.tabActive]}>
            Amplie sua rede
          </Text>
          {tab === 'amplie' ? <View style={styles.tabUnderline} /> : null}
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setTab('fique')}>
          <Text style={[styles.tabText, tab === 'fique' && styles.tabActive]}>
            Fique por dentro
          </Text>
          {tab === 'fique' ? <View style={styles.tabUnderline} /> : null}
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Pressable style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Convites (5)</Text>
            <Ionicons name="chevron-forward" size={18} color={colors.gray} />
          </Pressable>

          {invites.map((invite) => (
            <View key={invite.id} style={styles.inviteRow}>
              <View
                style={[styles.logo, { backgroundColor: invite.logoColor }]}
              >
                <Text style={styles.logoText}>{invite.logoText}</Text>
                <View style={styles.newsBadge}>
                  <Ionicons name="newspaper" size={10} color={colors.white} />
                </View>
              </View>
              <View style={styles.inviteContent}>
                <Text style={styles.inviteType}>{invite.type}</Text>
                <Text style={styles.inviteTitle}>{invite.title}</Text>
              </View>
              <Pressable style={styles.circleBtn}>
                <Ionicons name="close" size={18} color={colors.gray} />
              </Pressable>
              <Pressable style={[styles.circleBtn, styles.checkBtn]}>
                <Ionicons name="checkmark" size={18} color={colors.primary} />
              </Pressable>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <View style={styles.gameHeader}>
            <Ionicons name="mail-outline" size={16} color={colors.gray} />
            <Text style={styles.gameHint}>Selecionaram você para participar.</Text>
          </View>
          <View style={styles.gameRow}>
            <View style={styles.gameArt}>
              <View style={[styles.block, { backgroundColor: '#3B82F6' }]} />
              <View style={[styles.block, { backgroundColor: '#EF4444' }]} />
              <View style={[styles.block, { backgroundColor: '#F59E0B' }]} />
              <View style={[styles.block, { backgroundColor: '#10B981' }]} />
            </View>
            <Text style={styles.gameText}>
              <Text style={styles.bold}>Sua vez, Bruno. </Text>
              Patches é o novo jogo diário do LinkedIn.
            </Text>
            <Pressable style={styles.playBtn}>
              <Text style={styles.playText}>Jogar</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.divider} />

        <Pressable style={styles.manageRow}>
          <Text style={styles.manageText}>Gerenciar minha rede</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.gray} />
        </Pressable>

        <View style={styles.divider} />

        <View style={styles.section}>
          <View style={styles.premiumHeader}>
            <View style={styles.goldSquare}>
              <Text style={styles.goldText}>in</Text>
            </View>
            <Text style={styles.premiumLabel}>
              Premium{' '}
              <Text style={styles.premiumSub}>
                Pessoas interessadas em serviços como o seu
              </Text>
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.premiumCard}>
              <Avatar initials="?" color="#CBD5E1" size={48} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Suporte administrativo</Text>
                <Text style={styles.cardSub}>Solicitação enviada há 6 d</Text>
                <Pressable style={styles.outlineBtn}>
                  <Text style={styles.outlineBtnText}>Ver solicitação</Text>
                </Pressable>
              </View>
            </View>
            <View style={[styles.premiumCard, { opacity: 0.5 }]}>
              <Avatar initials="AB" color="#7C3AED" size={48} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Consultoria</Text>
                <Text style={styles.cardSub}>Novo interesse</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
  },
  tabText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '600',
    paddingBottom: 10,
  },
  tabActive: {
    color: colors.black,
  },
  tabUnderline: {
    height: 3,
    width: '70%',
    backgroundColor: colors.tabGreen,
    borderRadius: 2,
  },
  section: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  inviteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 18,
  },
  newsBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteContent: {
    flex: 1,
  },
  inviteType: {
    fontSize: 12,
    color: colors.gray,
  },
  inviteTitle: {
    fontSize: 13,
    color: colors.black,
    marginTop: 2,
    lineHeight: 18,
  },
  circleBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBtn: {
    borderColor: colors.primary,
  },
  divider: {
    height: 8,
    backgroundColor: colors.background,
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  gameHint: {
    fontSize: 12,
    color: colors.gray,
  },
  gameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  gameArt: {
    width: 44,
    height: 44,
    borderRadius: 6,
    backgroundColor: '#E2E8F0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    gap: 2,
  },
  block: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  gameText: {
    flex: 1,
    fontSize: 13,
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: '700',
  },
  playBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  playText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
  manageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  manageText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  premiumHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  goldSquare: {
    width: 18,
    height: 18,
    borderRadius: 3,
    backgroundColor: colors.premiumGold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#5C3B00',
  },
  premiumLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
  premiumSub: {
    fontWeight: '400',
    color: colors.gray,
  },
  premiumCard: {
    width: 280,
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  cardSub: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
    marginBottom: 10,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 6,
    alignItems: 'center',
  },
  outlineBtnText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
});
