<template>
  <div class="auth">
    <IconLogo class="auth__logo" />
    <form class="auth__form">
      <InputString v-model="form.username" type="email" placeholder="Имя пользователя" />
      <InputString v-model="form.password" type="email" placeholder="Пароль" />
      <ButtonMain class="auth__btn" @click="">Войти в приложение</ButtonMain>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import IconLogo from '@/components/icon/IconLogo.vue'
import InputString from '@/components/InputString.vue';
import { ref } from 'vue';

const form = ref<{ username: string, password: string }>({ username: '', password: '' });

function login(event: Event) {
  event.preventDefault();

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
