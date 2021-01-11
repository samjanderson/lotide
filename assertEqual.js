//If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected]
//Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected]

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;