import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../components/Avatar';
import { currentUser } from '../data/mock';
import { colors } from '../theme/colors';

export function PostScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.cancel}>Cancelar</Text>
        <Text style={styles.title}>Criar publicação</Text>
        <Pressable style={styles.postBtn}>
          <Text style={styles.postBtnText}>Publicar</Text>
        </Pressable>
      </View>

      <View style={styles.author}>
        <Avatar
          initials={currentUser.initials}
          color={currentUser.avatarColor}
          size={48}
        />
        <View>
          <Text style={styles.name}>{currentUser.name}</Text>
          <View style={styles.audience}>
            <Ionicons name="earth" size={14} color={colors.gray} />
            <Text style={styles.audienceText}>Qualquer pessoa</Text>
            <Ionicons name="caret-down" size={14} color={colors.gray} />
          </View>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Sobre o que você quer falar?"
        placeholderTextColor={colors.grayLight}
        multiline
        textAlignVertical="top"
      />

      <View style={styles.toolbar}>
        <Tool icon="image-outline" label="Mídia" />
        <Tool icon="calendar-outline" label="Evento" />
        <Tool icon="briefcase-outline" label="Vaga" />
        <Tool icon="document-text-outline" label="Artigo" />
      </View>
    </View>
  );
}

function Tool({
  icon,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}) {
  return (
    <Pressable style={styles.tool}>
      <Ionicons name={icon} size={22} color={colors.gray} />
      <Text style={styles.toolLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  cancel: {
    color: colors.gray,
    fontSize: 15,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.black,
  },
  postBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  postBtnText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
  author: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    alignItems: 'center',
  },
  name: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
  },
  audience: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  audienceText: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 18,
    color: colors.black,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    paddingVertical: 14,
    paddingBottom: 28,
  },
  tool: {
    alignItems: 'center',
    gap: 4,
  },
  toolLabel: {
    fontSize: 11,
    color: colors.gray,
  },
});
