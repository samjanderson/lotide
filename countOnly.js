
const countOnly = function (allItems, itemsToCount) {
  let totalCountObj = {};
  for (let item of allItems) {   //loop through each name in the array
    if (itemsToCount[item] === true) {
      if (!totalCountObj[item]) {
        totalCountObj[item] = 1;
      } else {
        totalCountObj[item] += 1;
      }
    }
  }
  return totalCountObj;
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);