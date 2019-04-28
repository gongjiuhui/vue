function PercentPie(option){
    //this.backgroundColor = option.backgroundColor||'#fff';
    this.color           = option.color||['#38a8da','#d4effa'];
    this.fontSize        = option.fontSize||12;
    this.domEle          = option.domEle;
    this.value           = option.value;
    this.name            = option.name;
    this.title           = option.title;
}

PercentPie.prototype.init = function(){
    var _that = this;
    var option = {
        backgroundColor:_that.backgroundColor,
        color:_that.color,
        title: {
            text: _that.title,
            //top:'80%',
            //left:'20%',
            x:'center',
            y:'bottom',
            textStyle:{
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            }
        },
        series: [{
            name: '来源',
            type: 'pie',
            radius: ['55%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                        fontSize: _that.fontSize,
                        fontWeight: 'bold'
                    },
                     formatter :function(p){
                    	
                    	if(p.name=="1"){
                
                    		 return p.value+"%";
                    	}else{
                    		return p.value+"%";
                    	}
                    }
                    
                   
                }
            },
            data: [{
                    value: _that.value,
                    name: _that.name,
                    label:{
                        normal:{
                            show:true
                        }
                    }
                 },
                {
                    value: 100-_that.value,
                    name: ''
                }
            ]
        }]
    };

    echarts.init(_that.domEle).setOption(option);
};
