<script setup lang="ts">
import IconPeople from './icons/IconPeople.vue'
import IconPercent from './icons/IconPercent.vue'
import IconSale from './icons/IconSale.vue'
</script>

<template>
  <div class="mt-8 text-gray-500">Período: {{ periodo }}</div>

  <div class="w-[90%] flex flex-col items-center mt-6">
    <div class="flex justify-around w-full">
      <div class="bg-green flex flex-col items-center w-[30%] px-4 py-6 rounded-md">
        <div class="flex justify-center items-center gap-2">
          <IconSale />
          <h3 class="text-lg font-semibold">Valor de Vendas</h3>
        </div>
        <div class="text-xl font-bold">{{ valorVendas }}</div>
      </div>
      <div class="border-l border-r border-gray-300 h-12 my-auto"></div>
      <div class="flex flex-col items-center w-[30%] px-4 py-6 rounded-md">
        <div class="flex justify-center items-center gap-2">
          <IconPeople />
          <h3 class="text-lg font-semibold">Número de Clientes</h3>
        </div>
        <div class="text-xl font-bold">{{ novosClientes }}</div>
      </div>
      <div class="border-l border-r border-gray-300 h-12 my-auto"></div>
      <div class="flex flex-col items-center w-[30%] px-4 py-6 rounded-md">
        <div class="flex justify-center items-center gap-2">
          <IconPercent />
          <h3 class="text-lg font-semibold">Churn Rate</h3>
        </div>
        <div class="text-xl font-bold">{{ churnPercentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const localstg = localStorage.getItem('@business-base:data')
const newData = JSON.parse(localstg || '[]')
const length = newData?.labels?.length

export default {
  data() {
    if (!length) {
      return {
        valorVendas: 0,
        novosClientes: 0,
        churnPercentage: 0,
        periodo: 'Adicione um arquivo na página de upload para ver as métricas'
      }
    }

    return {
      valorVendas: newData.total,
      novosClientes: newData.customers,
      churnPercentage: newData.churn,
      periodo: `${newData.labels[0]} - ${newData.labels[length - 1]}`
    }
  }
}
</script>
