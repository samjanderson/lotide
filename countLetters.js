function countLetters (string) {
  string = string.split(' ').join('')
  let totalCount = {};
  for (let char of string) {
    if (totalCount[char]) {
      totalCount[char] +=1
    } else {
      totalCount[char] =1
    }
  }
  return totalCount;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(countLetters("lighthouse in the house"))