class Weather {
  constructor() {
    this.apiKey = "290432d85ca235374289d23dba18678a";
    this.city;
  }

  async getWeather(city) {
    this.changeLocation(city);
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );
    if (res.ok) {
      const resData = await res.json();
      return resData;
    } else {
      return "error";
    }
  }

  changeLocation(city) {
    this.city = city;
  }
}
