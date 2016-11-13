'use strict';
class WeatherStation {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
        this._id = WeatherStation.prototype.id || 0;
        WeatherStation.prototype.id = this._id + 1;
    }

    toString() {
        let weatherStatus = 'Not stormy';
        if (this.temperature < 20 && this.windSpeed > 25 && (this.pressure < 700 || this.pressure > 900)) {
            weatherStatus = 'Stormy';
        }
        return `Reading ID: ${this._id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\n` +
            `Wind Speed: ${this.windSpeed}m/s\nWeather: ${weatherStatus}`;
    }
}

//Test the code
// let r0 = new WeatherStation(12, 1, 12, 56);
// let r1 = new WeatherStation(12, 1, 12, 56);
// let r2 = new WeatherStation(12, 1, 12, 56);
// let r3 = new WeatherStation(12, 1, 12, 56);
// //
// // console.log(r0._id);
// // console.log(r1._id);
// // console.log(r2._id);
// let record1 = new WeatherStation(32, 66, 760, 12);
//
// console.log(record1.toString());