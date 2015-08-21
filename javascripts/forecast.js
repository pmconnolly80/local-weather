define(function(require){
  var $ = require("jquery");
  var searchForecast = require("forecastAPI");
  var search = require("searchAPI");
  var Q = require("q");



  $("#weatherMain").on("click", "#forecast3d", function(){
    console.log("clicked");
    var zipInput = $('#zipCodeIn').val();
    var promiseData = search.getWeather(zipInput);
    // console.log(promise);
    promiseData.then(function(data){
      console.log(data.name);
      searchForecast.getForecast(data.name, 3);
      console.log("forecast data", searchForecast.get(data.name, 3));
    });
  });

  $("#weatherMain").on("click", "#forecast7d", function(){
    console.log("clicked");
    var zipInput = $('#zipCodeIn').val();
    // searchForecast((search.getWeather(zipInput)).name, 7);
    var promise = search.getWeather(zipInput);
    promise.then(function(data){
      searchForecast(data.name, 3);
    });
  });
});