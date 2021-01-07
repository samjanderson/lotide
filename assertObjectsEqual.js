const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

// console.log(assertObjectsEqual(eqObjects(cd, dc), true)); // => true
// console.log(assertObjectsEqual(eqObjects(cd, cd2), false)); // => false


assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
//your inspect is in the assertObjectsEqual function, not the eqObjects function. 
// So you'll have to run the assertObjectsEqual function instead 
