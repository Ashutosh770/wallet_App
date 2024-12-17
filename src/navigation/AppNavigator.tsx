import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import RecurringTransactionsScreen from '../screens/RecurringTransactionsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/Register';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen name="Transaction History" component={TransactionHistoryScreen} />
      <Stack.Screen name="Recurring Transactions" component={RecurringTransactionsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
