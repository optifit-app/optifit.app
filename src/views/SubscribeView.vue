<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { InputText, Button, Message, ProgressSpinner } from 'primevue';

const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
const error = ref<string>('');
const step = ref<number>(0);
const loading = ref<boolean>(false);
const paymentLink = ref<string>('');
const showSuccess = ref<boolean>(false);
const successMessage = ref<string>('Redirection vers la page de connexion dans 7 secondes...');

const isLocal = window.location.origin === 'http://localhost:5173';
const isPreview = window.location.origin === 'https://preview.optifit.app';

const apiBaseUrl = isLocal
  ? 'http://localhost:8000/api'
  : isPreview
    ? 'https://qa.my.optifit.app/api'
    : 'https://my.optifit.app/api';

onMounted(() => {
  document.title = 'Optifit - Souscrire';
  window.scrollTo(0, 0);

  if (window.location.search === '?success=true') {
    showSuccess.value = true;

    let timer = 7;
    const interval = setInterval(() => {
      timer--;

      successMessage.value = `Redirection vers la page de connexion dans ${timer} seconde${timer > 1 ? 's' : ''}...`;

      if (timer === 0) {
        successMessage.value = 'Redirection...';
        clearInterval(interval);

        setTimeout(() => {
          window.location.href =
            isPreview || isLocal ? 'https://qa.my.optifit.app/' : 'https://my.optifit.app/';
        }, 1000);
      }
    }, 1000);
  }
});

const handleSubmit = async (): Promise<void> => {
  if (!email.value || !password.value || !confirmPassword.value) {
    error.value = 'Vous devez remplir tous les champs.';
    return;
  }

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    error.value = "L'adresse e-mail n'est pas valide.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Le mot de passe ne correspond pas à sa confirmation.';
    return;
  }

  error.value = '';
  loading.value = true;

  const response = await fetch(`${apiBaseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      origin: window.location.origin,
    }),
  });
  const responseData = await response.json();

  if (responseData.status === 409) {
    error.value = 'Un compte avec cette adresse e-mail existe déjà.';
    loading.value = false;
    return;
  } else if (responseData.status === 400) {
    error.value = 'Ce mot de passe est trop faible.';
    loading.value = false;
    return;
  } else {
    step.value = 1;
    paymentLink.value = responseData.paymentLink;
    loading.value = false;
  }
};

const handleOpenPayment = (): Window | null => window.open(paymentLink.value, '_blank');
</script>

<template>
  <main>
    <div class="subscribe-section" v-if="showSuccess">
      <div class="step-card">
        <img alt="logo" src="@/assets/icon.png" width="50" height="50" />
        <h3 style="margin: 10px 0">Merci pour votre <span>souscription</span> !</h3>
        <Message severity="success" style="margin: 0 0 10px 0">
          Votre compte a été créé avec succès, vous pouvez dès maintenant vous connecter.
        </Message>
        <p>{{ successMessage }}</p>
      </div>
    </div>
    <div class="subscribe-section" v-if="!showSuccess">
      <h1>Commencez à utiliser Optifit <span>dès maintenant</span></h1>
      <div class="pricing-informations">
        <h2><span>7</span> jours gratuits</h2>
        <span>Puis CHF 50.- par année</span>
        <span class="small">(tarif de lancement)</span>
      </div>
      <div class="step-card loading" v-if="loading">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" />
      </div>
      <div class="step-card" v-if="step === 0 && !loading">
        <h3>Tout d'abord, créons votre compte.</h3>
        <Message v-if="error.length" severity="error" style="margin: 0 0 10px 0">
          {{ error }}
        </Message>
        <InputText v-model="email" placeholder="Adresse e-mail" />
        <InputText v-model="password" type="password" placeholder="Mot de passe" />
        <InputText
          v-model="confirmPassword"
          type="password"
          placeholder="Répétez votre mot de passe"
        />
        <Button label="Suivant" icon="pi pi-arrow-right" icon-pos="right" @click="handleSubmit" />
      </div>
      <div class="step-card" v-if="step === 1 && !loading">
        <Message severity="success" style="margin: 0 0 10px 0">
          Votre compte a été créé avec succès !
        </Message>
        <h3>
          Vous pouvez maintenant souscrire à l'abonnement annuel pour commencer à utiliser Optifit.
        </h3>
        <Button
          label="Aller au paiement"
          icon="pi pi-arrow-right"
          icon-pos="right"
          @click="handleOpenPayment"
        />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.subscribe-section {
  margin: 100px 0 0 0;

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
      font-weight: 500;
      margin-block: 0;

      span {
        font-size: 2.5rem;
        font-weight: 600;
        opacity: 1;
        color: var(--p-primary-color);
      }
    }

    span {
      font-size: 1.1rem;
      font-weight: 400;
      margin-block: 0;
      opacity: 0.5;

      &.small {
        font-size: 0.9rem;
      }
    }
  }

  .step-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);
    width: 40%;
    margin: 40px auto 0 auto;

    &.loading {
      min-height: 250px;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-block: 0 10px;
    }

    .p-button {
      margin-top: 10px;
    }
  }
}
</style>
