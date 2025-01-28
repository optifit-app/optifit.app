<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '@/router';
import { Button } from 'primevue';

const showNotFoundMessage = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    const params = window.location.pathname.split('/');

    if (params[1] === 'ranking') {
      window.location.href = `https://my.optifit.app/${params[1]}/${params[2]}`;
    } else {
      showNotFoundMessage.value = true;
    }
  }, 1500);
});
</script>

<template>
  <main>
    <div class="redirection" v-if="!showNotFoundMessage">redirection...</div>
    <div v-else>
      <span>erreur 404</span>
      <h1>Cette page n'existe pas !</h1>
      <Button
        label="Accueil"
        icon="pi pi-arrow-left"
        icon-pos="left"
        variant="outlined"
        @click="router.push('/')"
        style="margin: 20px 0 0 0"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;

  .redirection {
    font-size: 1.5rem;
    font-weight: 400;
  }

  span {
    font-size: 1.5rem;
    opacity: 0.5;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
  }
}
</style>
