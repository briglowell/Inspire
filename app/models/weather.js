export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = this.toCelsius(data.main.temp)
    this.fahrenheit = this.toFahrenheit(data.main.temp)
    this.description = data.weather.main

  }

  toCelsius(kelv) {
    return Math.floor(kelv - 273.15);
  }

  toFahrenheit(kelv) {
    return Math.floor((kelv - 273.15) * 9 / 5 + 32);
  }

  get Template() {
    return /*html */`
    <div class="col offset-11 text-right" onclick = "app.weatherController.toggleWeather(event)">
    <h5>${this.fahrenheit} 	 &#8457;</h5>
    <!-- <h5>${this.celsius} 	 &#8451;</h5> -->
    <h5>${this.city}</h5>
    </div>

    `
  }

}