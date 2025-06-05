import { API_ROUTES, http } from '@/api';
import type { Meditation, MeditationResponse } from '@/interfaces/meditations.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    const resp = await http.get<MeditationResponse>(API_ROUTES.meditations);
    meditations.value = resp.data.data.meditations;
  }

  return { meditations, fetchMeditations };
});
