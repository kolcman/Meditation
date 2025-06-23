<template>
  <NavigationMenu />
  <div class="container">
    <div v-if="!isStarted" class="controls">
      <UserInfo />
      <MeditationList />
    </div>
    <MeditationControl class="meditation__control" />
  </div>
</template>

<script setup lang="ts">

import MeditationControl from '@/components/MeditationControl.vue';
import MeditationList from '@/components/MeditationList.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import UserInfo from '@/components/UserInfo.vue';
import { ref } from 'vue';

const isStarted = ref<boolean>(true)

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
