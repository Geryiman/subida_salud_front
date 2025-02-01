import axios from 'axios';

const API_URL = "https://bob-esponja-yh539.ondigitalocean.app";

// Registrar usuario y guardar NSS en LocalStorage
export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/register`, userData);
  localStorage.setItem('nss', userData.nss); // Guardar NSS
  return res.data;
};

// Iniciar sesión y guardar NSS en LocalStorage
export const login = async (nss, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { nss, password });
  localStorage.setItem('nss', nss); // Guardar NSS en lugar de JWT
  return res.data;
};

// Obtener perfil del usuario por NSS
export const getProfile = async () => {
  const nss = localStorage.getItem('nss');
  if (!nss) throw new Error('No se encontró el NSS en el almacenamiento local');

  const res = await axios.get(`${API_URL}/users/profile?nss=${nss}`);
  return res.data;
};

// Obtener tratamientos por NSS
export const getTreatments = async () => {
  const nss = localStorage.getItem('nss');
  if (!nss) throw new Error('No se encontró el NSS en el almacenamiento local');

  const res = await axios.get(`${API_URL}/treatments?nss=${nss}`);
  return res.data;
};

// Cerrar sesión (eliminar NSS del almacenamiento)
export const logout = () => {
  localStorage.removeItem('nss');
};
