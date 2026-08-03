import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList, Transaction } from '../types';
import { getRecentTransactions, getTodayTotal } from '../db/database';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  const [todayTotal, setTodayTotal] = useState(0);
  const [recent, setRecent] = useState<Transaction[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    const [total, txns] = await Promise.all([getTodayTotal(), getRecentTransactions(6)]);
    setTodayTotal(total);
    setRecent(txns);
  }, []);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.totalLabel}>Confirmed today</Text>
          <Text style={styles.totalValue}>₦{todayTotal.toLocaleString()}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsGlyph}>⚙</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('Verify')}>
        <Text style={styles.verifyButtonText}>Verify a payment</Text>
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionLabel}>Recent</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Ledger')}>
          <Text style={styles.sectionLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recent}
        keyExtractor={(item) => String(item.id)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.brand} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.rowSender}>{item.senderName ?? item.bankName}</Text>
              <Text style={styles.rowMeta}>{new Date(item.postTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
            <Text style={styles.rowAmount}>₦{item.amount.toLocaleString()}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No verified payments yet today</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing(6) },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing(6) },
  totalLabel: { color: colors.textSecondary, fontSize: 13 },
  totalValue: { color: colors.textPrimary, fontSize: 34, fontWeight: fontWeight.display, marginTop: spacing(1) },
  settingsGlyph: { color: colors.textSecondary, fontSize: 22, marginTop: spacing(1) },
  verifyButton: { backgroundColor: colors.brand, borderRadius: radius.md, paddingVertical: spacing(4.5), alignItems: 'center', marginBottom: spacing(8) },
  verifyButtonText: { color: colors.background, fontSize: 17, fontWeight: fontWeight.semibold },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing(3) },
  sectionLabel: { color: colors.textSecondary, fontSize: 13 },
  sectionLink: { color: colors.brand, fontSize: 13, fontWeight: fontWeight.semibold },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: spacing(3.5), borderBottomColor: colors.border, borderBottomWidth: 1,
  },
  rowSender: { color: colors.textPrimary, fontSize: 15, fontWeight: fontWeight.semibold },
  rowMeta: { color: colors.textSecondary, fontSize: 12, marginTop: 2 },
  rowAmount: { color: colors.success, fontSize: 15, fontWeight: fontWeight.semibold },
  empty: { color: colors.textSecondary, textAlign: 'center', marginTop: spacing(10) },
});
