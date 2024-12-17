import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TransactionCardProps {
  category: string;
  amount: number;
  date: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ category, amount, date }) => (
  <View style={styles.card}>
    <Text style={styles.category}>{category}</Text>
    <Text style={styles.amount}>${amount}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 16, marginVertical: 8, backgroundColor: '#fff', borderRadius: 8 },
  category: { fontSize: 16, fontWeight: 'bold' },
  amount: { fontSize: 18, color: 'green' },
  date: { fontSize: 14, color: 'gray' },
});

export default TransactionCard;