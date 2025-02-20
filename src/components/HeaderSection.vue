<script setup lang="ts">
import { Button } from 'primevue';
import router from '@/router';

const socraft = () => window.open('https://socraft.ch');
const dashboard = () => (window.location.href = 'https://my.optifit.app');
</script>

<template>
  <div class="header-section">
    <div class="brand">
      <img src="../assets/icon.png" alt="Logo" />
      <span>Optifit</span>
    </div>
    <h1>Gestions de tournois <span>simple et intuitive</span></h1>
    <span class="swiss-made">
      <img src="../assets/swiss-flag.png" alt="Swiss flag" />
      Swiss made
    </span>
    <span class="key-partner">
      Partenaire clé
      <img src="../assets/socraft.svg" alt="socraft" class="logo" @click="socraft()" />
    </span>
    <div class="actions">
      <Button
        label="Voir les fonctionnalités"
        icon="pi pi-sparkles"
        icon-pos="right"
        @click="router.push('/features')"
      />
      <Button
        label="Connexion à mon tableau de bord"
        icon="pi pi-sign-in"
        icon-pos="right"
        variant="outlined"
        @click="dashboard()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 0 0;

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5em;
    font-weight: 600;
    margin: 0 0 30px 0;

    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  }

  h1 {
    font-size: 3em;
    font-weight: 600;
    text-align: center;
    padding: 0 50px;

    span {
      color: var(--p-primary-color);
    }
  }

  .swiss-made {
    font-size: 1.2em;
    margin-block: 20px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 400;

    img {
      width: 25px;
      height: 25px;
      border-radius: 5px;
    }
  }

  .key-partner {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.4em;
    font-weight: 500;
    margin: 3em 0 0 0;
    align-items: center;

    .logo {
      height: 45px;
      cursor: pointer;
    }
  }

  .actions {
    margin-top: 100px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
