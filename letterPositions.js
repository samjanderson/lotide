const letterPositions = function(sentence) {
  //sentence = sentence.split(' ').join('')
  let results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) { ///sentence[i] will pull up the char at that point in the string
      results[sentence[i]].push(i) // results = { i : 4} push to array results[sentence[i]]
    }
    else if (sentence[i] !== " ") //now comparing a string to a string not an array to a string
      results[sentence[i]] = [i]  ///the square brackets here makes it an array
    }
    return results;
  }

console.log(letterPositions("lighthouse in the house"))



const assertArraysEqual = (callback, expected) => {
  if (eqArrays(callback, expected)) {
    console.log(`👍👍Assertion Passed: ${callback} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${callback} !== ${expected}`);
  }
};

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

assertArraysEqual(letterPositions("hello").e, [1]);



