import { API_ROUTES, client } from '@/api';
import type { Profile } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function getUserProfile() {
    const { data } = await client().get<Profile>(API_ROUTES.profile);
    profile.value = data;
  }

  return { profile, getUserProfile };
});
