<template>
  <NavigationMenu />
  {{ statsStore }}
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue';
import { useStatsStore } from '@/stores/stats.store';
const statsStore = useStatsStore()
console.log(statsStore.fetchStats());
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  padding: 0 50px;
}
</style>
