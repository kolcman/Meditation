<template>
  <div class="auth">
    <IconLogo class="auth__logo" />
    <form class="auth__form" @submit="login">
      <InputString v-model="form.username" type="text" placeholder="Имя пользователя" />
      <InputString v-model="form.password" type="password" placeholder="Пароль" />
      <ButtonMain class="auth__btn">Войти в приложение</ButtonMain>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import IconLogo from '@/components/icon/IconLogo.vue'
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';

const form = ref<{ username: string, password: string }>({ username: '', password: '' });
const authStore = useAuthStore();

function login(event: Event) {
  event.preventDefault();
  if (!form.value.username || !form.value.password) {
    return
  }
  authStore.login(form.value.username, form.value.password)
  console.log("Login!");
}

</script>

<style scoped>
.auth {
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

.auth__logo {
  width: 202px;
  height: 213px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
</style>
