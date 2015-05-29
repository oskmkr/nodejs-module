/**
 * @see http://mochajs.org
 * @author oskmkr@gmail.com
 */
var assert = require('assert'),
    stringUtils = require('../stringUtils.js'),
    fs = require('fs');

var asyncFunc = function(sCallback) {

  setTimeout(function() {
    sCallback.call();
  }, 5000)
}

describe('Array', function() {
  describe('#indexOf()', function() {

    // body...
    it('값이 없는 경우 -1을 return 해야 한다.', function() {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    })
  })
})

describe('Async', function() {
  it('asyncFunc', function() {

      asyncFunc(function() {
        console.log('hi');
        done();
      });

      fs.readFile('ee.txt', function(err, data) {
          done();
      })

  })
})

describe('StringUtils', function() {
  describe('#isEmpty()', function() {

      it('값이 undefined 거나 문자열의 길이가 zero 인 경우 true 를 반환한다.', function() {
          assert.equal(true, stringUtils.isEmpty(undefined));
          assert.equal(true, stringUtils.isEmpty(''));
      })

      it('값이 길이가 zero 가 아닌 경우 false 를 반환한다.', function() {
          assert.equal(false, stringUtils.isEmpty(' '));
          assert.equal(false, stringUtils.isEmpty('abc'));
      })

  })

  describe('#isBlank()', function() {

      it('값이 undefined 거나 빈문자열, 문자열의 길이가 zero 인 경우 true 를 반환한다.', function() {
          assert.equal(true, stringUtils.isBlank(undefined));
          assert.equal(true, stringUtils.isBlank(''));
          assert.equal(true, stringUtils.isBlank('   '));
      })

      it('값이 길이가 zero 가 아닌 경우 false 를 반환한다.', function() {
          assert.equal(false, stringUtils.isBlank('abc'));
      })
  })

  before('before', function() {
    //console.log('before');
  })

  beforeEach(function() {
    //console.log('beforeEach');
  })

  after(function() {
    //console.log('after');
  })

  afterEach(function() {
    //console.log('afterEach');
  })

})
