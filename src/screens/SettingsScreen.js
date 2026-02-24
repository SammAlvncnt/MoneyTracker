// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pengaturan</Text>
        <Text style={styles.placeholder}>Fitur pengaturan akan datang!</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
    title: { fontSize: 24, fontWeight: 'bold' },
    placeholder: { fontSize: 18, marginTop: 10, color: colors.textLight },
  });
  export default SettingsScreen;