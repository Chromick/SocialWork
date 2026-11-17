import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { jobs } from '../data/mock';
import { usePersistedState } from '../hooks/usePersistedState';
import { colors, radius, spacing } from '../theme/theme';

export function JobDetailScreen() {
  // Aula 8: o id da rota chega como texto
  const { id } = useLocalSearchParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);
  const [candidaturas, setCandidaturas] = usePersistedState<string[]>(
    'app:candidaturas',
    [],
  );

  if (!job) {
    return (
      <View style={styles.center}>
        <Text style={styles.msg}>Vaga não encontrada.</Text>
      </View>
    );
  }

  const candidatado = candidaturas.includes(job.id);

  function alternarCandidatura() {
    if (!job) return;
    setCandidaturas(
      candidatado
        ? candidaturas.filter((c) => c !== job.id)
        : [...candidaturas, job.id],
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={[styles.logo, { backgroundColor: job.logoColor }]}>
        <Text style={styles.logoText}>{job.logoText}</Text>
      </View>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      {job.posted ? <Text style={styles.meta}>Publicada {job.posted}</Text> : null}

      <Pressable
        style={[styles.btn, candidatado && styles.btnDone]}
        onPress={alternarCandidatura}
      >
        <Text style={[styles.btnText, candidatado && styles.btnTextDone]}>
          {candidatado ? 'Candidatura enviada ✓' : 'Candidatar-se'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { padding: spacing.lg, gap: spacing.sm },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  msg: { fontSize: 15, color: colors.gray },
  logo: {
    width: 64,
    height: 64,
    borderRadius: radius.card / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  logoText: { color: colors.white, fontSize: 22, fontWeight: '800' },
  title: { fontSize: 22, fontWeight: '700', color: colors.black },
  company: { fontSize: 16, color: colors.black },
  location: { fontSize: 14, color: colors.gray },
  meta: { fontSize: 13, color: colors.grayLight },
  btn: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.md - 2,
    alignItems: 'center',
  },
  btnDone: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.success },
  btnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
  btnTextDone: { color: colors.success },
});
