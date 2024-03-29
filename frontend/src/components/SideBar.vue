<script setup lang="ts">
import IconDownload from './icons/IconDownload.vue'
import IconHome from './icons/IconHome.vue'
import IconUpload from './icons/IconUpload.vue'
</script>

<template>
  <div class="w-[400px] h-full bg-gray-200 text-white">
    <div class="h-[80px] bg-gray-900 flex justify-center items-center">
      <h3 class="font-bold text-xl">Admin Dashboard</h3>
    </div>
    <div class="h-[calc(100vh-80px)] bg-gray-800 py-[20px]">
      <div class="px-[20px] flex flex-col">
        <router-link
          to="/home"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconHome />
          Home
        </router-link>
        <router-link
          to="/download"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconDownload />
          Download
        </router-link>
        <router-link
          to="/download"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
        >
          <IconUpload />
          Upload
        </router-link>
      </div>
    </div>
  </div>
</template>
