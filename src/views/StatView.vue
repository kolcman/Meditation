<template>
  <NavigationMenu />
  <StatsList />
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue';
import StatsList from '@/components/StatsList.vue';


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
