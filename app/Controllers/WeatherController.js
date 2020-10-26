import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  // console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  document.getElementById("weather").innerHTML = ProxyState.weather.Template
}

function drawTime(time, greet) {
  document.getElementById("time").innerHTML = /*html */`
  <div class="col-9 col-sm-12">
    <h1 class = "display-1">${time}</h1>
    <h2>${greet}</h2>
  </div>
  `
}

// let time;
// function checkTimer() {
//   let date = new Date()
//   let sec = date.getSeconds()

//   return sec % 60 == 0
// }

// function setTimer() {
//   time = setInterval(checkTimer, 1000);
// }



export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
    drawTime(this.getTime(), this.getGreeting())
  }

  getTime() {
    let date = new Date()
    let min = date.getMinutes()
    let hour = date.getHours()
    let ampm = hour >= 12 ? 'p.m.' : 'a.m.'
    let time;
    hour = hour % 12
    hour = hour ? hour : 12

    if (min < 10) {
      time = hour + ":" + '0' + min + ' ' + ampm;
    } else {
      time = hour + ":" + min + ' ' + ampm;
    }
    return time
  }



  getGreeting() {
    let date = new Date()
    let hour = date.getHours()
    let greet = ''

    if (hour > 5 && hour < 12) greet = "Good Morning Champ";
    else if (hour >= 12 && hour < 17) greet = "Good Afternoon Champ";
    else if (hour >= 17 && hour < 20) greet = "Good Evening Champ";
    else if (hour >= 20 && hour < 24) greet = "Good Night Champ";
    else greet = "Go To Bed Champ";

    return greet;
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  toggleWeather(e) {

  }
}
