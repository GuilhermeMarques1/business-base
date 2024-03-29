<script setup lang="ts">
import MonthChart from '@/components/MonthChart.vue'
import IconHamburguer from '@/components/icons/IconHamburguer.vue'
import BoxIndicator from '@/components/BoxIndicator.vue'
import TopClients from '@/components/TopClients.vue'

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
      class="h-[80px] bg-gray-100 flex items-center justify-between shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="cursor-pointer w-[30px]" @click="handleClick">
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
      <BoxIndicator />
      <div class="flex flex-row gap-20 h-[500px] w-[80%] mt-14">
        <div class="h-[500px] w-[80%]">
          <MonthChart />
        </div>
        <div class="h-[200px] w-[30%]">
          <TopClients />
        </div>
      </div>
    </main>
  </div>
</template>
