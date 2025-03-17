<script setup lang="ts">
// Interface
import type { IDashboardProvided } from '../interfaces';
import { useDashboardStore } from '../store';

// Components
import DashboardSidebarItem from './DashbordSidebarItem.vue';

// Store
const store = useDashboardStore();

onMounted(() => {
  store.dashboard_fetchFolder({}, {});
});

/**
 * @description Inject all the data and methods what we need
 */
const { dashboard_folderList, dashboard_isLoadingFolder } = inject<IDashboardProvided>('dashboard')!;
</script>
<template>
  <aside id="dashboard-sidebar" class="min-h-[70vh] gap-1 mt-1 flex flex-col w-min-full w-full">
    <!-- Search Bar -->
    <section id="dashboard-search" class="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search File Here...."
        class="text-xs border-b shadow-2xs border border-gray-20 border-b-primary p-1 w-full rounded"
      />
    </section>

    <!-- Sidebar Content -->
    <section id="dashboard-sidebar-content" class="flex flex-col gap-5 bg-accent-primary h-full">
      <section id="dashboard-sidebar-item" class="flex flex-col gap-1 p-2">
        <h1 class="font-semibold">Folder List</h1>
        <ul class="flex flex-col gap-1 mt-2">
          <DashboardSidebarItem
            v-if="!dashboard_isLoadingFolder"
            v-for="folder in dashboard_folderList"
            :key="folder.id"
            :folder="folder"
          />

          <div v-else class="flex justify-center items-center">
            <i class="pi pi-spin pi-spinner"></i>
          </div>
        </ul>
      </section>
    </section>
  </aside>
</template>
