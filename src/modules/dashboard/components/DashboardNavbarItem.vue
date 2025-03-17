<script setup lang="ts">
const props = defineProps<{
  title: string;
  active: boolean;
}>();
</script>

<template>
  <section
    id="dashboard-navbar-item"
    class="px-1.5 rounded flex items-center justify-between py-0.5 cursor-pointer active:bg-primary/25"
    :class="props.active ? 'bg-primary/30' : 'hover:bg-accent-primary'"
  >
    <div class="flex gap-1">
      <img src="@/app/assets/icons/Folder.png" class="h-4 w-4" />

      <span class="text-xs text-text-gray"> {{ props.title }} </span>
    </div>

    <i class="pi pi-times !text-xs w-3 !text-text-gray"></i>
  </section>
</template>
