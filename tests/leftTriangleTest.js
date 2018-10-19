const assert = require('assert');
const createLeftTriangle = require('../patternsLibrary.js').createLeftTriangle;
assert.deepEqual(createLeftTriangle(1),['*']);
assert.deepEqual(createLeftTriangle(2),['*','**']);
assert.deepEqual(createLeftTriangle(3),['*','**','***']);
