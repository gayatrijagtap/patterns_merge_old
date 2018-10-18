const assert = require('assert');
const filledRectangle = require('../patternsLibrary.js').createFilledRect;

assert.deepEqual(filledRectangle(2,2),['**','**']);
