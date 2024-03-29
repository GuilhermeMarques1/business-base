<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'
import HomeView from './views/HomeView.vue'

const showSide = ref(true)

const toggleSideBar = () => {
  showSide.value = !showSide.value
}
</script>

<template>
  <div class="w-screen h-screen flex">
    <SideBar v-show="showSide" />

    <HomeView :toggleSideBar="toggleSideBar" />
  </div>
</template>
