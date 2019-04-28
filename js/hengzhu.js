
    var myChart = echarts.init(document.getElementById('hengzhu'));
    option = {
        title : {
            text: '',
            subtext: ''
        },
        tooltip : {
            trigger: 'item'  //悬浮提示框不显示
        },
        grid:{   //绘图区调整
            x:60,  //左留白
            y:10,   //上留白
            x2:80,  //右留白
            y2:10   //下留白
        },
        xAxis : [
            {
                show:false,
                type : 'value',
                boundaryGap : [0, 0],
                position: 'top'
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['新装','换取','变更'],
                axisLine:{show:false},     //坐标轴
                axisTick:[{    //坐标轴小标记
                    show:false
                }],
                axisLabel:{
                    textStyle:{
                        fontSize:'10',
                        color:'white'
                    }
                }
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                tooltip:{show:false},
                barMinHeight:30,  //最小柱高
                barWidth: 15,  //柱宽度
                barMaxWidth:100,   //最大柱宽度
                data:[20000, 23489, 29034],
                itemStyle:{
                    normal:{    //柱状图颜色
                        color:'rgb(50,233,241)',
                        label:{
                            show: true,   //显示文本
                            position: 'right',  //数据值位置
                            textStyle:{
                                color:'white',
                                fontSize:'10'
                            }
                        }
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

