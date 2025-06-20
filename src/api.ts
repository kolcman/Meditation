import axios from 'axios';
import { useAuthStore } from './stores/auth.store';

export const API_ROUTES = {
  meditations: 'meditations',
  profile: 'profile',
  auth: {
    registration: 'auth/register',
    login: 'auth/login',
  },
};

export const client = () => {
  const authStore = useAuthStore();
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  });
};
