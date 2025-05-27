<template>
  <div class="features-section" id="features">
    <h1>Laissez la complexité <span>de côté</span></h1>
    <p>
      <span>Optifit</span> vous aide à gérer vos tournois de manière simple et efficace. Grâce à notre
      interface intuitive, créez ou importez simplement vos équipes, les matchs et les phases de
      votre tournoi sont générés et vous n'avez plus qu'à vous concentrer sur l'essentiel : le
      plaisir de vos participants!
    </p>
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
        <img src="../assets/feature-2.png" alt="Matchs" class="feature-image" />
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
        <img src="../assets/feature-4.png" alt="Matchs" class="feature-image" />
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
        <img src="../assets/feature-6.png" alt="Matchs" class="feature-image" />
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

    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
      padding: 0 20px;
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 60%;
    color: #666666;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 845px) {
      max-width: 80%;
    }

    span {
      color: var(--p-primary-color);
      font-weight: 600;
    }
  }

  .features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 400px;
    gap: 10px;
    margin: 60px 0 0 0;

    @media screen and (max-width: 2120px) {
      padding: 0 250px;
    }

    @media screen and (max-width: 1680px) {
      padding: 0 100px;
    }

    @media screen and (max-width: 900px) {
      padding: 0 50px;
    }

    @media screen and (max-width: 600px) {
      padding: 0 5px;
    }

    @media screen and (max-width: 1300px) {
      flex-direction: column;
    }

    .feature {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: solid 1px #e0e0e0;
      border-radius: 10px;
      flex: 1;
      min-width: 49%;
      overflow: hidden;

      .feature-text {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 40px 30px 40px;

        h2 {
          font-size: 1.9rem;
          font-weight: 600;

          @media screen and (max-width: 600px) {
            font-size: 1.3rem;
          }
        }

        p {
          font-size: 1rem;
          color: #666666;
          margin: 0;
          text-align: left;
          max-width: 100%;
        }

        ul {
          list-style-type: none;
          padding-left: 0;

          li {
            font-size: 1rem;
            color: #666666;
            margin-bottom: 10px;
          }
        }
      }

      .feature-image {
        width: 80%;
        margin-left: auto;

        @media screen and (max-width: 980px) {
          width: 100%;
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
