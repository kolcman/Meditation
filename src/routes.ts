import { createRouter, createWebHistory } from 'vue-router';
import { useLoginStore } from './stores/login.store';

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
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/meditations',
      name: 'meditations',
      component: () => import('@/views/MeditationsView.vue'),
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('@/views/MeditationTimerView.vue'),
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
  const loginStore = useLoginStore();
  const publicRoutes = ['start', 'reg', 'auth'];
  const isPublic = publicRoutes.includes(String(to.name));
  const isAuthenticated = Boolean(loginStore.getToken);

  if (isAuthenticated && isPublic) {
    return { name: 'meditations' };
  }
  if (!isAuthenticated && !isPublic) {
    return { name: 'auth' };
  }
  return true;
});
