
function getgetGrapths(){
    var lineGraphDiv = document.getElementById("lineGraph")
    this.getGrapth("https://edu.telking.com/api/?type=month", lineGraphDiv, getLineChart)

    var pieGraphDiv = document.getElementById("pieGraph")
    this.getGrapth("https://edu.telking.com/api/?type=week", pieGraphDiv, getPieChart)

    var barGraphDiv = document.getElementById("barGraph")
    this.getGrapth("https://edu.telking.com/api/?type=week", barGraphDiv, getBarChart)
};

function getGrapth(url, ele, func){

    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", url, true)
    
    xhttp.send()

    xhttp.onload = function() {
        const res = xhttp.responseText
        var data = JSON.parse(res).data
        func(ele, data)
    }
      
}

function getLineChart(ele, data){
    var chart = echarts.init(ele)
    var axis = data.xAxis
    var value = data.series

    var option = {
        title : {
            text : "曲线图数据展示",
            left : "center"
        },
        xAxis: {
            type : 'category',
            data : axis
        },
        yAxis: {},
        series: [
            {
            data: value,
            type: 'line',
            smooth: true,
            areaStyle: {
                color : '#7fabf4',
                opacity: 0.25
            }
            }
        ],
        label: {
            show: true,
            position: 'top',
            color : '#7fabf4',
            textStyle: {
              fontSize: 20,
            }
        }
        }
    chart.setOption(option)
}

function getPieChart(ele, data){
    var chart = echarts.init(ele)
    var dataSize = data.xAxis.length
    var axis = data.xAxis
    var series = data.series
    var pieData = []

    for (let i=0; i<dataSize; i++){
        pieData.push({value : 0, name : " "})
    }
    pieData.forEach( function(value, index){
        value.value = series[index]
        value.name = axis[index]
    } )

    var option = {
        title : {
            text : "饼状图数据展示",
            left : "center"
        },
        series: [
            {
              type: 'pie',
              data: pieData
            }
        ],
        radius: '70%'
        };
    chart.setOption(option)
}

function getBarChart(ele, data){
    var chart = echarts.init(ele)
    var axis = data.xAxis
    var value = data.series

    var option = {
        title : {
            text : "柱状图数据展示",
            left : "center"
        },
        xAxis: {
            type : 'category',
            data : axis
        },
        yAxis: {},
        series: [
            {
            data: value,
            type: 'bar',
            smooth: true,
            barWidth: '40%'
            }
        ],
    }
    chart.setOption(option)
}







