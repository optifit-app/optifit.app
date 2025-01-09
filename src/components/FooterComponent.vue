<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div class="column">
      <div class="brand">
        <img src="../assets/icon.png" alt="logo" height="50px" />
        <div class="text">
          <span class="brand-name">Optifit</span>
          <span class="brand-text">Gestion de tournois simple et intuitive</span>
        </div>
      </div>
    </div>
    <div class="column">
      <h2>Liens utiles</h2>
      <div class="links">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/features">Fonctionnalités</RouterLink>
        <RouterLink to="/demo">Je veux une démo</RouterLink>
      </div>
    </div>
    <div class="column">
      <h2>Suivez-nous</h2>
      <div class="links">
        <a href="https://www.instagram.com/optifit.app/" target="_blank" class="social-link">
          Instagram
          <i class="pi pi-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/103099933/admin/dashboard/"
          target="_blank"
          class="social-link"
        >
          Linkedin
          <i class="pi pi-linkedin"></i>
        </a>
        <a href="mailto:info@optifit.app" class="social-link">
          info@optifit.app
          <i class="pi pi-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #ffffff;
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1500px;
  border-radius: 20px 20px 0 0;
  border: solid 1px #e0e0e0;
  border-bottom: none;
  margin: 150px auto 0 auto;

  @media screen and (max-width: 1110px) {
    flex-direction: column;
    gap: 50px;
    padding: 50px 20px;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .brand-name {
          font-size: 1.5em;
          font-weight: 600;
        }

        .brand-text {
          font-size: 1em;
        }
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        font-size: 1rem;
        color: #000000;
        text-decoration: none;
        transition: all 100ms linear;

        &:hover {
          text-decoration: underline;
          color: #454ade;
        }
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
}
</style>
