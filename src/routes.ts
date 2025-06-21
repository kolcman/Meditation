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
      component: () => import('@/views/StatView.vue'),
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.name === 'start') {
    return;
  }
  if (!authStore.getToken) {
    return { name: 'auth' };
  }
});
