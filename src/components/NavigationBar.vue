<script setup lang="ts">
import { ref } from 'vue';
import { Menubar } from 'primevue';
import router from '@/router';

const items = ref([
  {
    label: 'Accueil',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Fonctionnalités',
    icon: 'pi pi-envelope',
    command: () => router.push('/features'),
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => router.push('/contact'),
  },
  {
    label: 'Connexion',
    icon: 'pi pi-user',
    command: () => window.open('https://optifit.app', '_blank'),
  },
]);

const handleRefresh = (): string => (window.location.href = window.location.origin);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img
          src="../assets/icon.png"
          alt="logo"
          height="40px"
          style="cursor: pointer"
          @click="handleRefresh"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root },
            ]"
          ></i>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;

  .p-menubar.p-component {
    background-color: #ffffff;
    width: 100%;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    border-radius: 20px;
  }
}
</style>
