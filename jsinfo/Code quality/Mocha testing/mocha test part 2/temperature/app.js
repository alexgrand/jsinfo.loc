// eslint-disable-next-line no-unused-vars
const convert = {};
convert.celsiusToFahrenheit = function cToF(celsius) {
  if (!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
};

// eslint-disable-next-line no-unused-vars
convert.fahrenheitToCelsius = function fToC(fahrenheit) {
  if (!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
};

module.exports = convert;
