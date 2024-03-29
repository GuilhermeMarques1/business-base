<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="w-screen h-screen flex">
    <SideBar v-show="showSide" />
    <header
      class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showSide: true
    }
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide
    }
  }
}
</script>
