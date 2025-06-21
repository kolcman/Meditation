import { API_ROUTES, client } from '@/api';
import { defineStore } from 'pinia';

export const useRegistrStore = defineStore('user', () => {
  async function registrUser(username: string, email: string, password: string) {
    await client().post(API_ROUTES.auth.registration, {
      username,
      email,
      password,
    });
  }
  return { registrUser };
});
