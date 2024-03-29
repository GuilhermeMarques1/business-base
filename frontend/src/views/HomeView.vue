<script setup lang="ts">
import MonthChart from '@/components/MonthChart.vue'
import IconHamburguer from '@/components/icons/IconHamburguer.vue'

const props = defineProps<{
  toggleSideBar?: Function
}>()

const handleClick = () => {
  if (props.toggleSideBar) {
    props.toggleSideBar()
  }
}
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <header
      class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="cursor-pointer w-[30px]" @click="handleClick">
        <IconHamburguer />
      </div>
    </header>

    <main>
      <MonthChart />
    </main>
  </div>
</template>
