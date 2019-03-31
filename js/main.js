$(document).ready(function(){
  // bar chart
  var barEle = $("#js-bar-chart");
   
  var barChart = new Chart(barEle, {
    type: 'bar',
    // options: {
    //   scales: {
    //       yAxes: [{
    //           ticks: {
    //               callback: function(a) {
    //                   if (!(a % 10)) return "$" + a + "k"
    //               }
    //           }
    //       }]
    //   },
    //   tooltips: {
    //     callbacks: {
    //         label: function(a, e) {
    //             var t = e.datasets[a.datasetIndex].label || "",
    //                 o = a.yLabel,
    //                 r = "";
    //             return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>"
    //         }
    //       }
    //     }
    // },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
          label: "Sales",
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    }
  });

  // doughtnut chart
  var doughnutEle = $("#js-doughnut-chart");
  doughnutChart = new Chart(doughnutEle,{
      type: 'doughnut',
      data: {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
            // hoverBorderColor: "dark" == ThemeCharts.colorScheme ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
    }
    }
  );
});