const assert = require('assert');
const createRightTriangle = require('../patternsLibrary.js').createRightTriangle;
assert.deepEqual(createRightTriangle(1),['*']);
assert.deepEqual(createRightTriangle(2),[' *','**']);
assert.deepEqual(createRightTriangle(3),['  *',' **','***']);
