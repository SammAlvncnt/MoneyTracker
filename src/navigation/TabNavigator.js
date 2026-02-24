import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../constants/colors';

// Import Screens
import DashboardScreen from '../screens/DashboardScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ReportScreen from '../screens/ReportScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = 'home';
              break;
            case 'History':
              iconName = 'history';
              break;
            case 'Report':
              iconName = 'bar-chart';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: { backgroundColor: colors.white, height: 60 },
        headerShown: false, // Sembunyikan header default tab navigator
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Beranda' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'Riwayat' }} />
      <Tab.Screen name="Report" component={ReportScreen} options={{ title: 'Laporan' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Pengaturan' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;