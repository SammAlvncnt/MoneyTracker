import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from '../components/TransactionItem';
import { formatDate } from '../utils/formatters';
import { colors } from '../constants/colors';

const HistoryScreen = () => {
  const { transactions } = useContext(TransactionContext);

  // Fungsi untuk mengelompokkan transaksi berdasarkan tanggal
  const groupTransactionsByDate = (transactions) => {
    const grouped = {};
    transactions.forEach(transaction => {
      const dateKey = new Date(transaction.date).toDateString(); // 'Wed Oct 25 2023'
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(transaction);
    });
    return grouped;
  };

  const groupedTransactions = groupTransactionsByDate(transactions);
  const sortedDates = Object.keys(groupedTransactions).sort((a, b) => new Date(b) - new Date(a));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Transaksi</Text>
      <ScrollView>
        {sortedDates.length === 0 ? (
          <Text style={styles.emptyText}>Belum ada transaksi.</Text>
        ) : (
          sortedDates.map(dateKey => (
            <View key={dateKey} style={styles.dateGroup}>
              <Text style={styles.dateHeader}>{formatDate(dateKey)}</Text>
              {groupedTransactions[dateKey].map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

// ... (StyleSheet untuk HistoryScreen)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: 'bold', padding: 16, paddingBottom: 8 },
  emptyText: { textAlign: 'center', color: colors.textLight, marginTop: 50 },
  dateGroup: { marginBottom: 16 },
  dateHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textLight,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
  },
});

export default HistoryScreen;