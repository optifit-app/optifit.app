import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './root.scss';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: {
        ...Aura,
        primaryColor: '#454ade',
      },
      options: {
        darkModeSelector: false,
      },
    },
  })
  .use(createPinia())
  .use(router)
  .mount('#app');
