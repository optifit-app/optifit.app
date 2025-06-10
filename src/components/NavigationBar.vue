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
    label: 'Questions fréquentes',
    icon: 'pi pi-fw pi-question',
    command: () => (window.location.href = '/#faq'),
  },
  {
    label: 'Essayer Optifit',
    icon: 'pi pi-arrow-down',
    primary: true,
    command: () => (window.location.href = '/#try'),
  },
]);

const isActive = (pathname: string): boolean => route.path === pathname;
const refresh = () => (window.location.href = window.location.origin);
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
          :style="{
            backgroundColor: item.primary ? 'var(--p-primary-color)' : '',
            color: item.primary ? '#ffffff' : '',
            borderRadius: '10px',
            fontWeight: item.primary ? '500' : 'normal',
          }"
        >
          <span>{{ item.label }}</span>
          <i v-if="item.icon" :class="item.icon"></i>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .p-menubar.p-component {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
}

.active {
  background: var(--p-menubar-item-focus-background);
  border-radius: 10px;
  color: var(--p-primary-color);
}
</style>
