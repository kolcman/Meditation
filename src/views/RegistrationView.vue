<template>
  <div class="registration">
    <IconLogo class="registration__logo" />
    <form class="registration__form">
      <InputString v-model="form.email" type="email" placeholder="Электронная почта" />
      <InputString v-model="form.username" type="text" placeholder="Имя пользователя" />
      <InputString v-model="form.password" type="password" placeholder="Пароль" />
      <ButtonMain class="registration__btn" @click="registrUser">Создать аккаунт</ButtonMain>
      <p v-if="regError" class="registration__error">{{ regErrorText }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue';
import IconLogo from '@/components/icon/IconLogo.vue'
import InputString from '@/components/InputString.vue';
import { useRegistrStore } from '@/stores/registration.store';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const form = ref<{ username: string, email: string, password: string }>({ username: '', email: '', password: '' });
const registrStore = useRegistrStore();
const router = useRouter();
const regError = ref<boolean>(false)
const regErrorText = ref<string>();

async function registrUser(event: Event) {
  if (!form.value.username || !form.value.email || !form.value.password) {
    regError.value = true
    return
  }
  try {
    event.preventDefault()
    await registrStore.registrUser(form.value.username, form.value.email, form.value.password)
    router.push({ name: 'auth' });
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message?: string }>
    if (axiosError.response?.data.message) {
      regErrorText.value = axiosError.response?.data.message
      regError.value = true;
    }
  }
}

</script>

<style scoped>
.registration {
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

.registration__logo {
  width: 202px;
  height: 213px;
}

.registration__form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
