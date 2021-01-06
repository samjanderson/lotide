//implement middle which will take in an array and return the middle-most elements
//for arrays with one or two elements there is no middle so return empty
//for arrays wtih odd numbers a single middle element should be returned
//for arrays with even numbers of elements an array containing two elements in the middle should be returned
//use assertArraysEqual to test new function


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

const assertArraysEqual = (callback, expected) => {
  if (eqArrays(callback, expected)) {
    console.log(`👍👍Assertion Passed: ${callback} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${callback} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
    if (array.length < 3) {  //first condition works
      return []
    }
    else if (array.length % 2 === 0) {    //second condition works
      let middlePoint = array.length / 2 - 1 //put -1 because without it, it will return the second middle number, var stores index position
      return [array[middlePoint], array[middlePoint + 1]];
    }
    else if (array.length % 2 !== 0) {
      return array[Math.floor(array.length /2)]
    }
  }


// TEST CODE
 //console.log(middle([1])) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), 3))


//var middle = arr[Math.floor(arr.length / 2)]; this will work for an odd number of the array (2nd number in an even case)
//var middle = arr[Math.round((arr.length - 1) / 2)]; this also will work for an odd number of the array (1st number in an even case)
//the two combined will get you the middle if it is even