<template>
  <div class="brand-section">
    <img src="../assets/icon.png" alt="logo" />
    <h1 class="brand-subtitle">
      Gestion de tournois sportifs <span>simple et intuitive</span>
    </h1>
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

  img {
    width: 60px;
  }
}
</style>
