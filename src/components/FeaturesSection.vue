<template>
  <div class="features-section" id="features">
    <h1>Laissez la complexité <span>de côté</span></h1>
    <div class="features">
      <div class="feature">
        <img src="../assets/feature-1.png" alt="Matchs" class="feature-image" />
        <div class="feature-text">
          <h2>Créez vos équipes en quelques clics</h2>
          <p>
            Ajoutez manuellement chaque équipe avec une interface fluide ou importez un fichier
            Excel pré-rempli. <span>Gagnez du temps et restez organisé!</span>
          </p>
          <ul>
            <li>➕ Ajout intuitif d’équipes par groupe</li>
            <li>🖍️ Personnalisez le nom et la couleur</li>
            <li>📥 Import d’équipes depuis Excel</li>
          </ul>
        </div>
      </div>
      <div class="feature">
        <div class="feature-text">
          <h2>Génération intelligente des matchs</h2>
          <p>
            Organisez vos rencontres en quelques secondes grâce à notre algorithme de génération
            automatique. <span>Plus besoin de galérer avec des tableaux Excel!</span>
          </p>
          <ul>
            <li>🗓️ Calendrier sans conflit, généré automatiquement</li>
            <li>🖨️ Impression facile des feuilles de match</li>
            <li>🏟️ Gestion optimisée des terrains</li>
          </ul>
        </div>
        <img src="../assets/feature-2.png" alt="Matchs" class="feature-image" />
      </div>
      <div class="feature">
        <img src="../assets/feature-3.png" alt="Matchs" class="feature-image" />
        <div class="feature-text">
          <h2>Partage instantané des résultats</h2>
          <p>
            Offrez à vos participants, spectateurs ou parents un accès <span>en temps réel</span> au
            classement et aux scores du tournoi.
          </p>
          <ul>
            <li>📷 Un QR code est généré pour chaque tournoi</li>
            <li>🌐 Accès direct à la page publique sans inscription</li>
            <li>🔁 Mise à jour en temps réel des résultats</li>
          </ul>
        </div>
      </div>
      <div class="feature">
        <div class="feature-text">
          <h2>Gérez les pauses à votre rythme</h2>
          <p>
            <span>Planifiez facilement des pauses</span> entre les matchs pour midi, reposer les
            équipes ou gérer des imprévus.
          </p>
          <ul>
            <li>➕ Ajoutez autant de pauses que vous le souhaitez</li>
            <li>⏱️ Définissez l’heure de début et de fin pour chaque pause</li>
            <li>🧠 Adaptation automatique du planning des matchs autour des pauses</li>
          </ul>
        </div>
        <img src="../assets/feature-4.png" alt="Matchs" class="feature-image" />
      </div>
      <div class="feature">
        <img src="../assets/feature-5.png" alt="Matchs" class="feature-image" />
        <div class="feature-text">
          <h2>Personnalisez votre tournoi avec votre logo</h2>
          <p>
            Affichez fièrement l’identité de votre club ou de votre événement
            <span>en ajoutant votre propre icône ou logo</span> à votre tournoi.
          </p>
          <ul>
            <li>🖼️ Ajoutez votre logo en quelques secondes</li>
            <li>🧠 Renforcez la visibilité de votre club ou sponsor</li>
            <li>📲 Icône visible sur la page publique du tournoi (résultats, classement, QR code, etc.)</li>
          </ul>
        </div>
      </div>
      <div class="feature">
        <div class="feature-text">
          <h2>Collaborez avec votre staff en toute simplicité</h2>
          <p>
            Donnez un accès sécurisé à d'autres personnes <span>pour vous aider à gérer le tournoi</span>,
            notamment la saisie des scores ou la supervision des matchs.
          </p>
          <ul>
            <li>👤 Invitez d'autres membres du staff en ajoutant simplement leur adresse e-mail</li>
            <li>🤝 Parfait pour les tournois organisés à plusieurs clubs ou bénévoles</li>
          </ul>
        </div>
        <img src="../assets/feature-6.png" alt="Matchs" class="feature-image" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.features-section {
  margin: 150px 0 0 0;
  padding: 100px 0;
  background-color: #f1f1f1;

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
    gap: 30px;
    width: 80%;
    margin: 0 auto 50px auto;

    @media screen and (max-width: 1880px) {
      width: 85%;
    }

    @media screen and (max-width: 1560px) {
      width: 95%;
    }

    .feature {
      display: flex;
      align-items: center;

      @media screen and (max-width: 1385px) {
        flex-direction: column;
        gap: 50px;
      }

      .feature-text {
        h2 {
          font-size: 1.6rem;
          font-weight: 500;
        }

        p {
          font-size: 1.1rem;
          margin-block: 20px;
          text-align: justify;

          span {
            color: var(--p-primary-color);
          }
        }

        ul {
          font-size: 1rem;
          margin-block: 20px;
          list-style-type: none;
          padding-left: 0;

          li {
            margin-bottom: 10px;
            font-weight: 500;
          }
        }
      }

      .feature-image {
        width: 100%;
        max-width: 800px;

        &:first-child {
          max-width: unset;
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
<script setup lang="ts">
</script>
