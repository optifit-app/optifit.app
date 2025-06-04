<script setup lang="ts">
import Button from 'primevue/button';

const open = (url: string): void => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="brand-section">
    <img src="../assets/icon.png" alt="logo" />
    <h1 class="brand-subtitle">
      Gestion de tournois sportifs <span>simple et intuitive</span>
    </h1>
    <p class="brand-description">
      Je m'appelle Gabriel, j'ai 17 ans et je développe cette plateforme en parallèle de mon apprentissage.
      Un don, même petit, m'aide à couvrir les différents frais d'infrastructure et à continuer à faire évoluer
      ce projet. Merci pour votre soutien !
    </p>
    <Button
      label="Faire un don"
      icon="pi pi-heart"
      icon-pos="right"
      @click="open('https://don.optifit.app')"
      class="donate-button"
    />
  </div>
</template>

<style scoped lang="scss">
.brand-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0 0 0;
  gap: 20px;

  .brand-subtitle {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;

    span {
      color: var(--p-primary-color);
    }
  }

  .brand-description {
    font-size: 1.2rem;
    text-align: center;
    max-width: 60%;
    line-height: 1.5;
    margin: 0 auto;
  }

  img {
    width: 60px;
  }
}
</style>
