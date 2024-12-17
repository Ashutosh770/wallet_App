import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const getWalletBalance = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/wallet/${userId}`);
  return response.data;
};

export const addTransaction = async (transactionData: {
  userId: string;
  amount: number;
  category: string;
  type: 'credit' | 'debit';
}) => {
  const response = await axios.post(`${API_BASE_URL}/transactions`, transactionData);
  return response.data;
};

export const getTransactions = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/transactions/${userId}`);
  return response.data;
};

export const getRecurringTransactions = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/recurring/${userId}`);
  return response.data;
};

export const addRecurringTransaction = async (recurringData: {
  userId: string;
  amount: number;
  category: string;
  frequency: string; // e.g., "weekly", "monthly"
}) => {
  const response = await axios.post(`${API_BASE_URL}/recurring`, recurringData);
  return response.data;
};
