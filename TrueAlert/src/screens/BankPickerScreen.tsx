import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Switch } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import { getKnownApps } from '../db/bankParsers';
import { NotificationBridge } from '../native/NotificationBridge';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BankPicker'>;

export default function BankPickerScreen({ navigation }: Props) {
  const apps = getKnownApps();
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(apps.map((a) => [a.packageName, true])),
  );

  const toggle = (packageName: string) => {
    setSelected((prev) => ({ ...prev, [packageName]: !prev[packageName] }));
  };

  const handleContinue = () => {
    const chosen = apps.filter((a) => selected[a.packageName]).map((a) => a.packageName);
    NotificationBridge.setMonitoredPackages(chosen);
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which banks do you use?</Text>
      <Text style={styles.subtitle}>Only checked apps are ever parsed. Everything else is ignored.</Text>

      <FlatList
        data={apps}
        keyExtractor={(item) => item.packageName}
        contentContainerStyle={{ paddingTop: spacing(4) }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowLabel}>{item.bankName}</Text>
            <Switch
              value={!!selected[item.packageName]}
              onValueChange={() => toggle(item.packageName)}
              trackColor={{ false: colors.border, true: colors.brandMuted }}
              thumbColor={selected[item.packageName] ? colors.brand : colors.textSecondary}
            />
          </View>
        )}
        ListFooterComponent={
          <Text style={styles.footerNote}>
            Don't see your bank? Add its package name and alert format to src/db/bankParsers.ts — see the README.
          </Text>
        }
      />

      <TouchableOpacity style={styles.cta} onPress={handleContinue}>
        <Text style={styles.ctaText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing(6) },
  title: { color: colors.textPrimary, fontSize: 22, fontWeight: fontWeight.display, marginBottom: spacing(2) },
  subtitle: { color: colors.textSecondary, fontSize: 14, marginBottom: spacing(2) },
  row: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1,
    borderColor: colors.border, paddingHorizontal: spacing(4), paddingVertical: spacing(4),
    marginBottom: spacing(3),
  },
  rowLabel: { color: colors.textPrimary, fontSize: 16, fontWeight: fontWeight.semibold },
  footerNote: { color: colors.textSecondary, fontSize: 12, lineHeight: 18, marginTop: spacing(2), marginBottom: spacing(4) },
  cta: { backgroundColor: colors.brand, borderRadius: radius.md, paddingVertical: spacing(4), alignItems: 'center' },
  ctaText: { color: colors.background, fontSize: 16, fontWeight: fontWeight.semibold },
});
