//create a function head which returns the first item in the array
//it should not return the first element as an array. it should simply return the element itself
//use asserEqual to write test cases for various scenarios
//edge cases to consider: an array with only one element should still yield that one element as its head
//an empty array should yield undefined as its head

const head = (array) => {
  //could also be if array !== []
  if (array.length !== 0) {
    return array[0];
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);