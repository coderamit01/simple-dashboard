
// charts 
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  height: 130,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// new chart
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  height: 130,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector(".chart-2"), options);
chart.render();

// new chart 3
var options = {
  series: [{
  name: 'series2',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  height: 130,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector(".chart-3"), options);
chart.render();
// new chart 4
var options = {
  series: [{
  name: 'series2',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  height: 130,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector(".chart-4"), options);
chart.render();
// new chart 5
var options = {
  series: [{
  name: 'series2',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  height: 130,
  type: 'area'
},
fill: {
  colors: ['#38BBED']
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector(".chart-5"), options);
chart.render();

// Bottom chart 
var options = {
  series: [
  {
    name: "This Week",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Previous Week",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
],
  chart: {
  height: 400,
  type: 'line',
  dropShadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 0.2
  },
  toolbar: {
    show: false
  }
},
colors: ['#4791FF', '#02BC77'],
dataLabels: {
  enabled: true,
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Sales Last 7 days',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 1
},
xaxis: {
  categories: ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec','8 Dec', '9 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec']
},
yaxis: {
  min: 0,
  max: 60
},
legend: {
  position: 'bottom',
  horizontalAlign: 'center'
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();