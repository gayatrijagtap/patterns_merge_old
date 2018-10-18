const assert = require('assert');
const insertChar = require('../patternsLibrary.js').insertChar;

assert.deepEqual(insertChar(1,'*','*','*'),[['*']]);
