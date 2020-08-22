class Storage {
  // constructor(city) {
  //   this.city = city;
  // }

  static put(city) {
    localStorage.setItem("cur_city", city);
  }
  // clear()
  static get() {
    return localStorage.getItem("cur_city");
  }
}
