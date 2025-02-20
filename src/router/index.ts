import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FeaturesView from '@/views/FeaturesView.vue';
import SubscribeView from '@/views/SubscribeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/features',
      name: 'Features',
      component: FeaturesView,
    },
    {
      path: '/subscribe',
      name: 'Souscrire',
      component: SubscribeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
