 google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDraQyzQaqBwfBXGSUQ23hK_5g-zftFwfQ'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);



      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Average Ticket Price Between 2013-2017(Local Currency)'],
          ['Austria', 8.6],
          ['Italy', 6.3],
          ['Belgium', 7.2],
          ['Germany', 8.1],
          ['Spain', 6.2],
          ['Denmark', 9.12],
          ['France', 6.5],
          ['Sweden', 10.25],
          ['Finland', 10.46 ]
        ]);

        var options = {
          region: 150,
          colorAxis: {colors: ['#b3cde0', '#0e3569']},

        };


        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }