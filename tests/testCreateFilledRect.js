const assert = require('assert');
const createFilledRect = require('../repeatCharLib.js').createFilledRect;

assert.deepEqual(createFilledRect(5,5),['*****','*****','*****','*****','*****']);
assert.deepEqual(createFilledRect(2,2),['**','**']);
assert.deepEqual(createFilledRect(1,1),['*']);