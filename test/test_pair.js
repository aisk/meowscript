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

    it('should get the string format of list', function() {
      var list = new Pair('foo', new Pair('bar', Pair.empty));
      assert(Pair.isList(list));
      assert(list.toString() === '(foo bar)');
    });
  });

  describe('.makeList()', function() {
    it('should make a list', function() {
      var list = Pair.makeList(1, 2, 3, 4);
      assert('(1 2 3 4)' === list.toString());
    });
  });

  describe('.isList()', function() {
    it('should be a list', function() {
      var list = Pair.makeList(1, 2, 3);
      assert(Pair.isList(list));
    });

    it('shouldn\'t be a list', function() {
      var pair = new Pair(1, 2);
      assert(!Pair.isList(pair));
    });
  });
});
