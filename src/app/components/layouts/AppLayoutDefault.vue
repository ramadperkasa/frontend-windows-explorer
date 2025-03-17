<template>
  <section id="AppLayoutDefault" class="relative min-h-screen flex items-center justify-center">
    <section id="AppLayoutDefaultBackground" class="absolute inset-0">
      <img class="w-full h-full object-cover" src="@/app/assets/images/bg-windows.jpg" />
    </section>

    <div class="relative shadow-2xl rounded-lg w-[90%] max-w-6xl max-h-[80vh] overflow-auto custom-scrollbar">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
</style>
