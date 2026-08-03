import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import { colors, spacing, radius, fontWeight } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing(6) }}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('BankPicker')}>
        <Text style={styles.rowLabel}>Monitored banking apps</Text>
        <Text style={styles.rowChevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          // TODO: wire up a real CSV export (e.g. write to
          // RNFS.DocumentDirectoryPath and share via react-native-share).
          // Left unimplemented in this scaffold rather than faked.
        }}
      >
        <Text style={styles.rowLabel}>Export ledger as CSV</Text>
        <Text style={styles.rowChevron}>›</Text>
      </TouchableOpacity>

      <View style={styles.privacyCard}>
        <Text style={styles.privacyTitle}>What stays on this phone</Text>
        <Text style={styles.privacyBody}>
          Every parsed alert and every match check happens locally in this app's own database. Nothing is sent to a
          server. Uninstalling the app deletes the ledger.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { color: colors.textPrimary, fontSize: 22, fontWeight: fontWeight.display, marginBottom: spacing(5) },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border,
    paddingHorizontal: spacing(4), paddingVertical: spacing(4), marginBottom: spacing(3),
  },
  rowLabel: { color: colors.textPrimary, fontSize: 15, fontWeight: fontWeight.semibold },
  rowChevron: { color: colors.textSecondary, fontSize: 18 },
  privacyCard: {
    backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border,
    padding: spacing(5), marginTop: spacing(4),
  },
  privacyTitle: { color: colors.textPrimary, fontSize: 14, fontWeight: fontWeight.semibold, marginBottom: spacing(2) },
  privacyBody: { color: colors.textSecondary, fontSize: 13, lineHeight: 19 },
});
