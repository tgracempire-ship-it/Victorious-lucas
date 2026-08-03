import { NativeModules, NativeEventEmitter, EmitterSubscription } from 'react-native';
import type { RawBankNotification } from '../types';

const { NotificationListenerModule } = NativeModules;

if (!NotificationListenerModule) {
  // Fires if android-native/NotificationListenerPackage.kt hasn't been
  // registered in MainApplication yet — see README step 3.
  console.warn(
    'NotificationListenerModule is not linked. Did you register NotificationListenerPackage in MainApplication?',
  );
}

const emitter = new NativeEventEmitter(NotificationListenerModule);

export const NotificationBridge = {
  // Whether the user has flipped the "Notification access" toggle for this
  // app in Android Settings.
  isAccessGranted(): Promise<boolean> {
    return NotificationListenerModule.isAccessGranted();
  },

  // Deep-links straight into Settings > Notification access.
  openAccessSettings(): void {
    NotificationListenerModule.openNotificationAccessSettings();
  },

  // Tells the native listener service which package names to actually parse —
  // everything else is ignored at the source, before it ever reaches JS.
  setMonitoredPackages(packages: string[]): void {
    NotificationListenerModule.setMonitoredPackages(packages);
  },

  // Anything that arrived while the JS app wasn't running gets queued
  // natively (see PendingNotificationStore.kt). Call this once on app start
  // to pull those in — otherwise a sale made while the app was closed would
  // never reach the ledger.
  drainPendingNotifications(): Promise<RawBankNotification[]> {
    return NotificationListenerModule.drainPendingNotifications();
  },

  // Live feed for while the app IS open — this is what makes the Verify
  // screen flip the instant a real alert lands, instead of waiting for a poll.
  subscribe(handler: (notification: RawBankNotification) => void): EmitterSubscription {
    return emitter.addListener('onBankNotification', handler);
  },
};
