function isNumeric(value) {
  return typeof value === "number";
}
// console.log(isNumeric("90"));
const sumAll = function (num1, num2) {
  // bypass type coercion by checking by typeof with isNumeric()
  if (!isNumeric(num1) || !isNumeric(num2) || num1 < 0 || num2 < 0) return "ERROR";
  // ES6 destructuring to swap values if needed
  if (num1 > num2) [num1, num2] = [num2, num1];

  // method 1: using a for loop:
  // let sum = 0;
  // for (let i = num1; i <= num2; i++) {
  //   sum += i;
  // }
  // return sum;

  // method 2: using reduce:
  let sequenceArr = [];
  for (let i = num1; i <= num2; i += 1) {
    sequenceArr.push(i);
  }
  return sequenceArr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

let test = sumAll(123, 5);
console.log(test);

// Do not edit below this line
module.exports = sumAll;
