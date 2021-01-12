//takes in an object and a callback
//scan object and return first key for which callback returns a truthy value
//else return undefined

// const findKey = function (object, callback) {
//   for (let key in object) {  
//     if (callback(object[key])) {   
//       console.log(key)
//       break;
//     }
//   }
// }

const findKey = function (object, callback) {
  for (let key in object) {   
    if (callback(object[key])) {   
      return key;
    }
  }
}

// const findKey = function(object, callback) {
//   for (let keys of Object.keys(object)) {
//   if (callback(object[keys])) {
//     return keys;`
//   }

// if (callback(item) === true
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

