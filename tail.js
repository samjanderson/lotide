//return everything except the first item (head) of the array
//your function should not modify the array that is passed in. it should return a new array**
//edge cases: An array with only one element should yield an empty array for its tail
//An empty array should yield an empty array for its tail

const tail = (array) => {
  if (array.length === 1 || array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};



module.exports = tail