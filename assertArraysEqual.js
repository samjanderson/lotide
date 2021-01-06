//implement assertArraysEqual which will take in two array and console.log an appropriate message
//the message will be similar to this, instead of === though it will use your eqArrays function for array comparison

//functions that do not return values and instead print out messages to the console are more diffuclt to test using assertions
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//this should leverage eqArrays so the first parameter should be the call back and second true
const assertArraysEqual = (callback, expected) => {
  if (eqArrays(callback, expected)) {
    console.log(`👍👍Assertion Passed: ${callback} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${callback} !== ${expected}`);
  }
};


const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (var i = 0; i < arr1.length; i++) {
    // console.log('arr1', arr1[i])
    //console.log('arr2', arr2[i])
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2]), false)); // => should PASS
