import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TRANSACTION_KEY = '@transactions';

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = React.useState([]);

  // Load data dari AsyncStorage saat app pertama kali dibuka
  React.useEffect(() => {
    const loadTransactions = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem(TRANSACTION_KEY);
        if (storedTransactions !== null) {
          setTransactions(JSON.parse(storedTransactions));
        }
      } catch (e) {
        console.error("Gagal memuat transaksi", e);
      }
    };
    loadTransactions();
  }, []);

  // Fungsi untuk menambah transaksi baru
  const addTransaction = async (newTransaction) => {
    const transactionWithId = {
      ...newTransaction,
      id: Date.now().toString(), // ID unik sederhana
    };
    const updatedTransactions = [transactionWithId, ...transactions];
    setTransactions(updatedTransactions);
    try {
      await AsyncStorage.setItem(TRANSACTION_KEY, JSON.stringify(updatedTransactions));
    } catch (e) {
      console.error("Gagal menyimpan transaksi", e);
    }
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};