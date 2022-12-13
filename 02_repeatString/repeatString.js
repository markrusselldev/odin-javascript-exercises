const repeatString = function (string, num) {
  if (num === 0) return "";
  if (num < 0) return "ERROR";
  let result = "";

  while (num >= 1) {
    result += string;
    num--;
  }
  console.log(result);
  return result;
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
