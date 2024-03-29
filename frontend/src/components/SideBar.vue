<script setup lang="ts">
import IconChart from './icons/IconChart.vue'
import IconDownload from './icons/IconDownload.vue'
import IconHome from './icons/IconHome.vue'
import IconSettings from './icons/IconSettings.vue'
import IconUpload from './icons/IconUpload.vue'
</script>

<template>
  <div class="w-[400px] h-full bg-gray-200 text-white">
    <div class="h-[80px] bg-gray-900 flex justify-center items-center">
      <h3 class="font-bold text-xl">Business<span class="text-green">.B</span>ase</h3>
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-80px)] bg-gray-800 py-[20px]">
      <div class="px-[20px] flex flex-col gap-4">
        <router-link
          to="/home"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconChart />
          Dashboard
        </router-link>
        <router-link
          to="/download"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconUpload />
          Upload
        </router-link>
      </div>

      <div class="px-[20px] flex flex-col">
        <router-link
          to="/home"
          class="flex items-center gap-2 py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconSettings />
          Configurações
        </router-link>
      </div>
    </div>
  </div>
</template>
