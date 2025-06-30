import { API_ROUTES, client } from '@/api';
import type { Meditation, MeditationResponse } from '@/interfaces/meditations.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);
  const isStarted = ref<boolean>(false);
  const currentMeditation = ref<Meditation>();

  async function fetchMeditations() {
    const resp = await client().get<MeditationResponse>(API_ROUTES.meditations);
    meditations.value = resp.data.data.meditations;
  }

  function startMeditation(meditation: Meditation) {
    currentMeditation.value = meditation;
    isStarted.value = true;
  }

  return { meditations, isStarted, fetchMeditations, startMeditation, currentMeditation };
});
