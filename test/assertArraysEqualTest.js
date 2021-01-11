const assertArraysEqual = require('../assertArraysEqual');

// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2]), false)); // => should PASS

assertArraysEqual(([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(([1, 2, 3], [1, 2]), false); // => should PASS