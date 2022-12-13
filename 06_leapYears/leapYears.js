const leapYears = function (year) {
  // if/elseif version
  // if (year % 4 === 0 && year % 100 !== 0) {
  //   return true;
  // } else if (year % 100 === 0 && year % 400 == 0) {
  //   return true;
  // }
  // return false;

  // short version
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0;
};

let test1 = leapYears(2000); // is a leap year: returns true
let test2 = leapYears(1985); // is not a leap year: returns false
console.log(test1, test2);

// Do not edit below this line
module.exports = leapYears;
