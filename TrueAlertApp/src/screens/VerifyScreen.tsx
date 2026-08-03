import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList, Transaction, VerifyStatus } from '../types';
import { NotificationBridge } from '../native/NotificationBridge';
import { ingestRawNotification, findMatch } from '../db/database';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Verify'>;

const TIMEOUT_MS = 10 * 60 * 1000; // give up after 10 minutes of waiting
const LOOKBACK_MS = 2 * 60 * 1000; // also catch an alert that landed just before Verify was tapped

export default function VerifyScreen(_props: Props) {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<VerifyStatus>('idle');
  const [matched, setMatched] = useState<Transaction | null>(null);

  const statusRef = useRef<VerifyStatus>('idle');
  const seal = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;
  const subscriptionRef = useRef<{ remove: () => void } | null>(null);

  useEffect(() => () => subscriptionRef.current?.remove(), []);

  const setStatusBoth = (s: VerifyStatus) => {
    statusRef.current = s;
    setStatus(s);
  };

  const runStampAnimation = () => {
    seal.setValue(0);
    Animated.spring(seal, { toValue: 1, friction: 5, tension: 140, useNativeDriver: true }).start();
  };

  const startPulse = () => {
    pulse.setValue(1);
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.08, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ]),
    ).start();
  };

  const reset = () => {
    subscriptionRef.current?.remove();
    setStatusBoth('idle');
    setMatched(null);
    setAmount('');
  };

  const startVerifying = useCallback(async () => {
    const expected = parseFloat(amount.replace(/,/g, ''));
    if (Number.isNaN(expected)) return;

    setMatched(null);
    setStatusBoth('waiting');
    startPulse();
    const startedAt = Date.now();

    // Covers the case where the alert landed a few seconds before the button was tapped.
    const already = await findMatch(expected, startedAt - LOOKBACK_MS);
    if (already) {
      setMatched(already);
      setStatusBoth('verified');
      runStampAnimation();
      return;
    }

    subscriptionRef.current = NotificationBridge.subscribe(async (raw) => {
      const txn = await ingestRawNotification(raw);
      if (txn && Math.abs(txn.amount - expected) < 0.01) {
        setMatched(txn);
        setStatusBoth('verified');
        runStampAnimation();
        subscriptionRef.current?.remove();
      }
    });

    setTimeout(() => {
      if (statusRef.current === 'waiting') {
        setStatusBoth('timeout');
        subscriptionRef.current?.remove();
      }
    }, TIMEOUT_MS);
  }, [amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expected amount</Text>
      <View style={styles.inputRow}>
        <Text style={styles.currencyPrefix}>₦</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="5,000"
          placeholderTextColor={colors.textSecondary}
          value={amount}
          onChangeText={setAmount}
          editable={status === 'idle'}
        />
      </View>

      {status === 'idle' && (
        <TouchableOpacity style={styles.cta} onPress={startVerifying} disabled={!amount}>
          <Text style={styles.ctaText}>Start verifying</Text>
        </TouchableOpacity>
      )}

      {status === 'waiting' && (
        <View style={styles.statusArea}>
          <Animated.View style={[styles.pulseRing, { transform: [{ scale: pulse }] }]} />
          <Text style={styles.waitingText}>Waiting for a real alert…</Text>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.resetLink}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}

      {status === 'verified' && matched && (
        <View style={styles.statusArea}>
          <Animated.View
            style={[
              styles.seal,
              {
                transform: [
                  { scale: seal.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0.4, 1.15, 1] }) },
                  { rotate: seal.interpolate({ inputRange: [0, 1], outputRange: ['-10deg', '-4deg'] }) },
                ],
              },
            ]}
          >
            <Text style={styles.sealText}>VERIFIED</Text>
          </Animated.View>
          <Text style={styles.matchedDetail}>
            ₦{matched.amount.toLocaleString()} from {matched.senderName ?? matched.bankName}
          </Text>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.resetLink}>Verify another</Text>
          </TouchableOpacity>
        </View>
      )}

      {status === 'timeout' && (
        <View style={styles.statusArea}>
          <View style={styles.failBadge}>
            <Text style={styles.failBadgeText}>NOT RECEIVED</Text>
          </View>
          <Text style={styles.matchedDetail}>No matching alert came in. Hold the goods until one does.</Text>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.resetLink}>Try again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing(6) },
  label: { color: colors.textSecondary, fontSize: 13, marginBottom: spacing(2) },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface,
    borderRadius: radius.md, borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: spacing(4), marginBottom: spacing(6),
  },
  currencyPrefix: { color: colors.textSecondary, fontSize: 24, marginRight: spacing(2) },
  input: { flex: 1, color: colors.textPrimary, fontSize: 24, paddingVertical: spacing(4) },
  cta: { backgroundColor: colors.brand, borderRadius: radius.md, paddingVertical: spacing(4), alignItems: 'center' },
  ctaText: { color: colors.background, fontSize: 16, fontWeight: fontWeight.semibold },
  statusArea: { alignItems: 'center', marginTop: spacing(10) },
  pulseRing: { width: 96, height: 96, borderRadius: radius.full, borderWidth: 3, borderColor: colors.brand, marginBottom: spacing(5) },
  waitingText: { color: colors.textSecondary, fontSize: 15, marginBottom: spacing(4) },
  seal: {
    width: 132, height: 132, borderRadius: radius.full, backgroundColor: colors.successMuted,
    borderWidth: 3, borderColor: colors.success, alignItems: 'center', justifyContent: 'center', marginBottom: spacing(5),
  },
  sealText: { color: colors.success, fontWeight: fontWeight.display, fontSize: 15, letterSpacing: 1 },
  failBadge: {
    width: 132, height: 132, borderRadius: radius.full, backgroundColor: colors.failMuted,
    borderWidth: 3, borderColor: colors.fail, alignItems: 'center', justifyContent: 'center', marginBottom: spacing(5),
  },
  failBadgeText: { color: colors.fail, fontWeight: fontWeight.display, fontSize: 14, letterSpacing: 1 },
  matchedDetail: { color: colors.textPrimary, fontSize: 15, textAlign: 'center', marginBottom: spacing(4), paddingHorizontal: spacing(4) },
  resetLink: { color: colors.brand, fontSize: 14, fontWeight: fontWeight.semibold },
});
