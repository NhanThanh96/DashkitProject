$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
  var _chart1;
  function drawOrder(_data) {
    _chart1 = new Chart(document.getElementById('ordersChart'), {
      type: "bar",
      data: _data,
      options: {
        tooltips: {
          enabled: false,
          mode: "index",
          intersect: false,
          custom: function (r) {
            var a = $("#chart-tooltip");
            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
              if (r.body) {
                var e = r.title || [],
                  l = r.body.map(function (a) {
                    return a.lines
                  }),
                  n = "";
                n += '<div class="arrow"></div>', e.forEach(function (a) {
                  n += '<h3 class="popover-header text-center">' + a + "</h3>"
                }), l.forEach(function (a, e) {
                  var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                    o = 1 < l.length ? "justify-content-left" : "justify-content-center";
                  n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
                }), a.html(n)
              }
              var t = $(this._chart.canvas),
                o = (t.outerWidth(), t.outerHeight(), t.offset().top),
                s = t.offset().left,
                i = a.outerWidth(),
                c = a.outerHeight(),
                d = o + r.caretY - c - 16,
                u = s + r.caretX - i / 2;
              a.css({
                top: "calc(" + d + "px - 1.5%)",
                left: u + "px",
                display: "block"
              })
            } else a.css("display", "none")
          },
          callbacks: {
            label: function (a, e) {
              var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
              return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>"
            },
            labelColor: function (tooltipItem, chart) {
              return {
                backgroundColor: '#2C7BE5'
              };
            }
          }
        },
        barValueSpacing: 20,
        scales: {
          xAxes: [{
            barThickness: 10,
            ticks: {
              fontWeight: 700,
              fontSize: 13,
              fontColor: '#90a0b7',
            },
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            ticks: {
              fontWeight: 700,
              fontSize: 14,
              fontColor: '#90a0b7',
              beginAtZero: true,
              callback: function (a) {
                if (!(a % 10)) return "$" + a + "k"
              }
            },
            gridLines: {
              drawBorder: false,
              borderDash: [2, 4],
              color: "#e6edf7"
            }
          }]
        },
        legend: {
          display: false,
        }
      }
    })
  }

  var tooltip = $('[data-toggle="tooltip"]');
  tooltip.length && tooltip.tooltip();

  var dataOrder = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
      backgroundColor: "#2c7be5",
      borderColor: "#2c7be5",
    }]
  }

  drawOrder(dataOrder);

  $("#cardToggle").change(function (e) {
    if ($(this).is(':checked')) {
      dataOrder.datasets.push(
        {
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: "#d2ddec",
          label: "Affiliate"
        }
      )
    } else {
      dataOrder.datasets.splice(-1, 1);
    }
    _chart1.update();
  });

  // bar chart
  var barEle = $("#js-bar-chart");
  var a, e = $("#js-bar-chart");
   
  var barChart = new Chart(barEle, {
    type: 'bar',
    options: {
      legend: {
         display : false
      },
      scales: {
          yAxes: [{
              gridLines: {
                drawBorder: false,
                borderDash: [2, 2],
              },
              ticks: {
                beginAtZero: true,
                callback: function(a) {
                    if (!(a % 10)) return "$" +" " + a + "k"
                },
                fontColor: "#a9afb9",
                scaleFontSize: 20
              }
          }],
          xAxes: [{
            barPercentage: 0.5,
            barThickness: 30,
            maxBarThickness: 10,
            categoryPercentage: 9,
            minBarLength: 2,
            gridLines: {
              offsetGridLines: false,
              color: "#fff",
            },
            ticks: {
              fontColor: "#a9afb9",
              fontFamily: "Cerebri Sans",
              scaleFontSize: 20,
              lineDashType: "dash"
          },
          }],
      }
    },
  
    tooltips: {
      yAlign: 'bottom',
      callbacks: {
          labelColor: function(tooltipItem, chart) {
              return {
                  backgroundColor: '#fff'
              }
          },
      },
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
          label: "Sales",
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
          backgroundColor: "#2c7be5"
      }]
    }
  });

// Doughnut chart

