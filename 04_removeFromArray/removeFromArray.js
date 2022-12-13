const removeFromArray = function (array, ...elements) {
  // console.log("array: ", array);
  // console.log("elements: ", elements);
  return array.filter(element => !elements.includes(element));
};

let test = removeFromArray([1, 2, 3, 4], 3, 2);
console.log(test);

// Do not edit below this line
module.exports = removeFromArray;
