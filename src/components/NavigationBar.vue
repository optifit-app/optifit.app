<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Menubar } from 'primevue';

const route = useRoute();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    command: () => (window.location.href = '/#'),
  },
  {
    label: 'Fonctionnalités',
    icon: 'pi pi-fw pi-sparkles',
    command: () => (window.location.href = '/#features'),
  },
  {
    label: 'Tarifs',
    icon: 'pi pi-fw pi-dollar',
    command: () => (window.location.href = '/#subscribe'),
  },
  {
    label: 'Connexion',
    icon: 'pi pi-sign-in',
    command: () =>
      window.open(
        window.location.origin === 'https://preview.optifit.app'
          ? 'https://qa.my.optifit.app'
          : 'https://my.optifit.app',
        '_blank',
      ),
  },
]);

const isActive = (pathname: string): boolean => route.path === pathname;
const refresh = () => window.location.href = window.location.origin;
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
          @click="refresh()"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          :class="['flex items-center', { active: isActive(item.pathname) }]"
          v-bind="props.action"
        >
          <i v-if="item.icon" :class="['pi', item.icon]"></i>
          <span>{{ item.label }}</span>
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
