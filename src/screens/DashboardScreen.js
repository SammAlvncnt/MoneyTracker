import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../constants/colors';
import { formatCurrency } from '../utils/formatters';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from '../components/TransactionItem';

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Halo, User!</Text>
      </View>

      {/* Kartu Saldo */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Saldo</Text>
        <Text style={styles.balanceAmount}>{formatCurrency(balance)}</Text>
        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Pemasukan</Text>
            <Text style={[styles.summaryValue, { color: colors.income }]}>
              +{formatCurrency(totalIncome)}
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Pengeluaran</Text>
            <Text style={[styles.summaryValue, { color: colors.expense }]}>
              -{formatCurrency(totalExpense)}
            </Text>
          </View>
        </View>
      </View>

      {/* Transaksi Terkini */}
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Transaksi Terkini</Text>
        <FlatList
          data={transactions.slice(0, 5)} // Hanya tampilkan 5 teratas
          renderItem={({ item }) => <TransactionItem transaction={item} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={styles.emptyText}>Belum ada transaksi.</Text>}
        />
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={styles.seeAll}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Tambah */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTransaction')}
      >
        <Icon name="add" size={28} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

// ... (StyleSheet untuk DashboardScreen)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 16 },
  headerText: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  balanceCard: {
    marginHorizontal: 16,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  balanceLabel: { color: colors.white, fontSize: 14 },
  balanceAmount: { color: colors.white, fontSize: 32, fontWeight: 'bold', marginVertical: 8 },
  summary: { flexDirection: 'row', justifyContent: 'space-between' },
  summaryItem: { alignItems: 'center' },
  summaryLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  summaryValue: { color: colors.white, fontSize: 16, fontWeight: 'bold' },
  recentSection: { marginTop: 24, flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.text, paddingHorizontal: 16, marginBottom: 8 },
  emptyText: { textAlign: 'center', color: colors.textLight, marginTop: 20 },
  seeAll: { textAlign: 'center', color: colors.primary, fontWeight: 'bold', paddingVertical: 12 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.accent,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});

export default DashboardScreen;