var myChart = echarts.init(document.getElementById('zhuzhuang'));
       myChart.setOption({
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	top:'3%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['电信', '移动', '联通'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine:{
                        lineStyle:{
                            color:'white'
                            
                        }
                    } 
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                        lineStyle:{
                            color:'white'
                            
                        }
                    } 
        }
         

    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '50%',
            data:[150, 100, 200]
           
        }
    ]
})