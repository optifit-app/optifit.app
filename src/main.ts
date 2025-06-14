import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './root.scss';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import posthog from 'posthog-js';

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#454ade20',
      100: '#454ade50',
      200: '#454ade',
      300: '#454ade',
      400: '#454ade',
      500: '#454ade',
      600: '#454ade',
      700: '#454ade',
      800: '#454ade',
      900: '#454ade',
      950: '#454ade',
    },
  },
});

posthog.init('phc_nWTs5bs2keWqxj1L8eGmQZ6MgGnNlf8Qbz6YAc0YEtN', {
  api_host: 'https://eu.i.posthog.com',
});

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset,
      options: {
        darkModeSelector: false,
      },
    },
  })
  .use(createPinia())
  .use(router)
  .provide('posthog', posthog)
  .mount('#app');
