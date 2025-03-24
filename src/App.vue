<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavigationBar from './components/NavigationBar.vue';
import posthog from 'posthog-js';

posthog.init('phc_OAobrL6ThZuC3jK3h8OxcLwOIa0sUk5IkokFEcTZYZX', {
  api_host: 'https://eu.i.posthog.com',
  person_profiles: 'always',
});
</script>

<template>
  <NavigationBar />
  <RouterView />
  <FooterComponent />
</template>
