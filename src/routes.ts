import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/StartView.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/stats',
      component: () => import('@/views/StatView.vue'),
    },
  ],
  history: createWebHistory(),
});
