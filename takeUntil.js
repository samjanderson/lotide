//this will take two parameters
//an array to work with and a callback
//function will return a slice of the array with element from the beginning
//it should keep going until the callback returns a truthy value
//the callback shouold only be provided one value: the item in the array
//implement take until which will keep collecting items from a provided array until the callback provided returns a truthy value

//a callback is a function that the function that your currently in tells it do something
//its like a servant or a butler to the main function
// LET US LEARN
const takeUntil = function (array, callback) { //array is data1 and callback is the function
  const resultArray = []   ///array = 1, 2, 5, 7, 2, -1, 2, 4, 5]; and callback = x => x < 0
  for (let item of array) {  //can break from for of, for but not foreach, map, filter, reduce etc
    if (callback(item) === true) { //substituting item for x if (x < 0(item) === true )
      break; //if the item === true it will break out of the loop and stop the process
    }

    resultArray.push(item) //item is pushed forward and the loop repeats

    //console.log(item)
    //resultArray.push(callback(item))
  }
  return resultArray
}
//function takes some input does something with it and outputs something
// const myFunc = () => {  //this is an anonymous function it is just stored inside of a variable
// return x > 1
// }
//anonymous function
//const myFunc = function(x) {
//return x * 2
//}
//anonymous arrow function
//  = x =>   x < 0

//curly braces means explicit function
//take away curly braces and return it becomes implicit

// const myFunc = x => x > 1
// const myFunc = () => x > 1

//INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);  //1 => 1 < 0 return true
console.log(results1);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//CALLBACK FUNCTION


// //EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
///=========================================
const assertArraysEqual = (callback, expected) => {
  if (eqArrays(callback, expected)) {
    console.log(`👍👍Assertion Passed: ${callback} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${callback} !== ${expected}`);
  }
};

////================================================

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





  // assertArraysEqual(
  //   takeUntil(data2, x => x === ','),
  //   [ 'I\'ve', 'been', 'to', 'Hollywood' ]
  // )

  const sayHi = () => {
    console.log('hello world')
    }
    

  const myFunc = (callback) => {
    callback()
    }
    
    myFunc()