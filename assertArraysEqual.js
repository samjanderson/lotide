const eqArrays = require('./eqArrays');

//implement assertArraysEqual which will take in two array and console.log an appropriate message
//the message will be similar to this, instead of === though it will use your eqArrays function for array comparison

//functions that do not return values and instead print out messages to the console are more diffuclt to test using assertions

//this should leverage eqArrays so the first parameter should be the call back and second true
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;