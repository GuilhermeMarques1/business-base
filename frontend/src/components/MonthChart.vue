<script setup lang="ts">
import Chart, { type ChartItem } from 'chart.js/auto'
import { onMounted } from 'vue'

const localstg = localStorage.getItem('@business-base:data')
const newData = JSON.parse(localstg || '[]')

const data = {
  labels: newData.labels ?? ['jan', 'fev', 'mar', 'abr'],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: newData.data ?? [0, 0, 0, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: newData.data ?? [0, 0, 0, 0],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
    }
  ]
}

const config = {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}

onMounted(() => {
  const element = document.getElementById('monthChart') as ChartItem
  new Chart(element, config)
})
</script>

<template>
  <div>
    <canvas id="monthChart"></canvas>
  </div>
</template>
