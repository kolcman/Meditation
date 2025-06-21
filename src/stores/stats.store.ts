import { API_ROUTES, client } from '@/api';
import type { State, Stats } from '@/interfaces/statistic.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', () => {
  const statsStore = ref<Stats[]>();

  async function fetchStats() {
    const response = await client().get<Stats>(API_ROUTES.stats);
    statsStore.value = response.data.data.stats;
  }

  async function saveState(state: State) {
    await client().post<State>(API_ROUTES.stats, state);
  }

  return { statsStore, fetchStats, saveState };
});
