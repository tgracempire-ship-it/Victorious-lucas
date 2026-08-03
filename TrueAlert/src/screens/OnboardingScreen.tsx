import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AppState } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import { NotificationBridge } from '../native/NotificationBridge';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  const [checking, setChecking] = useState(false);

  // Re-checks permission status whenever this screen regains focus — covers
  // the case where the user granted access in Settings and switched back.
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      const check = async () => {
        const granted = await NotificationBridge.isAccessGranted();
        if (!cancelled && granted) navigation.replace('BankPicker');
      };
      check();
      const sub = AppState.addEventListener('change', (state) => {
        if (state === 'active') check();
      });
      return () => {
        cancelled = true;
        sub.remove();
      };
    }, [navigation]),
  );

  const handleGrant = async () => {
    setChecking(true);
    NotificationBridge.openAccessSettings();
  };

  return (
    <View style={styles.container}>
      <View style={styles.sealPreview}>
        <Text style={styles.sealPreviewText}>✓</Text>
      </View>

      <Text style={styles.title}>Know the moment it's real</Text>
      <Text style={styles.body}>
        TrueAlert checks a buyer's claim against the actual alert from your bank — not a screenshot.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Why we ask for notification access</Text>
        <Text style={styles.cardBody}>
          We only ever read alerts from the banking apps you choose in the next step. Nothing is uploaded —
          every match happens on this phone.
        </Text>
      </View>

      <TouchableOpacity style={styles.cta} onPress={handleGrant} disabled={checking}>
        <Text style={styles.ctaText}>{checking ? 'Waiting for you in Settings…' : 'Grant notification access'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing(6), justifyContent: 'center' },
  sealPreview: {
    width: 72, height: 72, borderRadius: radius.full,
    borderWidth: 3, borderColor: colors.brand, alignItems: 'center', justifyContent: 'center',
    marginBottom: spacing(6), alignSelf: 'center',
  },
  sealPreviewText: { color: colors.brand, fontSize: 28, fontWeight: fontWeight.display },
  title: {
    color: colors.textPrimary, fontSize: 26, fontWeight: fontWeight.display,
    textAlign: 'center', marginBottom: spacing(3),
  },
  body: { color: colors.textSecondary, fontSize: 15, textAlign: 'center', lineHeight: 21, marginBottom: spacing(8) },
  card: {
    backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1,
    borderColor: colors.border, padding: spacing(5), marginBottom: spacing(8),
  },
  cardTitle: { color: colors.textPrimary, fontSize: 14, fontWeight: fontWeight.semibold, marginBottom: spacing(2) },
  cardBody: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
  cta: { backgroundColor: colors.brand, borderRadius: radius.md, paddingVertical: spacing(4), alignItems: 'center' },
  ctaText: { color: colors.background, fontSize: 16, fontWeight: fontWeight.semibold },
});
