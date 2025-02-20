<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { InputText, Button, Message } from 'primevue';

const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
const error = ref<string>('');

onMounted(() => {
  document.title = 'Optifit - Souscrire';
  window.scrollTo(0, 0);
});

const handleSubmit = async (): Promise<void> => {
  if (!email.value || !password.value || !confirmPassword.value) {
    error.value = 'Vous devez remplir tous les champs.';
    return;
  }

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    error.value = 'L\'adresse e-mail n\'est pas valide.';
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Le mot de passe ne correspond pas à sa confirmation.';
    return;
  }

  error.value = '';
};
</script>

<template>
  <main>
    <div class="subscribe-section">
      <h1>Commencez à utiliser Optifit <span>dès maintenant</span></h1>
      <div class="pricing-informations">
        <h2><span>7</span> jours gratuits</h2>
        <span>Puis CHF 50.- par année</span>
        <span class="small">(tarif de lancement)</span>
      </div>
      <div class="register-form">
        <h3>Tout d'abord, créons votre compte</h3>
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

  .register-form {
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
