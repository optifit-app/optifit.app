<script lang="ts" setup>
import { ref } from 'vue';
import { Carousel } from 'primevue';
import ashbLogo from '@/assets/ASHB.png';

interface Supporter {
  name: string;
  logo: string;
  website: string;
}

const supporters: Supporter[] = [
  {
    name: 'AS Haute-Broye',
    logo: ashbLogo,
    website: 'https://www.ashb.ch/',
  },
];

const responsiveOptions = ref([
  {
    breakpoint: '4000px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '1790px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1115px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '800px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="supporters-section">
    <h2>Ils nous font confiance</h2>
    <Carousel
      :value="supporters"
      circular
      autoplay
      :autoplay-interval="4000"
      :responsive-options="responsiveOptions"
      :show-indicators="false"
      class="custom-carousel"
    >
      <template #item="slotProps">
        <a :href="slotProps.data.website" target="_blank">
          <img
            :src="slotProps.data.logo"
            :alt="slotProps.data.name"
            class="supporter-logo"
            height="50px"
          />
        </a>
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.supporters-section {
  text-align: center;
  margin: 100px 0 50px 0;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .supporter-logo {
    margin: 0 10px;
  }
}

.custom-carousel {
  max-width: 60%;
  margin: 50px auto;

  @media screen and (max-width: 455px) {
    max-width: 100%;
  }
}
</style>
