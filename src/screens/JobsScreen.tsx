import { Ionicons } from '@expo/vector-icons';
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
import { TopBar } from '../components/TopBar';
import { jobs } from '../data/mock';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';
import { Job } from '../data/mock';

export function JobsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopBar
        placeholder="Descreva a vaga que voc..."
        onAvatarPress={() => navigation.navigate('Profile')}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        {['Preferências', 'Rastreador de vagas', 'Anunciar vaga'].map(
          (chip) => (
            <Pressable key={chip} style={styles.chip}>
              <Text style={styles.chipText}>{chip}</Text>
            </Pressable>
          ),
        )}
      </ScrollView>

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.headerBlock}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                Vagas com base nas suas preferências
              </Text>
              <Pressable style={styles.editBtn}>
                <Ionicons name="pencil" size={14} color={colors.gray} />
              </Pressable>
            </View>
            <Text style={styles.subtitle} numberOfLines={2}>
              Assistente administrativo or Estagiário or Engenheiro de software
              or Desenvolvedor or ...
            </Text>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                <Text style={styles.bold}>Novidade: </Text>
                Confira vagas com base nas preferências que você definiu em
                Buscando emprego. Altere as preferências ou a visibilidade
                quando quiser.
              </Text>
              <Ionicons
                name="close"
                size={16}
                color={colors.gray}
                style={styles.infoClose}
              />
            </View>
          </View>
        }
        renderItem={({ item }) => <JobRow job={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <View style={styles.jobRow}>
      <View style={[styles.logo, { backgroundColor: job.logoColor }]}>
        <Text style={styles.logoText}>{job.logoText}</Text>
      </View>
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>
          {job.title}
          {job.verified ? ' ✓' : ''}
        </Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.location}>{job.location}</Text>
        {job.promoted ? <Text style={styles.meta}>Promovida</Text> : null}
        {job.earlyApplicant ? (
          <Text style={styles.early}>
            Seja uma das primeiras pessoas a se candidatar
          </Text>
        ) : null}
        {job.easyApply ? (
          <View style={styles.easyRow}>
            <View style={styles.inBadge}>
              <Text style={styles.inText}>in</Text>
            </View>
            <Text style={styles.easy}>Candidatura simplificada</Text>
          </View>
        ) : null}
        {job.posted ? <Text style={styles.meta}>{job.posted}</Text> : null}
      </View>
      <Ionicons name="close" size={18} color={colors.gray} />
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
  chipText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '600',
  },
  list: {
    paddingBottom: 24,
  },
  headerBlock: {
    paddingHorizontal: 14,
    paddingBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 26,
  },
  editBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    color: colors.gray,
    lineHeight: 18,
  },
  infoBox: {
    marginTop: 12,
    backgroundColor: colors.infoBox,
    borderRadius: 8,
    padding: 12,
    paddingRight: 28,
  },
  infoText: {
    fontSize: 13,
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: '700',
  },
  infoClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  jobRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 14,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 20,
  },
  company: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 2,
  },
  location: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 2,
  },
  meta: {
    fontSize: 12,
    color: colors.grayLight,
    marginTop: 4,
  },
  early: {
    fontSize: 12,
    color: colors.success,
    marginTop: 4,
    fontWeight: '600',
  },
  easyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  inBadge: {
    backgroundColor: colors.primary,
    borderRadius: 2,
    paddingHorizontal: 3,
  },
  inText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '800',
  },
  easy: {
    fontSize: 12,
    color: colors.gray,
  },
});
