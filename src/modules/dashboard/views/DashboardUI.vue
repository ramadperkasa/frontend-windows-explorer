<script setup lang="ts">
// Components
import DashboardMainContent from '../components/DashboardMainContent.vue';
import DashboardNavbar from '../components/DashboardNavbar.vue';
import DashboardSidebar from '../components/DashboardSidebar.vue';

// Services
import { useDashboardService } from '../services/useDashboard.service';

/**
 * @description Destructure all the data and methods what we need
 */
const {
  dashboard_folderList,
  dashboard_isLoadingFolder,
  dashboard_fileList,
  dashboard_isLoadingFile,
  dashboard_selectedMenu,
} = useDashboardService();

/**
 * @description Provide all the data and methods what we need
 */
provide('dashboard', {
  dashboard_folderList,
  dashboard_isLoadingFolder,
  dashboard_fileList,
  dashboard_isLoadingFile,
  dashboard_selectedMenu,
});
</script>

<template>
  <section id="dashboard" class="bg-white p-2">
    <DashboardNavbar />

    <section id="dashboard-content" class="grid grid-cols-12 w-full">
      <DashboardSidebar class="col-span-3" />
      <DashboardMainContent class="col-span-9" />
    </section>
  </section>
</template>
