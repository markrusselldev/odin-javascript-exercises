const reverseString = function (string) {
  return string.split("").reverse().join("");
};
let test = reverseString("hello there");
console.log(test);

// Do not edit below this line
module.exports = reverseString;
