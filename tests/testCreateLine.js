const assert = require('assert');
const createLine = require('../patternUsingArrayLib.js').createLine;

assert.equal(createLine(0,5,'*'),'*****');
assert.equal(createLine(0,3,'#'),'###');
assert.equal(createLine(0,1,'&'),'&');
