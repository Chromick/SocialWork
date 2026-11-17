import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { messages } from '../data/mock';
import { colors, radius, spacing } from '../theme/theme';

type Balao = { id: string; texto: string; minha: boolean };

export function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const conversa = messages.find((m) => m.id === id);
  const [texto, setTexto] = useState('');
  // Aula 10: a conversa fica salva no aparelho, uma chave por contato
  const [baloes, setBaloes] = usePersistedState<Balao[]>(
    `chat:${id}`,
    conversa ? [{ id: '0', texto: conversa.preview, minha: false }] : [],
  );

  if (!conversa) {
    return (
      <View style={styles.center}>
        <Text style={styles.msg}>Conversa não encontrada.</Text>
      </View>
    );
  }

  function enviar() {
    if (!texto.trim()) return;
    setBaloes([...baloes, { id: String(Date.now()), texto: texto.trim(), minha: true }]);
    setTexto('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <Stack.Screen options={{ title: conversa.name }} />
      <FlatList
        data={baloes}
        keyExtractor={(b) => b.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[styles.balao, item.minha ? styles.minha : styles.dele]}>
            <Text style={item.minha ? styles.textoMinha : styles.textoDele}>
              {item.texto}
            </Text>
          </View>
        )}
      />
      <View style={styles.barra}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Escreva uma mensagem..."
          placeholderTextColor={colors.grayLight}
        />
        <Pressable style={styles.enviar} onPress={enviar}>
          <Text style={styles.enviarText}>Enviar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  msg: { fontSize: 15, color: colors.gray },
  list: { padding: spacing.md, gap: spacing.sm },
  balao: {
    maxWidth: '80%',
    padding: spacing.sm + 4,
    borderRadius: radius.card,
  },
  dele: { alignSelf: 'flex-start', backgroundColor: colors.white },
  minha: { alignSelf: 'flex-end', backgroundColor: colors.primary },
  textoDele: { color: colors.black, fontSize: 15 },
  textoMinha: { color: colors.white, fontSize: 15 },
  barra: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: 15,
    color: colors.black,
  },
  enviar: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
  },
  enviarText: { color: colors.white, fontWeight: '700' },
});
