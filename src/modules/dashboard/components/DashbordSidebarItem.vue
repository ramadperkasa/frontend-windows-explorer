<script setup lang="ts">
import { ref } from 'vue';

import type { IDashboardProvided, IFolderList } from '../interfaces';

defineProps<{ folder: IFolderList }>();

/**
 * @description Inject all the data and methods what we need
 */
const { dashboard_selectedMenu } = inject<IDashboardProvided>('dashboard')!;

const isOpen = ref(false);

import blue from '@/app/assets/icons/Folder_Blue.png';
import green from '@/app/assets/icons/Folder_Green.png';
import check from '@/app/assets/icons/Folder_Check.png';
import contacts from '@/app/assets/icons/Folder_Contacts.png';
import documents from '@/app/assets/icons/Folder_Documents.png';
import downloads from '@/app/assets/icons/Folder_Downloads.png';
import favourites from '@/app/assets/icons/Folder_Favourites.png';
import music from '@/app/assets/icons/Folder_Music.png';
import pictures from '@/app/assets/icons/Folder_Pictures.png';
import videos from '@/app/assets/icons/Folder_Videos.png';

const listIcon = [blue, green, check, contacts, documents, downloads, favourites, music, pictures, videos];

const getRandomIcon = () => {
  return listIcon[Math.floor(Math.random() * listIcon.length)];
};
</script>

<template>
  <li class="flex flex-col gap-1">
    <div
      class="cursor-pointer text-sm flex items-center justify-between space-x-2 p-2 rounded-md hover:bg-gray-200"
      :class="dashboard_selectedMenu === folder.id ? 'text-primary border-r-4 border-primary bg-white' : ''"
      @click="
        isOpen = !isOpen;
        dashboard_selectedMenu = folder.id;
      "
    >
      <span class="font-medium flex gap-2">
        <img :src="getRandomIcon()" class="h-4 w-4" />

        {{ folder.name }}</span
      >

      <span v-if="folder.children.length" class="text-xs">
        <i :class="isOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"></i>
      </span>
    </div>

    <ul v-show="isOpen" class="ml-1 border-l border-gray-300 pl-2">
      <DashbordSidebarItem v-for="child in folder.children" :key="child.id" :folder="child" />
    </ul>
  </li>
</template>
