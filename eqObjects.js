
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//WHAT TO CHECK
//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
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


//OR 2nd way I was developing
// const eqObjects = function (object1, object2) {
//   let object1Keys = Object.keys(object1)
//   let object2Keys = Object.keys(object2)
//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   }
//   for (let key of object1Keys) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
//   }


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// console.log(assertEqual(eqObjects(cd, dc), true)); // => true
// console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

