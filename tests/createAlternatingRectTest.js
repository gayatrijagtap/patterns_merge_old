const assert = require('assert');
const createAlternatingRect = require('../patternsLibrary.js').createAlternatingRect;

assert.deepEqual(createAlternatingRect(5,5),['*****','-----','*****','-----','*****']);
assert.deepEqual(createAlternatingRect(2,2),['**','--']);
assert.deepEqual(createAlternatingRect(1,1),['*']);
