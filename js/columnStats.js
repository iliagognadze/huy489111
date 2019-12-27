new Chartist.Bar('.ct-barCol', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [500, 200, 200, 250, 500, 350, 500, 500, 500, 400, 500, 500],
    [250, 50, 150, 150, 175, 200, 150, 350, 200, 150, 250, 175]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value);
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});


