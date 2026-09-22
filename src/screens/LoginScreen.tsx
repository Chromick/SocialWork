import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.brand}>LinkedIn</Text>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.hint}>
        Ou{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Welcome')}>
          voltar ao início
        </Text>
      </Text>

      <Text style={styles.label}>E-mail ou telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        placeholderTextColor={colors.grayLight}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        placeholderTextColor={colors.grayLight}
        secureTextEntry
      />

      <Pressable>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </Pressable>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.primaryText}>Continuar</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 72,
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 8,
  },
  hint: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 28,
  },
  link: {
    color: colors.primary,
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    color: colors.black,
  },
  forgot: {
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 24,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
