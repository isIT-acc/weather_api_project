const weather = new Weather();
// Storage.put("Norilsk");
// weather.changeLocation("Moscow");
const ui = new UI();
// const storage=new Storage();
// document.addEventListener("DOMContentLoaded", getWeather);

document.addEventListener("DOMContentLoaded", (e) => {
  const curCity = Storage.get();
  if (curCity) {
    // weather.changeLocation(curCity);
    getWeather(curCity);
  } else {
    $("#locationModal").modal("show");
  }
});

document.getElementById("save_btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  if (city) {
    // weather.changeLocation(city);

    getWeather(city)
      .then(() => {
        $("#locationModal").modal("hide");
      })
      .catch(() => {
        $("#locationModal").modal("show");
      });
  }
});

document.getElementById("change_location").addEventListener("click", (evt) => {
  document.getElementById("city").value = "";
});

function zaglooshka() {
  ui.paint({
    coord: { lon: 139, lat: 35 },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 281.52,
      feels_like: 278.99,
      temp_min: 280.15,
      temp_max: 283.71,
      pressure: 1016,
      humidity: 93,
    },
    wind: {
      speed: 0.47,
      deg: 107.538,
    },
    clouds: {
      all: 2,
    },
    dt: 1560350192,
    sys: {
      type: 3,
      id: 2019346,
      message: 0.0065,
      country: "JP",
      sunrise: 1560281377,
      sunset: 1560333478,
    },
    timezone: 32400,
    id: 1851632,
    name: "Shuzenji",
    cod: 200,
  });
}

function getWeather(city) {
  return new Promise(function (resolve, reject) {
    weather.getWeather(city).then((res) => {
      if (res !== "error") {
        ui.paint(res);
        Storage.put(city);
        resolve();
      } else {
        reject();
      }
    });
  });
}
