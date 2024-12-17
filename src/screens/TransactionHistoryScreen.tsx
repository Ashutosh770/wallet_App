import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TransactionCard from '../components/TransactionCard';

const data = [
  { id: '1', category: 'Food', amount: 50, date: '2024-12-01' },
  { id: '2', category: 'Salary', amount: 2000, date: '2024-12-02' },
];

const TransactionHistoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Transaction History</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TransactionCard category={item.category} amount={item.amount} date={item.date} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default TransactionHistoryScreen;