var doughnutChart = document.getElementById('js-doughnut-chart');
var allDataSet =  $('#js-devices-all').attr("data-update");
var parsedAllDataSet = JSON.parse(allDataSet);
var data = {
    labels: parsedAllDataSet[0].labels,
    datasets: [{
      data: parsedAllDataSet[0].data,
      backgroundColor: parsedAllDataSet[0].backgroundColor,
  }]
};
$('#js-devices-all').on('click', function(){
  var dataUpdate =  $(this).attr("data-update");
  var parseddataUpdate = JSON.parse(dataUpdate); 
  myDoughnutChart.data.datasets[0].data = parseddataUpdate[0].data;
  myDoughnutChart.data.datasets[0].backgroundColor = parseddataUpdate[0].backgroundColor;
  myDoughnutChart.data.labels = parseddataUpdate[0].labels;
  myDoughnutChart.update();
});

$('#js-devices-direct').on('click', function(){
  var dataDriectUpdate =  $(this).attr("data-update");
  var parsedDirectUpdate = JSON.parse(dataDriectUpdate); 
  myDoughnutChart.data.datasets[0].data = parsedDirectUpdate[0].data;
  myDoughnutChart.data.datasets[0].backgroundColor = parsedDirectUpdate[0].backgroundColor;
  myDoughnutChart.data.labels = parsedDirectUpdate[0].labels;
  myDoughnutChart.update();
});

var option = {
    maintainAspectRatio : false,
    cutoutPercentage: 83,
    legend: {
      display: false
  }
};

var myDoughnutChart = Chart.Doughnut(doughnutChart,{
	data:data,
  options:option
});
// line chart
var performanceChart = document.getElementById('js-performance-chart');
var allPerformanceDataSet =  $('#js-performance-all').attr("data-update");
var parsedAllPerformanceDataSet = JSON.parse(allPerformanceDataSet);

var performanceData = {
  datasets: [{
      label: "Performance",
      fill : false,
      borderColor : "#2c7be5",
      data: parsedAllPerformanceDataSet[0].data
  }],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

$('#js-performance-all').on('click', function(){
  var dataPerformanceUpdate =  $(this).attr("data-update");
  var parsedPerformanceDataUpdate = JSON.parse(dataPerformanceUpdate); 
  myLineChart.data.datasets[0].data = parsedPerformanceDataUpdate[0].data;
  myLineChart.update();
});

$('#js-performance-direct').on('click', function(){
  var dataPerformanceDriectUpdate =  $(this).attr("data-update");
  var parsedPerformanceDirectUpdate = JSON.parse(dataPerformanceDriectUpdate); 
  myLineChart.data.datasets[0].data = parsedPerformanceDirectUpdate[0].data;
  myLineChart.update();
});

$('#js-performance-organic').on('click', function(){
  var dataPerformanceOrganicUpdate =  $(this).attr("data-update");
  var parsedPerformanceOrganicUpdate = JSON.parse(dataPerformanceOrganicUpdate); 
  myLineChart.data.datasets[0].data = parsedPerformanceOrganicUpdate[0].data;
  myLineChart.update();
});

var myLineChart = Chart.Line(performanceChart, {
  type: 'line',
  options: {
    elements: {
      point:{
          radius: 0
      },
  },
    legend: {
      display: false,
    },
    scales: {
        yAxes: [{
            gridLines: {
              drawBorder: false,
              borderDash: [2, 2],
            },
            ticks: {
              beginAtZero: true,
              callback: function(a) {
                  if (!(a % 10)) return "$" +" " + a + "k"
              },
              fontColor: "#a9afb9",
              scaleFontSize: 20
            }
        }],
        xAxes: [{
          barPercentage: 0.5,
          barThickness: 30,
          maxBarThickness: 10,
          categoryPercentage: 9,
          minBarLength: 2,
          gridLines: {
            offsetGridLines: false,
            color: "#fff",
          },
          ticks: {
            fontColor: "#a9afb9",
            fontFamily: "Cerebri Sans",
            scaleFontSize: 20,
            lineDashType: "dash"
        },
        }],
    }
  },
  data: performanceData,
});
 
// sort goals table
$('.js-option-sort').click(function(){
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (var i = 0; i < rows.length; i++){table.append(rows[i])}
  })
  function comparer(index) {
      return function(a, b) {
          var valA = getCellValue(a, index), valB = getCellValue(b, index)
          return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
      }
  }
  function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
});
