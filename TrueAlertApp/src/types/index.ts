// Navigation param list — kept here (not in App.tsx) so screens can import it
// without reaching into the app root.
export type RootStackParamList = {
  Onboarding: undefined;
  BankPicker: undefined;
  Dashboard: undefined;
  Verify: undefined;
  Ledger: undefined;
  Settings: undefined;
};

export interface MonitoredApp {
  packageName: string;
  displayName: string;
}

// What the native module hands over for every notification from a monitored app.
export interface RawBankNotification {
  packageName: string;
  title: string;
  text: string;
  postTime: number; // ms since epoch, from StatusBarNotification.postTime
}

// What we store locally once a raw notification has been parsed.
export interface Transaction {
  id: number;
  packageName: string;
  bankName: string;
  amount: number;
  senderName: string | null;
  reference: string | null;
  postTime: number;
}

export type VerifyStatus = 'idle' | 'waiting' | 'verified' | 'timeout';
