import axios from 'axios';
import { useLoginStore } from './stores/login.store';

export const API_ROUTES = {
  meditations: 'meditations',
  profile: 'profile',
  auth: {
    registration: 'auth/register',
    login: 'auth/login',
  },
  stats: 'stats',
};

export const client = () => {
  const loginStore = useLoginStore();
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${loginStore.getToken}`,
    },
  });
};
