<script setup lang="ts">
import UploadFile from '@/components/UploadFile.vue'
import IconHamburguer from '@/components/icons/IconHamburguer.vue'
import { inject } from 'vue'

const toggleSideBar = inject<() => void>('toggleSideBar')
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <header
      class="h-[80px] bg-gray-100 flex items-center justify-between shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
        <IconHamburguer />
      </div>

      <div class="w-[300px]">
        <div class="flex items-center justify-start space-x-4">
          <img
            class="w-12 h-12 rounded-full border-2 border-gray-50"
            src="https://avatars.githubusercontent.com/u/81578826?s=400&u=97c14641f113422c1670984df587fb98df99ee69&v=4"
            alt=""
          />
          <div class="font-semibold dark:text-black text-left">
            <div>Guilherme Marques</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
          </div>
        </div>
      </div>
    </header>

    <main class="flex flex-col items-center">
      <div class="h-[calc(100vh-80px)] flex items-center justify-center">
        <UploadFile />
      </div>
    </main>
  </div>
</template>
