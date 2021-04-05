<template>
  <div class="app-container">
    <!--表单-->
   welcome to the honhu manager website
  </div>
</template>
<script>
import echarts from 'echarts'
import staApi from '@/api/sta'
export default{
    data() {
        return {
            searchObj:{},
            btnDisabled:false,
            xData:[],
            yData:[]
        }
    },
  methods:{
        showChart(){
          staApi.getDataSta(this.searchObj)
          .then(Response=>{
            this.xData = Response.data.date_calculatedList
            this.yData = Response.data.numDataList

            //调用下面生成图表的方法，改变值
            this.setChart()
          })
        },
        setChart(){
            // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(document.getElementById('chart'))
      // console.log(this.chart)
      // 指定图表的配置项和数据
      var option = {
        
        title: {
            text: '数据统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.xData
        },
        // y轴是数据轴（连续数据）
        yAxis: {
          type: 'value'
        },
        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [{
          // 系列中的数据内容数组
          data: this.yData,
          // 折线图
          type: 'line'
        }]
      }
      this.chart.setOption(option)
        }
    }
}
</script>

