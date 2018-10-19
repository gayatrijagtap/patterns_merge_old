let assert = require('assert');
let mergePatterns = require('../patternsLibrary.js').mergePatterns;

let getInfo1 = {
              type1 : 'filledRectangle',
              type2 : 'emptyRectangle',
              height : 1,
              width : 1
};

let getInfo2 = {
              type1 : 'emptyRectangle',
              type2 : 'alternatingRectangle',
              height : 1,
              width : 1
};

assert.deepEqual(mergePatterns(getInfo1),['* *']);
assert.deepEqual(mergePatterns(getInfo2),['* *']);
