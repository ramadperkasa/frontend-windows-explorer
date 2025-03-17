<script setup lang="ts">
import { IDashboardProvided } from '../interfaces';

/**
 * @description Inject all the data and methods what we need
 */
const { dashboard_isLoadingFile, dashboard_fileList } = inject<IDashboardProvided>('dashboard')!;

import notes from '@/app/assets/icons/Notes.png';
import photos from '@/app/assets/icons/Photos.png';
import programs from '@/app/assets/icons/Programs.png';
import audio from '@/app/assets/icons/Audio.png';
import blank from '@/app/assets/icons/Blank.png';

const listIcon = [notes, photos, programs, audio, blank];

const getRandomIcon = () => {
  return listIcon[Math.floor(Math.random() * listIcon.length)];
};
</script>

<template>
  <section id="dashboard-main-content" class="p-4">
    <section id="dashboard-main-content-header" class="flex items-center justify-between">
      <h1 class="font-semibold">File List</h1>
    </section>

    <section id="dashboard-main-content-body" class="flex flex-col gap-1 mt-2">
      <div v-if="!dashboard_isLoadingFile" class="grid grid-cols-4 gap-2">
        <div
          v-for="file in dashboard_fileList"
          :key="file.id"
          class="flex flex-col items-center justify-center gap-1 p-2 rounded-md bg-white shadow-2xs"
        >
          <img :src="getRandomIcon()" class="h-10 w-10" />

          <span class="text-xs truncate">{{ file.name }}</span>
        </div>
      </div>

      <div v-else>
        <i class="pi pi-spin pi-spinner"></i>
      </div>
    </section>
  </section>
</template>
