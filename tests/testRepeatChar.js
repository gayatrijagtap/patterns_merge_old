const assert = require('assert');
const repeatChar = require('../repeatCharLib.js').repeatChar;

assert.deepEqual(repeatChar(0,1,'*'),['*']);
assert.deepEqual(repeatChar(0,2,'#'),['#','#']);
assert.deepEqual(repeatChar(0,5,'&'),['&','&','&','&','&']);
