var assert = require('assert');
var Pair = require('../lib/pair');

describe('Pair', function() {
  describe('#toString()', function() {
    it('should get the string format of pair', function() {
      var pair = new Pair('foo', 'bar');
      assert(pair.toString() === '(foo . bar)');
    });

    it('should get a empty format of pair', function() {
      assert(Pair.empty.toString() == '()');
    });
  });
});
