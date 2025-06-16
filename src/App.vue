<script setup lang="ts">
import IconLogo from './components/icon/IconLogo.vue';


</script>

<template>
  <main>
    <div class="login">
      <IconLogo />
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.login {
  background-image: url("/public/bg.jpg");
}
</style>
