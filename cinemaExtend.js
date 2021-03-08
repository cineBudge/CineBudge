 google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDraQyzQaqBwfBXGSUQ23hK_5g-zftFwfQ'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);



      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Cinema Expenditure for Countries)'],
          ['Austria', 16.5],
          ['Belguim', 15.16],
          ['Denmark', 22.45],
          ['Finland', 17.7],
          ['France', 23.8],
          ['Germany', 14],
          ['Italy', 11.6],
          ['Netherland', 17.86],
          ['Portugal', 7.74],
          ['Spain', 13.48],
          ['Sweden', 22.18]
        ]);

        var options = {
          region: 150,
          colorAxis: {colors: ['#f1e7b4', '#f39117']}, 
          datalessRegionColor: '#f2f2f2'
        };


        var chart = new google.visualization.GeoChart(document.getElementById('cinemaExtend'));

        chart.draw(data, options);
      }