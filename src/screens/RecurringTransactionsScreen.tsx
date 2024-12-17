import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

interface RecurringTransaction {
  id: string;
  amount: number;
  category: string;
  interval: string;
}

const RecurringTransactionsScreen: React.FC = () => {
  const [recurringTransactions, setRecurringTransactions] = useState<RecurringTransaction[]>([
    { id: '1', amount: 500, category: 'Savings', interval: 'Monthly' },
  ]);

  const addRecurringTransaction = () => {
    setRecurringTransactions([
      ...recurringTransactions,
      { id: `${recurringTransactions.length + 1}`, amount: 300, category: 'Food', interval: 'Weekly' },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recurringTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.category}: ${item.amount} ({item.interval})</Text>
          </View>
        )}
      />
      <Button title="Add Recurring Transaction" onPress={addRecurringTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: { marginVertical: 8, padding: 8, backgroundColor: '#eee', borderRadius: 4 },
});

export default RecurringTransactionsScreen;
