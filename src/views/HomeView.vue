<script setup lang="ts">
import HeaderSection from '@/components/HeaderSection.vue';
import SupportersSection from '@/components/SupportersSection.vue';
import { onMounted } from 'vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import SubscribeSection from '@/components/SubscribeSection.vue';
import BrandSection from '@/components/BrandSection.vue';

onMounted(() => {
  document.title = 'Optifit - Gestion de tournois sportifs';
  window.scrollTo(0, 0);
});
</script>

<template>
  <main>
    <HeaderSection />
    <FeaturesSection />
    <SupportersSection />
    <SubscribeSection />
    <BrandSection />
  </main>
</template>
