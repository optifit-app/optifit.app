<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Menubar } from 'primevue';

const router = useRouter();
const route = useRoute();

const items = ref([
  {
    label: 'Accueil',
    icon: 'pi pi-home',
    pathname: '/',
    command: () => router.push('/'),
  },
  {
    label: 'Fonctionnalités',
    icon: 'pi pi-envelope',
    pathname: '/features',
    command: () => router.push('/features'),
  },
  {
    label: 'Démo',
    icon: 'pi pi-envelope',
    pathname: '/demo',
    command: () => router.push('/demo'),
  },
  {
    label: 'Connexion',
    icon: 'pi pi-user',
    command: () => window.open('https://optifit.app', '_blank'),
  },
]);

const isActive = (pathname: string): boolean => route.path === pathname;
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
          @click="() => router.push('/')"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          :class="['flex items-center', { active: isActive(item.pathname) }]"
          v-bind="props.action"
        >
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
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .p-menubar.p-component {
    background-color: #ffffff;
    width: 100%;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    border-radius: 0 0 20px 20px;
    border-top: none;
  }
}

.active {
  background: var(--p-menubar-item-focus-background);
  border-radius: 10px;
  color: var(--p-primary-color);
}
</style>
