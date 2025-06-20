import { API_ROUTES, http } from '@/api';
import type { User } from '@/interfaces/user.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrStore = defineStore('user', () => {
  const user = ref<User>();

  async function registrUser(username: string, email: string, password: string) {
    await http.post(API_ROUTES.auth.registration, {
      username,
      email,
      password,
    });
  }
  return { user, registrUser };
});
