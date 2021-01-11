//implement without which will return a subset of a given array, removing unwanted elements
//this function should take in a source array and a itemsToRemove array
//it should return a new array with only those elements from source that are not present in the itemsToRemove array
//use assertArraysEqual to write test cases below the definition of your function
//make sure that the original array is not modified** (test this at the end) array.filter() creates a new array without modifying the old one

//loop through sourceArray and itemsToRemoveArray
//if an item in sourceArray matches an item in itemsToRemove filter out that item


// const without = (sourceArray, itemsToRemoveArray) => {
//   let sourceArrayCopy = [...sourceArray]; //uses the spread operator to iterate every item in the new array, stops us from mutating the original array
//   //we made a copy to not have to mutate the original array
//   for (let i = 0; i < itemsToRemoveArray.length; i++) {
//     //console.log(itemsToRemoveArray[i]);
//     const locationOfItemsToBeRemoved = sourceArrayCopy.indexOf(itemsToRemoveArray[i])
//     if (locationOfItemsToBeRemoved > -1) {    ///only manipulate the array if the element is present, this tells us there is an element we need to remove
//       sourceArrayCopy.splice(locationOfItemsToBeRemoved, 1)
//     }
//   }
//   //console.log(sourceArrayCopy)
//   return sourceArrayCopy;
// }




// check to see if the target is within an array
const checkItem = function(target, array) { //target is the item from the source array
  for (let item of array) {                 //comparing against the itemsToRemove array
    if (item === target) {                   //item is from items to remove array
      return false;
    }
  }
  return true;
};



const without = function(source, itemsToRemove) { //this loops through source array, puts each into checkItem
  let output = [];
  for (let item of source) {
    if (checkItem(item, itemsToRemove)) { 
      output.push(item); 
    }
  }
  return output;
};





console.log(without([1, 2, 3], [2, 3]))
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without([1, 2, 3], [2, 3, 1]))

const assertArraysEqual = (callback, expected) => {
  if (eqArrays(callback, expected)) {
    console.log(`👍👍Assertion Passed: ${callback} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${callback} !== ${expected}`);
  }
};
//we need to make sure we are checking arrays not just if true === true

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

//TESTS BUT DO MORE
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
//console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
console.log(assertArraysEqual(without([1, 2, 3], [1, 2]), [3]))
console.log(assertArraysEqual(without([1, 8, 10], [8, 9, 7]), [1, 10]))
console.log(assertArraysEqual(without([1, 14, 7], [3, 2]), [1, 14, 7]))

//console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

//terminal commands
//copy a line option shift down key
//command d to select more than one occurrence and change it