<script setup lang="ts">
import Chart, { type ChartItem } from 'chart.js/auto'
import { onMounted } from 'vue'

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [10, 20, 30, 40],
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
  const element = document.getElementById('myChart') as ChartItem
  new Chart(element, config)
})
</script>

<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
