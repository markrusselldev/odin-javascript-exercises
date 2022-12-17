const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((last, next) => last + next, 0);
};

const multiply = function (arr) {
  return arr.reduce((last, next) => last * next, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (!Number.isInteger(n)) return undefined;
  if (n < 0) return undefined;
  let result = 1;
  for (i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

const factorial2 = n => {
  if (!Number.isInteger(n)) return undefined;
  if (n < 0) return undefined;
  if (n === 0) return 1;
  // adds numbers from 1 to n to array
  let arr = [...Array(n + 1).keys()].splice(1);
  // reduce is much cleaner
  return arr.reduce((last, next) => last * next);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
