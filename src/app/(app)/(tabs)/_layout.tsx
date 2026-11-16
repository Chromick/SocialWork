import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../theme/theme';

function TabBadge({ count }: { count: number }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 6,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size, focused }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: focused ? 'home' : 'home-outline',
            network: focused ? 'people' : 'people-outline',
            post: focused ? 'add-circle' : 'add-circle-outline',
            notifications: focused ? 'notifications' : 'notifications-outline',
            jobs: focused ? 'briefcase' : 'briefcase-outline',
          };

          if (route.name === 'post') {
            return (
              <View style={styles.postIcon}>
                <Ionicons name="add" size={22} color={color} />
              </View>
            );
          }

          return (
            <View>
              <Ionicons name={map[route.name]} size={size} color={color} />
              {route.name === 'notifications' ? <TabBadge count={17} /> : null}
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen
        name="network"
        options={{ title: 'Minha rede' }}
      />
      <Tabs.Screen
        name="post"
        options={{ title: 'Publicação', tabBarStyle: { display: 'none' } }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: 'Notificações' }}
      />
      <Tabs.Screen name="jobs" options={{ title: 'Vagas' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -10,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.badge,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
  },
  postIcon: {
    width: 26,
    height: 26,
    borderWidth: 1.5,
    borderColor: colors.gray,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
