import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList, Transaction } from '../types';
import { getRecentTransactions } from '../db/database';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Ledger'>;

function groupByDay(transactions: Transaction[]): { title: string; data: Transaction[] }[] {
  const groups = new Map<string, Transaction[]>();
  for (const txn of transactions) {
    const key = new Date(txn.postTime).toDateString();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(txn);
  }
  return Array.from(groups.entries()).map(([title, data]) => ({ title, data }));
}

export default function LedgerScreen(_props: Props) {
  const [all, setAll] = useState<Transaction[]>([]);
  const [query, setQuery] = useState('');

  useFocusEffect(
    useCallback(() => {
      getRecentTransactions(500).then(setAll);
    }, []),
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return all;
    const q = query.toLowerCase();
    return all.filter(
      (t) => t.senderName?.toLowerCase().includes(q) || t.bankName.toLowerCase().includes(q) || String(t.amount).includes(q),
    );
  }, [all, query]);

  const sections = useMemo(() => groupByDay(filtered), [filtered]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ledger</Text>
      <TextInput
        style={styles.search}
        placeholder="Search by name, bank, or amount"
        placeholderTextColor={colors.textSecondary}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={sections}
        keyExtractor={(section) => section.title}
        renderItem={({ item: section }) => (
          <View>
            <Text style={styles.dayHeader}>{section.title}</Text>
            {section.data.map((txn) => (
              <View key={txn.id} style={styles.row}>
                <View>
                  <Text style={styles.rowSender}>{txn.senderName ?? txn.bankName}</Text>
                  <Text style={styles.rowMeta}>
                    {txn.bankName} · {new Date(txn.postTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    {txn.reference ? ` · Ref ${txn.reference}` : ''}
                  </Text>
                </View>
                <Text style={styles.rowAmount}>₦{txn.amount.toLocaleString()}</Text>
              </View>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No transactions match yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing(6) },
  title: { color: colors.textPrimary, fontSize: 22, fontWeight: fontWeight.display, marginBottom: spacing(4) },
  search: {
    backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border,
    color: colors.textPrimary, paddingHorizontal: spacing(4), paddingVertical: spacing(3), marginBottom: spacing(5), fontSize: 14,
  },
  dayHeader: { color: colors.textSecondary, fontSize: 12, fontWeight: fontWeight.semibold, marginTop: spacing(4), marginBottom: spacing(2), textTransform: 'uppercase', letterSpacing: 0.5 },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: spacing(3), borderBottomColor: colors.border, borderBottomWidth: 1,
  },
  rowSender: { color: colors.textPrimary, fontSize: 15, fontWeight: fontWeight.semibold },
  rowMeta: { color: colors.textSecondary, fontSize: 12, marginTop: 2 },
  rowAmount: { color: colors.success, fontSize: 15, fontWeight: fontWeight.semibold },
  empty: { color: colors.textSecondary, textAlign: 'center', marginTop: spacing(10) },
});
