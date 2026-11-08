<script setup>
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// load the parts of ECharts so the bundle stays small
echarts.use([BarChart, GridComponent, TooltipComponent, CanvasRenderer])

const props = defineProps({
  data: { type: Array, required: true },
})

const el = ref(null)
let chart = null

const onResize = () => chart?.resize()

onMounted(() => {
  chart = echarts.init(el.value)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    grid: { left: 30, right: 10, top: 20, bottom: 30 },
    xAxis: { type: 'category', data: props.data.map((d) => d.label) },
    yAxis: { type: 'value', minInterval: 1 },
    series: [
      {
        type: 'bar',
        data: props.data.map((d) => d.value),
        itemStyle: { color: '#e11d2e' },
        barMaxWidth: 40,
      },
    ],
  })
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  chart?.dispose()
})
</script>

<template>
  <div ref="el" class="h-56 w-full" />
</template>