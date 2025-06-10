<script setup lang="ts">
import CarbonBadge from 'vue-carbonbadge';
</script>

<template>
  <footer class="footer">
    <div class="column">
      <div class="brand">
        <img src="../assets/icon.png" alt="logo" height="50px" />
        <div class="text">
          <span class="brand-name">Optifit</span>
          <span class="swiss-made">
            <img src="../assets/swiss-flag.png" alt="Swiss flag" />
            Swiss made
          </span>
          <span class="brand-text copyright">
            &copy; {{ new Date().getFullYear() }} Tous droits réservés.
          </span>
          <CarbonBadge class="carbon-badge" />
        </div>
      </div>
    </div>
    <div class="column">
      <h2>Liens utiles</h2>
      <div class="links">
        <a href="/#">Accueil</a>
        <a href="/#features">Fonctionnalités</a>
        <a
          href="https://calendly.com/gabriel-optifit/demo-optifit?hide_gdpr_banner=1&month=2025-04"
          target="_blank"
          >Je veux une démo</a
        >
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
      gap: 15px;

      img {
        width: 85px;
        height: 85px;
        border-radius: 5px;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .brand-name {
          font-size: 1.5em;
          font-weight: 600;
          margin-block-start: 0;
        }

        .brand-text {
          font-size: 1em;

          &.copyright {
            margin-block: 10px 0;
          }
        }

        .swiss-made {
          font-size: 1em;
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 400;

          img {
            width: 15px;
            height: 15px;
            border-radius: 5px;
          }
        }

        .carbon-badge {
          margin: 10px 0 0 0;
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
