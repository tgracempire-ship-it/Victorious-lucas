import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import BankPickerScreen from './src/screens/BankPickerScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import VerifyScreen from './src/screens/VerifyScreen';
import LedgerScreen from './src/screens/LedgerScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import { NotificationBridge } from './src/native/NotificationBridge';
import { ingestRawNotification } from './src/db/database';
import type { RootStackParamList } from './src/types';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    // Import anything the native listener caught while this JS context wasn't
    // alive (app closed, phone rebooted, etc.) — see PendingNotificationStore.kt.
    NotificationBridge.drainPendingNotifications()
      .then((pending) => Promise.all(pending.map(ingestRawNotification)))
      .catch((err) => console.warn('Failed to drain pending notifications', err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="BankPicker" component={BankPickerScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="Ledger" component={LedgerScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
