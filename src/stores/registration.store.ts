import { API_ROUTES, client } from '@/api';
import type { User } from '@/interfaces/user.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrStore = defineStore('user', () => {
  const user = ref<User>();

  async function registrUser(username: string, email: string, password: string) {
    await client().post(API_ROUTES.auth.registration, {
      username,
      email,
      password,
    });
  }
  return { user, registrUser };
});
