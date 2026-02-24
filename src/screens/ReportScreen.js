// ReportScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laporan Keuangan</Text>
      <Text style={styles.placeholder}>Fitur grafik akan datang!</Text>
      <Text style={styles.hint}>Gunakan library seperti 'react-native-svg-charts' untuk membuat grafik Pie Chart atau Bar Chart.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: 'bold' },
  placeholder: { fontSize: 18, marginTop: 10, color: colors.textLight },
  hint: { fontSize: 12, marginTop: 5, color: colors.textLight, textAlign: 'center', paddingHorizontal: 20 }
});
export default ReportScreen;