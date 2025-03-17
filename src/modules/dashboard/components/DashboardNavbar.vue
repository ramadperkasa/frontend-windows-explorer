<script setup lang="ts">
//Components
import DashboardNavbarItem from './DashboardNavbarItem.vue';

const list = ['Home', 'Users', 'Settings', 'Profile'];
</script>

<template>
  <section id="dashboard-navbar" class="flex justify-between gap-1">
    <section id="dashboard-navbar-item" class="p-1 grid grid-cols-5 gap-1">
      <DashboardNavbarItem v-for="item in list" :key="item" :title="item" :active="item === 'Home'" />
    </section>

    <div class="gap-1 inline-flex h-fit">
      <!-- apple like Button maximize, minimize, close -->
      <button class="cursor-pointer rounded-full p-1.5 bg-red-500"></button>
      <button class="cursor-pointer rounded-full p-1.5 bg-yellow-500"></button>
      <button class="cursor-pointer rounded-full p-1.5 bg-green-500"></button>
    </div>
  </section>
</template>
