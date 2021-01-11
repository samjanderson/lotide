//implement a function eqArrays which takes in two arrays and returns true or false based on a perfect match
//use assertEqual to test various cases and write them below your function here is an example to get started:

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


module.exports = eqArrays;




