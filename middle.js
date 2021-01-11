
const middle = function(array) {
    if (array.length < 3) {  
      return []
    }
    else if (array.length % 2 === 0) {   
      let middlePoint = array.length / 2 - 1 //put -1 because without it, it will return the second middle number, var stores index position
      return [array[middlePoint], array[middlePoint + 1]];
    }
    else if (array.length % 2 !== 0) {
      return [array[Math.floor(array.length /2)]];
    }
  };



//var middle = arr[Math.floor(arr.length / 2)]; this will work for an odd number of the array (2nd number in an even case)
//var middle = arr[Math.round((arr.length - 1) / 2)]; this also will work for an odd number of the array (1st number in an even case)
//the two combined will get you the middle if it is even

module.exports = middle;