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

  describe('.makeList', function() {
    it('should make a list', function() {
      var list = Pair.makeList(1, 2, 3, 4);
      assert('(1 . (2 . (3 . (4 . ()))))' === list.toString());
    });
  });
});
