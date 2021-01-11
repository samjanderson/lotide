const assert = require('chai').assert.deepEqual; //deepEqual like assertArraysEqual
const middle = require('../middle');

describe('#middle', () => {
  it ('returns [3] if you pass in [1, 2, 3, 4, 5]', () => {
    let input = [1, 2, 3, 4, 5];
    let output = [3];
    assert(middle(input), output);
  });

  it ('returns an empty array if you pass in an array with a length less than 3', () => {
    let input = [1, 2]
    let output = []
    assert(middle(input), output);

  });

  it ('returns the two middle numbers if you pass it an even numbered array longer than 2', () => {
    let input = [1, 2, 3, 4, 5, 6];
    let output = [3, 4];
    assert(middle(input), output);

  });

  it ('returns the middle number if you pass it an array of length 3', () => {
    let input = [1, 8, 12]
    let output = [8]
    assert(middle(input), output);

  });

});
// assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);