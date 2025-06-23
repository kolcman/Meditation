<template>
  <div class="auth">
    <IconLogo class="auth__logo" />
    <form class="auth__form" @submit="login">
      <InputString v-model="form.username" type="text" placeholder="Имя пользователя" />
      <InputString v-model="form.password" type="password" placeholder="Пароль" />
      <ButtonMain class="auth__btn">Войти в приложение</ButtonMain>
      <p v-if="authError" class="auth__error">{{ authErrorText }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import IconLogo from '@/components/icon/IconLogo.vue'
import InputString from '@/components/InputString.vue';
import { router } from '@/routes';
import { useLoginStore } from '@/stores/login.store';
import type { AxiosError } from 'axios';
import { ref } from 'vue';

const loginStore = useLoginStore();
const form = ref({
  username: '',
  password: ''
});

const authError = ref(false);
const authErrorText = ref('');

async function login(event: Event) {
  event.preventDefault();
  if (!form.value.username || !form.value.password) {
    authError.value = true;
    authErrorText.value = "Заполните все поля."
    return
  }
  try {
    await loginStore.login(form.value.username, form.value.password);
    authError.value = false;
    router.push('/meditations');
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>
    if (axiosError.response?.data?.message) {
      authErrorText.value = axiosError.response?.data?.message;
    } else {
      authErrorText.value = "Ошибка входа. Попробуйте снова"
    }
    authError.value = true;
  }

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

.auth__error {
  color: red;
  font-size: 24px;
  font-family: var(--font);
}
</style>
