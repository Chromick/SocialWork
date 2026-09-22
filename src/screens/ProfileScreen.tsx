import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { TopBar } from '../components/TopBar';
import { currentUser } from '../data/mock';
import { colors } from '../theme/colors';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <TopBar placeholder="Pesquisar" showMessage={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cover} />
        <View style={styles.card}>
          <View style={styles.avatarWrap}>
            <Avatar
              initials={currentUser.initials}
              color={currentUser.avatarColor}
              size={96}
            />
          </View>
          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.headline}>{currentUser.headline}</Text>
          <Text style={styles.location}>{currentUser.location}</Text>
          <Text style={styles.connections}>
            {currentUser.connections} conexões
          </Text>

          <View style={styles.actions}>
            <View style={styles.primaryAction}>
              <Text style={styles.primaryActionText}>Aberto a</Text>
            </View>
            <View style={styles.secondaryAction}>
              <Text style={styles.secondaryActionText}>Adicionar seção</Text>
            </View>
            <View style={styles.moreBtn}>
              <Ionicons name="ellipsis-horizontal" size={18} color={colors.gray} />
            </View>
          </View>
        </View>

        <Section title="Sobre">
          <Text style={styles.about}>
            Estudante de desenvolvimento mobile apaixonado por React Native e
            interfaces limpas. Este perfil faz parte de um mockup acadêmico do
            LinkedIn com Expo.
          </Text>
        </Section>

        <Section title="Experiência">
          <Experience
            title="Desenvolvedor Mobile"
            company="Projeto Acadêmico · SocialWork"
            period="2026 — Atual"
          />
          <Experience
            title="Estagiário de TI"
            company="Tech Local"
            period="2024 — 2025"
          />
        </Section>

        <Section title="Formação">
          <Experience
            title="Análise e Desenvolvimento de Sistemas"
            company="Faculdade"
            period="2024 — 2026"
          />
        </Section>
      </ScrollView>
    </View>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Experience({
  title,
  company,
  period,
}: {
  title: string;
  company: string;
  period: string;
}) {
  return (
    <View style={styles.exp}>
      <View style={styles.expIcon}>
        <Ionicons name="business" size={20} color={colors.gray} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.expTitle}>{title}</Text>
        <Text style={styles.expCompany}>{company}</Text>
        <Text style={styles.expPeriod}>{period}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  cover: {
    height: 100,
    backgroundColor: '#A0B4C8',
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 8,
  },
  avatarWrap: {
    marginTop: -48,
    marginBottom: 8,
    alignSelf: 'flex-start',
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 52,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
  },
  headline: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
  location: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 6,
  },
  connections: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '700',
    marginTop: 6,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
    alignItems: 'center',
  },
  primaryAction: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  primaryActionText: {
    color: colors.white,
    fontWeight: '700',
  },
  secondaryAction: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  secondaryActionText: {
    color: colors.primary,
    fontWeight: '700',
  },
  moreBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  about: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
  exp: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  expIcon: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
  },
  expCompany: {
    fontSize: 13,
    color: colors.black,
    marginTop: 2,
  },
  expPeriod: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
});
