import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/colors';
import { FeedScreen } from '../screens/FeedScreen';
import { NetworkScreen } from '../screens/NetworkScreen';
import { PostScreen } from '../screens/PostScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { JobsScreen } from '../screens/JobsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

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
          height: 58,
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
            Profile: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={map[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} options={{ title: 'Início' }} />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{ title: 'Minha rede' }}
      />
      <Tab.Screen name="Post" component={PostScreen} options={{ title: 'Publicar' }} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen name="Jobs" component={JobsScreen} options={{ title: 'Vagas' }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Eu' }}
      />
    </Tab.Navigator>
  );
}
