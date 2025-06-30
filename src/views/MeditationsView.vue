<template>
  <NavigationMenu />
  <div class="container">
    <UserInfo />
    <MeditationList @start="handleStartMeditation" />
  </div>
</template>

<script setup lang="ts">

import MeditationList from '@/components/MeditationList.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useMeditationsStore } from '@/stores/meditation.store';

const meditationStore = useMeditationsStore();

function handleStartMeditation(meditation: {
  ID: number;
  title: string;
  description: string;
  duration_min: number;
}) {
  meditationStore.startMeditation(meditation);
}

</script>

<style scoped>
.container {
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
}
</style>
