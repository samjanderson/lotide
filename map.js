//map will take in two args
//array to map and a callback function
//map function will return a new array based on results of callback function
const map = function (array, callback) { 
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
}

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

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

// console.log(assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true));

//instructor version
// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (var i = 0; i < arr1.length; i++) {
//     // console.log('arr1', arr1[i])
//     //console.log('arr2', arr2[i])
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true));