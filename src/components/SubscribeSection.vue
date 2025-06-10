<script setup lang="ts">
import { onMounted } from 'vue';
import Button from 'primevue/button';

const isPreview = window.location.origin === 'https://preview.optifit.app';

const appUrl = isPreview ? 'https://qa.my.optifit.app' : 'https://my.optifit.app';

onMounted(() => {
  document.title = 'Optifit - Souscrire';
  window.scrollTo(0, 0);
});

const open = () => window.open(appUrl + '/signin', '_blank');
</script>

<template>
  <div class="subscribe-section" id="try">
    <h1>Commencez à utiliser Optifit <span>dès maintenant</span></h1>
    <div class="pricing-informations">
      <h2>1er tournoi <span>gratuit</span></h2>
      <span class="price">
        puis <span class="currency">CHF</span> <span class="value">100.-</span>
        <span class="period">par année</span>
      </span>
      <Button
        variant="primary"
        label="Commencer maintenant"
        icon="pi pi-arrow-right"
        icon-pos="right"
        class="start"
        @click="open()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscribe-section {
  padding: 100px 0;
  background-color: #f1f1f1;

  h1 {
    font-size: 2.1rem;
    text-align: center;
    font-weight: 600;

    span {
      color: var(--p-primary-color);
    }
  }

  .pricing-informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 40px 0 50px 0;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-block: 0;

      span {
        color: var(--p-primary-color);
        font-weight: 600;
        font-size: 1.6rem;
      }
    }

    .price {
      font-size: 1.2rem;
      color: #666666;
      display: flex;
      align-items: center;
      gap: 4px;

      .currency {
        font-weight: 600;
        margin-left: 10px;
        color: #282828;
      }

      .value {
        font-size: 2.5rem;
        font-weight: 600;
        margin-left: 4px;
        color: var(--p-primary-color);
      }

      .period {
        font-size: 1.2rem;
        font-weight: 600;
        margin-left: 3px;
        color: #282828;
      }
    }
  }

  .start {
    margin: 30px 0 0 0;
  }
}
</style>
