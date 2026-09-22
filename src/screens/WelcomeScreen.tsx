import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>LinkedIn</Text>
        <Ionicons name="logo-linkedin" size={36} color={colors.primary} />
      </View>

      <Text style={styles.title}>Conecte-se ao seu futuro profissional</Text>
      <Text style={styles.subtitle}>
        Mockup visual do app LinkedIn — trabalho acadêmico com Expo.
      </Text>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.primaryText}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryBtn}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.secondaryText}>Continuar como visitante</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  brand: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.primary,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.black,
    lineHeight: 34,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: colors.gray,
    lineHeight: 22,
    marginBottom: 40,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '700',
  },
});
