//takes in an object and a value it should scan object and return the first key which contains the given value
//if no key with that given value is found, return undefined
//use object keys
//to see what is inside key use either bracket or dot notation
const findKeyByValue = function (object, value) {
  for (let key in object) {  // iterates over properties of object
    if (object[key] === value) {
      return key
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};




 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);