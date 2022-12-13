const convertToCelsius = function (F) {
  //Fahrenheit to Celsiius formula: C = (F - 32) * 0.5556
  // Using Number.isInteger to check for decimals, if found round to one decimal
  return Number.isInteger((F - 32) * 0.5556) ? (F - 32) * 0.5556 : Math.round((F - 32) * 0.5556 * 10) / 10;
};
// Celcius to Fahrenheit formula: F = C * 1.8 + 32
const convertToFahrenheit = function (C) {
  return Number.isInteger(C * 1.8 + 32) ? C * 1.8 + 32 : Math.round((C * 1.8 + 32) * 10) / 10;
};

let test1 = convertToCelsius(32); // fahrenheit to celsius, should return 0
let test2 = convertToFahrenheit(0); // celsius to fahrenheit, should return 32
let test3 = convertToCelsius(100);
console.log(test1, test2, test3);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
