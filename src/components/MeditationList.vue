<template>
  <ul class="meditation-list">
    <li v-for="item in store.meditations" :key="item.ID">
      <MeditationCard :title="item.title" :description="item.description" :duration="item.duration_min" />
    </li>
  </ul>
  <!-- {{ store.meditations }} -->
</template>

<script setup lang="ts">
import MeditationCard from './MeditationCard.vue';
import { useMeditationsStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';

const store = useMeditationsStore()

onMounted(() => {
  store.fetchMeditations();
})




</script>

<style scoped>
.meditation-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 22px;
}
</style>
