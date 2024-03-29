<script setup lang="ts">
import { provide, ref } from 'vue'
import SideBar from './components/SideBar.vue'

const showSide = ref(true)

const toggleSideBar = () => {
  showSide.value = !showSide.value
}
provide('toggleSideBar', toggleSideBar)
</script>

<template>
  <div class="w-screen h-screen flex">
    <SideBar v-show="showSide" />

    <RouterView />
  </div>
</template>
