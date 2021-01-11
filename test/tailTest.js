// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const assert = require('chai').assert;
// const tail = require('../tail');


 const assert = require('chai').assert.deepEqual;
 const tail = require('../tail');

 describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert(tail([1, 2, 3]), [ 2, 3])
  });

  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = ['Lighthouse', 'Labs']
    assert(tail(input), output);
  });

  it("returns [] if you pass in an empty array", () => {
    const input = [];
    const output = [];
    assert(tail(input), output);
  });

});