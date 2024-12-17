import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WalletBalanceCardProps {
  balance: number;
}

const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({ balance }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Wallet Balance</Text>
    <Text style={styles.balance}>${balance}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#fff', borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  balance: { fontSize: 24, color: 'blue', marginTop: 8 },
});

export default WalletBalanceCard;
