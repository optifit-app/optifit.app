<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>

<template>
  <div class="questions-section" id="faq">
    <h2>Questions fréquentes</h2>
    <div class="questions">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Qu'est-ce que Optifit stocke comme données ?</AccordionHeader>
          <AccordionContent>
            <p class="m-0" style="line-height: 1.5">
              <strong
                >Optifit stocke uniquement les données nécessaires à la gestion de votre
                tournoi.</strong
              >
              Cela inclut les informations sur les équipes, les matchs et les résultats. Nous ne
              stockons pas d'informations personnelles sensibles telles que vos informations de
              facturation.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Où sont les données de nos tournois ?</AccordionHeader>
          <AccordionContent>
            <p class="m-0" style="line-height: 1.5">
              Les données sont hébergées en Suisse, dans les
              <strong>data centers Google à Zurich</strong>.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Qui développe Optifit ?</AccordionHeader>
          <AccordionContent>
            <p class="m-0" style="line-height: 1.5">
              Je m'appelle
              <a href="https://www.linkedin.com/in/gabriel-dovat-7a7830231/" target="_blank"
                >Gabriel</a
              >, j’ai 17 ans et je suis originaire de la région de Lavaux-Oron, dans le canton de
              Vaud.<br />
              Je développe Optifit seul, avec l’objectif de proposer une solution simple et efficace
              pour gérer des tournois sportifs.<br />
              Je suis accompagné par <a href="https://socraft.ch" target="_blank">socraft</a>, une
              agence de conseil qui m’aide à faire évoluer le projet.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<style scoped lang="scss">
.questions-section {
  background-color: #ffffff;
  padding: 100px 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
  }

  .questions {
    margin: 50px auto 0 auto;
    width: 50%;

    @media screen and (max-width: 1060px) {
      width: 90%;
    }
  }
}

a {
  font-weight: 500;
  color: var(--p-primary-color);
}
</style>
