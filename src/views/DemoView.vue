<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Optifit - Démo';
  window.scrollTo(0, 0);
});
</script>

<template>
  <main>
    <div class="demo-section">
      <h1>Vous souhaitez <span>une démo ?</span></h1>
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
}
</style>
