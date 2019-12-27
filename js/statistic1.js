// var data = {
//     // A labels array that can contain any sort of values
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     // Our series array that contains series objects or in this case series data arrays
//     series: [
//         [500, 400, 600, 500, 450, 550, 400, 500, 550, 400, 450, 350],
//         [300, 350, 450, 700, 400, 300, 500, 400, 450, 500, 300, 500],
//         [350, 250, 300, 500, 450, 500, 350, 300, 550, 300, 400, 550],
//     ]
//   };

//   var options = {
//     // Don't draw the line chart points
//     showPoint: false,
//     // Disable line smoothing
//     lineSmooth: false,
//     // X-Axis specific configuration
  
    
//   };
  
//   // Create a new line chart object where as first parameter we pass in a selector
//   // that is resolving to our chart container element. The Second parameter
//   // is the actual data object.
//   new Chartist.Line('.ct-chart', data);

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [500, 400, 600, 500, 450, 550, 400, 500, 550, 400, 450, 350],
        [300, 350, 450, 700, 400, 300, 500, 400, 450, 500, 300, 500],
        [350, 250, 300, 500, 450, 500, 350, 300, 550, 300, 400, 550],
    ]
  };
  
  // We are setting a few options for our chart and override the defaults
  var options = {
    // Don't draw the line chart points
    showPoint: true,
    // Disable line smoothing
    lineSmooth: false,
    // X-Axis specific configuration
    axisX: {
      // We can disable the grid for this axis
      showGrid: true,
      // and also don't show the label
      showLabel: true
    },
    // Y-Axis specific configuration
    axisY: {
      // Lets offset the chart a bit from the labels
      offset: 60,
      // The label interpolation function enables you to modify the values
      // used for the labels on each axis. Here we are converting the
      // values into million pound.
      labelInterpolationFnc: function(value) {
        return value
      }
    }
  };
  
  // All you need to do is pass your configuration as third parameter to the chart function
  new Chartist.Line('.ct-chart', data, options);