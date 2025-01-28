import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FeaturesView from '@/views/FeaturesView.vue';
import DemoView from '@/views/DemoView.vue';
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
      path: '/demo',
      name: 'Demo',
      component: DemoView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ],
});

export default router;
