/* eslint-disable no-console */
class City {
  constructor(city, state) {
    this.city = city || 'Phoenix';
    this.state = state || 'AZ';
  }

  sentence() {
    console.log(`I live in ${this.city}, ${this.state}`);
  }
}

const phoenixCity = new City();
console.log(phoenixCity);
phoenixCity.sentence();
