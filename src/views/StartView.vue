<template>
  <div class="start">
    <IconLogo class="start__logo" />
    <h1 class="start__title">Добро пожаловать!</h1>
    <p class="start__description">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    <ButtonMain class="start__btn" @click="redirectToLogin">Войти</ButtonMain>
    <RouterLink class="start__link" to="/register">Зарегистрироваться</RouterLink>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import IconLogo from '@/components/icon/IconLogo.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

function redirectToLogin() {
  router.push('/login')
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
  background-image: url('/public/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
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
  margin-bottom: 5px;
}

.start__link {
  color: var(--color-fg);
  text-decoration: none;
  cursor: pointer;
}

.start__link:hover {
  color: aquamarine;
}
</style>
