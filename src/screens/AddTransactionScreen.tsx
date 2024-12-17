import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddTransactionScreen: React.FC = ({navigation}) => {
  const [amount, setAmount] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const handleAddTransaction = () => {
    if (!amount || !category) return;
  
    navigation.navigate('AddTransaction');
  };

  return (
    <View style={styles.container}>
      <Text>Enter Amount:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(value) => setAmount(parseFloat(value))}
      />
      <Text>Select Category:</Text>
      <Picker selectedValue={category} onValueChange={(value: string) => setCategory(value)}>
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Savings" value="savings" />
      </Picker>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginVertical: 8, padding: 8 },
});

export default AddTransactionScreen;
