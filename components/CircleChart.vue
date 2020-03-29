<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <pie-chart
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'pie-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    info: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    displayInfo() {
      const chartData = this.chartData[this.chartData.length - 1]
      const total = chartData.cumulative.toLocaleString()
      const remaining = chartData.transition.toLocaleString()
      return {
        lText: remaining + '/' + total,
        sText: this.info,
        unit: this.unit
      }
    },
    displayData() {
      const colorArray = ['#00B849', '#D9D9D9']
      return {
        labels: this.chartData.map(d => {
          return this.$t(d.label)
        }),
        datasets: [
          {
            label: this.chartData.map(d => {
              return this.$t(d.label)
            }),
            data: this.chartData.map(d => {
              return d.transition
            }),
            backgroundColor: this.chartData.map((_, index) => {
              return colorArray[index]
            }),
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      const unitBed = this.unit
      const unitPerson = this.$t('人')
      const label = this.$t('総病床数')
      const chartData = this.chartData
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const index = tooltipItem.index
              const numerator = chartData[index].transition
              const numeratorUnit = index === 1 ? unitBed : unitPerson
              const denominator =
                chartData[0].transition + chartData[1].transition
              const denominatorLabel = label
              return `${numerator} ${numeratorUnit} (${denominatorLabel}: ${denominator}${unitBed})`
            },
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Graph-Desc {
  margin: 10px 0;
  font-size: 12px;
  color: $gray-3;
}
.link {
  text-decoration: none;
}
</style>
