import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from '../constants/colors';
import { TransactionContext } from '../context/TransactionContext';

const CATEGORIES = [
  { name: 'Makanan', icon: 'restaurant' },
  { name: 'Transportasi', icon: 'directions-car' },
  { name: 'Belanja', icon: 'shopping-bag' },
  { name: 'Tagihan', icon: 'receipt' },
  { name: 'Hiburan', icon: 'movie' },
  { name: 'Gaji', icon: 'account-balance-wallet' },
];

const AddTransactionScreen = ({ navigation }) => {
  const { addTransaction } = useContext(TransactionContext);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'expense' or 'income'
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert('Error', 'Jumlah nominal harus diisi dengan angka.');
      return;
    }
    const newTransaction = {
      amount: Number(amount),
      type,
      category,
      description,
      date: new Date().toISOString(), // Simpan sebagai ISO string
    };

    addTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Tambah Transaksi Baru</Text>

      {/* Pemilih Tipe */}
      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[styles.typeButton, type === 'expense' && styles.typeButtonActiveExpense]}
          onPress={() => setType('expense')}
        >
          <Text style={[styles.typeButtonText, type === 'expense' && styles.typeButtonTextActive]}>Pengeluaran</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === 'income' && styles.typeButtonActiveIncome]}
          onPress={() => setType('income')}
        >
          <Text style={[styles.typeButtonText, type === 'income' && styles.typeButtonTextActive]}>Pemasukan</Text>
        </TouchableOpacity>
      </View>

      {/* Input Nominal */}
      <Text style={styles.label}>Nominal</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="0"
        keyboardType="numeric"
      />

      {/* Pemilih Kategori */}
      <Text style={styles.label}>Kategori</Text>
      <View style={styles.categoryGrid}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.name}
            style={[styles.categoryItem, category === cat.name && styles.categoryItemActive]}
            onPress={() => setCategory(cat.name)}
          >
            <Text style={styles.categoryText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tombol Simpan */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Simpan Transaksi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// ... (StyleSheet untuk AddTransactionScreen)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  screenTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  typeSelector: { flexDirection: 'row', marginBottom: 20 },
  typeButton: { flex: 1, padding: 12, borderWidth: 1, borderColor: colors.border, alignItems: 'center' },
  typeButtonActiveExpense: { backgroundColor: colors.expense, borderColor: colors.expense },
  typeButtonActiveIncome: { backgroundColor: colors.income, borderColor: colors.income },
  typeButtonText: { fontSize: 16, fontWeight: 'bold' },
  typeButtonTextActive: { color: colors.white },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8, color: colors.text },
  input: {
    backgroundColor: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  categoryItem: {
    width: '48%',
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryItemActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  categoryText: { color: colors.text },
  saveButton: { backgroundColor: colors.accent, padding: 15, borderRadius: 8, alignItems: 'center' },
  saveButtonText: { color: colors.white, fontSize: 18, fontWeight: 'bold' },
});

export default AddTransactionScreen;