export type MainTabParamList = {
  Home: undefined;
  Network: undefined;
  Post: undefined;
  Notifications: undefined;
  Jobs: undefined;
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Main: { screen?: keyof MainTabParamList } | undefined;
  Messages: undefined;
  Profile: undefined;
};
