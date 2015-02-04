/**
 * 
 * @author oskmkr@gmail.com
 */
var StringUtils = require('./stringUtils.js');
var assert = require('assert');

assert.equal(false, StringUtils.isEmpty('abc'));
assert.equal(true, StringUtils.isEmpty(''));
assert.equal(false, StringUtils.isEmpty(' '));

assert.equal(false, StringUtils.isBlank('abc'));
assert.equal(true, StringUtils.isBlank(''));
assert.equal(true, StringUtils.isBlank(' '));
