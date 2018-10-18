const assert = require('assert');
const createEmptyRect = require('../patternsLibrary.js').createEmptyRect;

assert.deepEqual(createEmptyRect(5,5),['*****','*   *','*   *','*   *','*****']);
assert.deepEqual(createEmptyRect(2,2),['**','**']);
assert.deepEqual(createEmptyRect(1,1),['*']);
