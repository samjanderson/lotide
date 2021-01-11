const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false))
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, '1']), false))
