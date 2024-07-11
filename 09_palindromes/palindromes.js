const palindromes = function (string) {
  let simpleString = string.toLowerCase().replace(" ", "");
  let reversedString = simpleString.split("").reverse().join("");
  return simpleString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
