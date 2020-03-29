<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('入院患者数と残り病床数')"
      :title-id="'patietns-and-sickedbeds'"
      :chartId="'any'"
      :chart-data="sickbedsGraph"
      :date="'2020-03-28'"
      :unit="$t('床')"
      :info="$t('入院患者数') + '/' + $t('総病床数')"
      :url="'https://www.stopcovid19.jp/'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChart from '@/components/CircleChart.vue'
import sickbedsSummary from '@/data/sickbeds_summary.json'

export default {
  components: {
    CircleChart
  },
  data() {
    const sickbedsGraph = formatVariableGraph(sickbedsSummary.data)

    const data = {
      Data,
      sickbedsGraph
    }

    return data
  }
}
</script>
