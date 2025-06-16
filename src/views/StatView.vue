<template>
  <NavigationMenu />
  {{ "Статистика" }}
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue';

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
