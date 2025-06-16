<template>
  <NavigationMenu />
  <div class="container">
    <UserInfo />
    <MeditationList />
  </div>
</template>

<script setup lang="ts">
import MeditationList from '@/components/MeditationList.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import UserInfo from '@/components/UserInfo.vue';

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
