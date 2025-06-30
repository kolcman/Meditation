<template>
  <NavigationMenu />
  <div class="container">
    <div v-if="!meditationStore.isStarted" class="controls">
      <UserInfo />
      <MeditationList />
    </div>
    <MeditationControl v-else class="meditation__control" />
  </div>
</template>

<script setup lang="ts">

import MeditationControl from '@/components/MeditationControl.vue';
import MeditationList from '@/components/MeditationList.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useMeditationsStore } from '@/stores/meditation.store';

const meditationStore = useMeditationsStore();

// Сделал клик по кнопке с помощью стор.

</script>

<style scoped>
.container {
  padding: 0 50px;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
}
</style>
