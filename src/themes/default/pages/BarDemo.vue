<template>
  <div>
    <bar-chart :chart-data="chartData" :options="options"/>
  </div>
</template>

<script>
import BarChart from '../components/theme/BarChart'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    }
  }
}
</script>
