import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/colors';
import { formatCurrency, formatDate } from '../utils/formatters';

const TransactionItem = ({ transaction }) => {
  const isExpense = transaction.type === 'expense';
  const iconName = isExpense ? 'remove-circle' : 'add-circle';
  const iconColor = isExpense ? colors.expense : colors.income;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon name={iconName} size={24} color={iconColor} />
        <View style={styles.details}>
          <Text style={styles.category}>{transaction.category}</Text>
          <Text style={styles.date}>{formatDate(transaction.date)}</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: iconColor }]}>
        {isExpense ? '-' : '+'} {formatCurrency(transaction.amount)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    marginLeft: 12,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionItem;