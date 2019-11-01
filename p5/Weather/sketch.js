var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var wspeed = 0;
var tempr = 0;
var temprMap = 0;
var x = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61738,us&units=imperial&';
  var myIDString = 'appid=2355cce496acabc4dc1727dcb7c8a725'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  wspeed = weather.wind.speed;
  tempr = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill(0);
    text("we have weather", 20, 20) ;
    text("humidity =" + weather.main.humidity, 20, 40);
    text("temperature =" + weather.main.temp, 20, 60);
    text("wind speed =" + weather.wind.speed, 20, 80);

    // make a cloud go across the screen
    fill("white");
    noStroke();
    ellipse(x - 20, 250, 100, 100);
    ellipse(x + 30, 270, 100, 100);
    ellipse(x + 30, 230, 100, 100);
    ellipse(x + 70, 250, 100, 100);
    x = x + wspeed/4;
    if (x > width) x = 0;

    // make a thermometer
    fill ("red");
    temprMap = map(tempr,-30, 120, 0, height);
    rect(350, height - 10, 30, -temprMap)

// parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}
