import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { FeedScreen } from '../screens/FeedScreen';
import { NetworkScreen } from '../screens/NetworkScreen';
import { PostScreen } from '../screens/PostScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { JobsScreen } from '../screens/JobsScreen';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function TabBadge({ count }: { count: number }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
}

export function MainTabs() {
  return (
    <Tab.Navigator
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
          const map: Record<
            keyof MainTabParamList,
            keyof typeof Ionicons.glyphMap
          > = {
            Home: focused ? 'home' : 'home-outline',
            Network: focused ? 'people' : 'people-outline',
            Post: focused ? 'add-circle' : 'add-circle-outline',
            Notifications: focused ? 'notifications' : 'notifications-outline',
            Jobs: focused ? 'briefcase' : 'briefcase-outline',
          };

          if (route.name === 'Post') {
            return (
              <View style={styles.postIcon}>
                <Ionicons name="add" size={22} color={color} />
              </View>
            );
          }

          return (
            <View>
              <Ionicons name={map[route.name]} size={size} color={color} />
              {route.name === 'Notifications' ? <TabBadge count={17} /> : null}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} options={{ title: 'Início' }} />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{ title: 'Minha rede' }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{ title: 'Publicação', tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen name="Jobs" component={JobsScreen} options={{ title: 'Vagas' }} />
    </Tab.Navigator>
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
