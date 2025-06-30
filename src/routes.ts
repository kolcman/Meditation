import { createRouter, createWebHistory } from 'vue-router';
import { useLoginStore } from './stores/login.store';
import { useCounterStore } from './stores/counter.store';

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

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore();
  const counterStore = useCounterStore();

  const publicRoutes = ['start', 'reg', 'auth'];
  const isPublic = publicRoutes.includes(String(to.name));
  const isAuthenticated = Boolean(loginStore.getToken);

  if (isAuthenticated && isPublic) {
    return next({ name: 'meditations' });
  }

  if (!isAuthenticated && !isPublic) {
    return next({ name: 'auth' });
  }

  if (to.name === 'timer' && !counterStore.isStarted) {
    return next({ name: 'meditations' });
  }

  return next();
});
