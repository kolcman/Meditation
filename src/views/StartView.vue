<template>
  <div class="start">
    <IconLogo class="start__logo" />
    <h1 class="start__title">Добро пожаловать!</h1>
    <p class="start__description">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    <button class="start__btn" @click="redirectToMain">Войти в приложение</button>
  </div>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icon/IconLogo.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

function redirectToMain() {
  router.push('/main')
}

</script>

<style scoped>
.start {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font);
  text-align: center;
  color: var(--color-fg);
}

.start__logo {
  width: 202px;
  height: 213px;
}

.start__title {
  font-weight: 700;
  font-size: 34px;
}

.start__description {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 65px;
}

.start__btn {
  width: fit-content;
  font-size: 25px;
  font-weight: 500;
  background-color: var(--color-btn);
  color: var(--color-fg);
  padding: 15px 55px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
