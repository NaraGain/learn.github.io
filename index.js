function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Element','Hight',{role:'style'}],
    ['Java',16.00,'#b87333'],
    ['Python',9.7,'silver'],
    ['C #',5.3,'gold'],
    ['C',15.77, '#e5e4e2'],
    ['Javascript',2.4,'#50A5C7'],
    ['Php',2.4,'#D11D7A'],
    ['Swift',1.7,'#D4A20F'],
    ['VB.Net',5.2,'#ff0000'],
    ['Golang',1.39,'#40ff00']
  
  ]);
  
  var options = {
    title:'programming Language',
    chartArea : {width:'100%',hight:'100%'},
    colors: ['', '#ffab91'],
  };
  
  var chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
  }

  