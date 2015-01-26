var assert = require('assert');
var symbol = require('../lib/symbol');

describe('Symbol', function() {
  describe('#==()', function() {
    it('should equal', function() {
      assert(symbol.create('foo') === symbol.create('foo'));
    });

    it('shouldn\'t equal', function() {
      assert(symbol.create('foo') !== symbol.create('bar'));
    });
  });
});
