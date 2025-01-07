<script setup lang="ts">
import { Button } from 'primevue';
</script>

<template>
  <div class="header-section">
    <h1>Gestions de tournois <span>simple et intuitive</span></h1>
    <span class="swiss-made">
      <img src="../assets/swiss-flag.png" alt="Swiss flag" />
      Swiss made
    </span>
    <Button label="Découvrir" />
  </div>
</template>

<style scoped lang="scss">
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 0 0;

  h1 {
    font-size: 3em;
    font-weight: 600;

    span {
      color: #454ade;
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
}
</style>
