import { API_ROUTES, client } from '@/api';
import type { Stats, Summary } from '@/interfaces/statistic.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', () => {
  const summary = ref<Summary>();

  async function fetchStats() {
    try {
      const response = await client().get<{ data: { summary: Summary } }>(API_ROUTES.stats);
      summary.value = response.data.data.summary;
    } catch (err: unknown) {
      console.error('Ошибка при загрузке данных', err);
    }
  }

  async function saveState(obj: { type: string; value: number }) {
    try {
      await client().post<Stats>(API_ROUTES.stats, obj);
    } catch (err: unknown) {
      console.error('Ошибка при отправке данных состояния', err);
    }
  }

  async function saveDuration(obj: { type: string; value: number }) {
    try {
      await client().post<Stats>(API_ROUTES.stats, obj);
    } catch (err: unknown) {
      console.error('Ошибка при отправке данных продолжительности минут', err);
    }
  }

  return { summary, fetchStats, saveState, saveDuration };
});
