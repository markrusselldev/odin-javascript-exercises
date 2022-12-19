const fibonacci = function (n) {
  if (n <= 0) return "OOPS";
  return Array.from({ length: n })
    .reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i === 0 ? i + 1 : i), [])
    .pop();
};

// Do not edit below this line
module.exports = fibonacci;
