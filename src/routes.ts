import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/views/StartView.vue'),
    },
    {
      path: '/register',
      name: 'reg',
      component: () => import('@/views/RegistrationView.vue'),
    },
    {
      path: '/login',
      name: 'auth',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('@/views/StatView.vue'),
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const publicRoutes = ['start', 'reg', 'auth'];

  const isPublic = publicRoutes.includes(String(to.name));
  const isAuthenticated = Boolean(authStore.getToken);

  // Авторизованный пользователь не должен попадать на страницы входа/регистрации
  if (isAuthenticated && isPublic) {
    return { name: 'main' };
  }

  // Неавторизованный пользователь пытается открыть приватную страницу
  if (!isAuthenticated && !isPublic) {
    return { name: 'auth' };
  }

  // Все проверки пройдены — разрешаем переход
  return true;
});
