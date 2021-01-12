const findKeyByValue = function (object, value) {
  for (let key in object) {  // iterates over properties of object
    if (object[key] === value) {   //object[key] => object[drama] => 'the wire'
      return key;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};




//  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);