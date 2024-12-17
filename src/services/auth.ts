import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
  return response.data;
};

export const register = async (userData: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_BASE_URL}/logout`);
  return response.data;
};
