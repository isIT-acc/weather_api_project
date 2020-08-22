class UI {
  constructor() {
    this.city_country = document.getElementById("city_country");
    this.temp = document.querySelector(".temp");
    this.imgs = document.querySelector(".imgs");
    this.windDir = document.querySelector(".windDir");
    this.windSpeed = document.querySelector(".windSpeed");
    this.humidity = document.querySelector(".humidity");
    this.pressure = document.querySelector(".pressure");
    this.cloudiness = document.querySelector(".cloudiness");
    this.coords = document.querySelector(".coords");
    this.calced_time = document.querySelector(".calced_time");
  }

  paint(weather) {
    this.city_country.textContent = weather.name + "," + weather.sys.country;
    // temperature
    this.temp.textContent =
      `${
        weather.main.temp - 273.15 > 0
          ? "+" + (weather.main.temp - 273.15).toFixed(2)
          : (weather.main.temp - 273.15).toFixed(2)
      }` +
      String.fromCharCode(176) +
      "C";
    // image
    let output = "";
    weather.weather.forEach((element) => {
      output += `
      <img class="align-bottom" src="https://openweathermap.org/img/wn/${element.icon}.png"/>
      `;
    });
    this.imgs.innerHTML = output;

    // wind
    this.windDir.textContent = `Направление ветра: ${
      weather.wind.deg + String.fromCharCode(176)
    }`;
    // wind speed
    this.windSpeed.textContent = `Скорость ветра: ${weather.wind.speed} м/с`;

    this.humidity.textContent = `Влажность: ${weather.main.humidity}%`;

    this.pressure.textContent = `Атмосферное давление: ${(
      (weather.main.pressure / 100) *
      75
    ).toFixed(2)} мм рт.ст.`;

    // cloudiness
    this.cloudiness.textContent = `Облачность: ${weather.clouds.all}%`;

    this.coords.textContent = `Широта:${weather.coord.lat} Долгота:${weather.coord.lon}`;

    const dateInMs = new Date(parseFloat(weather.dt) * 1000);
    // console.log(dateInMs);
    this.calced_time.textContent = `Дата и время расчёта: ${dateInMs.getDate()}:${
      dateInMs.getMonth() + 1
    }:${dateInMs.getFullYear()},${dateInMs.getHours()}:${
      dateInMs.getMinutes() < 10
        ? "0" + dateInMs.getMinutes()
        : dateInMs.getMinutes()
    }`;
  }
}
