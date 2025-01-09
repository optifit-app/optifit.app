<script setup lang="ts">
import { onMounted } from 'vue';
import { Button } from 'primevue';
import router from '@/router';

onMounted(() => {
  document.title = 'Optifit - Fonctionnalités';
  window.scrollTo(0, 0);
});
</script>

<template>
  <main>
    <div class="features-section">
      <h1>Découvrez les <span>fonctionnalités</span></h1>
      <div class="features">
        <div class="feature">
          <div class="feature-text">
            <h2>Génération des <span>matchs</span> intelligente</h2>
            <p>
              Les matchs sont générés au fur et à mesure des inscriptions des équipes pour que
              toutes les équipes s'affrontent, avec une assignation automatique des terrains, les
              matchs sont organisés avec une répartition fluide, évitant que les équipes jouent deux
              matchs consécutifs.
            </p>
          </div>
          <img src="../assets/feature-1.png" alt="Matchs" class="feature-image" />
        </div>
        <div class="feature">
          <img src="../assets/feature-2.png" alt="Matchs" class="feature-image" />
          <div class="feature-text">
            <h2>Résultats en <span>temps réel</span></h2>
            <p>
              Les spectateurs ont accès aux résultats en temps réel grâce à une fiche de tournoi
              contenant un QR Code. En le scannant, ils peuvent consulter instantanément le
              classement, les matchs et toutes les informations du tournoi en direct.
            </p>
          </div>
        </div>
        <div class="feature">
          <div class="feature-text">
            <h2>Attribution de notes <span>fair-play</span> aux équipes pendant les matchs</h2>
            <p>
              Option configurable et facultative lors de la création du tournoi, les équipes peuvent
              recevoir des notes de fair-play pendant les matchs. Ces notes, comptabilisées sous
              forme de moyenne sur 5, s’intègrent dans la comptabilisation pour le classement final.
            </p>
          </div>
          <img src="../assets/feature-3.png" alt="Matchs" class="feature-image" />
        </div>
      </div>
      <div class="call-to-action">
        <h2>Ça vous intéresse ?</h2>
        <Button
          label="Je veux une démo"
          icon="pi pi-arrow-right"
          icon-pos="right"
          @click="router.push('/demo')"
        />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.features-section {
  margin: 100px 0 0 0;

  h1 {
    font-size: 2.3rem;
    text-align: center;
    font-weight: 600;

    span {
      color: var(--p-primary-color);
    }
  }

  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 70%;
    margin: 50px auto;

    @media screen and (max-width: 1880px) {
      width: 85%;
    }

    @media screen and (max-width: 1560px) {
      width: 95%;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 100px;

      @media screen and (max-width: 1385px) {
        flex-direction: column;
        gap: 50px;
      }

      .feature-text {
        h2 {
          font-size: 1.8rem;
          font-weight: 500;

          span {
            color: var(--p-primary-color);
          }
        }

        p {
          font-size: 1.2rem;
          margin-block: 20px;
          text-align: justify;
        }
      }

      .feature-image {
        width: 100%;
        max-width: 700px;

        &:first-child {
          width: auto;
          height: 700px;
        }
      }
    }
  }

  .call-to-action {
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }
  }
}
</style>
