import { API_ROUTES, client } from '@/api';
import type { LoginResponse } from '@/interfaces/loginResponse.interfaces';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const TOKEN_STORE_KEY = 'auth-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  const inititalValue = localStorage.getItem(TOKEN_STORE_KEY);

  if (inititalValue) {
    token.value = inititalValue;
  }

  function setToken(newValue: string) {
    token.value = newValue;
    localStorage.setItem(TOKEN_STORE_KEY, newValue);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function login(userName: string, password: string) {
    const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      userName,
      password,
    });

    setToken(data.data.token);
  }

  return { token, setToken, clearToken, getToken, login };
});
