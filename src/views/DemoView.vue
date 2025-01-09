<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Optifit - Démo';
  window.scrollTo(0, 0);
});

onMounted(() => {
  document.title = 'Optifit - Démo';
  window.scrollTo(0, 0);

  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <main>
    <div class="demo-section">
      <h1>Vous souhaitez <span>une démo ?</span></h1>
      <h2>Organisons ça !</h2>
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/gabriel-optifit/demo-optifit?hide_gdpr_banner=1"
        style="height: 700px"
      ></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.demo-section {
  margin: 100px 0 0 0;

  h1 {
    font-size: 2.3rem;
    text-align: center;
    font-weight: 600;

    span {
      color: var(--p-primary-color);
    }
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    margin: 20px 0;
  }
}
</style>
