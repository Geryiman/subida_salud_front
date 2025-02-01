import axios from 'axios';

const API_URL = "https://bob-esponja-yh539.ondigitalocean.app";

export const login = async (nss, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { nss, password });
  return res.data;
};

export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/register`, userData);
  return res.data;
};

export const getProfile = async (token) => {
  const res = await axios.get(`${API_URL}/users/profile`, {
    headers: { Authorization: token }
  });
  return res.data;
};

export const getTreatments = async (token) => {
  const res = await axios.get(`${API_URL}/treatments`, {
    headers: { Authorization: token }
  });
  return res.data;
};
