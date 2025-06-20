import axios from 'axios';
import { BASE_URL } from './constatns';

export const API_ROUTES = {
  meditations: 'meditations',
  profile: 'profile',
  auth: {
    registration: 'auth/register',
    login: 'auth/login',
  },
};

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
