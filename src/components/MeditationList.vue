<template>
  <ul class="meditation-list">
    <li v-for="item in meditationStore.meditations" :key="item.ID">
      <MeditationCard :id="item.ID" :title="item.title" :description="item.description"
        :duration_min="item.duration_min" @start="meditation => emit('start', meditation)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import MeditationCard from './MeditationCard.vue';
import { useMeditationsStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';

const meditationStore = useMeditationsStore()

const emit = defineEmits<{
  (e: 'start', meditation: { ID: number; title: string; description: string; duration_min: number }): void;
}>()

onMounted(() => {
  meditationStore.fetchMeditations();
})


</script>

<style scoped>
.meditation-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 24px 22px;
}
</style>
