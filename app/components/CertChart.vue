<script setup lang="ts">
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([BarChart, GridComponent, TooltipComponent, CanvasRenderer])

const props = defineProps<{ data: { label: string; value: number }[] }>()

const el = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null
let observer: ResizeObserver | null = null

const options = () => ({
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

onMounted(() => {
  observer = new ResizeObserver(() => {
    const box = el.value
    if (!box || box.clientWidth === 0) return // not laid out yet, wait
    if (!chart) {
      chart = echarts.init(box)
      chart.setOption(options())
    } else {
      chart.resize()
    }
  })
  observer.observe(el.value!)
})

onUnmounted(() => {
  observer?.disconnect()
  chart?.dispose()
})
</script>

<template>
  <div ref="el" class="h-56 w-full" />
</template>