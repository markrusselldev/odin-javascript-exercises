const palindromes = function (string) {
  // regex wizardry to remove punctuation and all whitespace
  const cleanString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanString.split("").reverse().join("") === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
