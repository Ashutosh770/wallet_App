import moment from 'moment';

/**
 * Formats a date string into a readable format.
 * @param date - The date string in ISO format
 * @returns Formatted date string
 */
export const formatDate = (date: string): string => {
  return moment(date).format('DD MMM, YYYY');
};

/**
 * Capitalizes the first letter of a string.
 * @param text - The input string
 * @returns Capitalized string
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Calculates the total balance based on transactions.
 * @param transactions - Array of transactions
 * @returns Total balance
 */
export const calculateBalance = (
  transactions: { amount: number; type: 'credit' | 'debit' }[]
): number => {
  return transactions.reduce((total, transaction) => {
    return transaction.type === 'credit'
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);
};
