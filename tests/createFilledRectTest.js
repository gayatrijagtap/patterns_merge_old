const assert = require('assert');
const createFilledRect = require('../patternsLibrary.js').createFilledRect;

const _5Stars = '*****', _20Stars = '********************';

assert.deepEqual(createFilledRect(5,5),
  [_5Stars,_5Stars,_5Stars,_5Stars,_5Stars]);
assert.deepEqual(createFilledRect(2,2),['**','**']);
assert.deepEqual(createFilledRect(1,1),['*']);
assert.deepEqual(createFilledRect(20,7),
  [_20Stars,_20Stars,_20Stars,_20Stars,_20Stars,_20Stars,_20Stars]); 
