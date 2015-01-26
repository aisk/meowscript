var assert = require('assert');
var Parser = require('../lib/parser');

describe('Parser', function() {
  describe('#parse()', function() {
    it('should parse the source', function() {
      
    });
  });

  describe('#skip()', function() {
    it('should skip all', function() {
      var parser = new Parser("; some comments\r\n;xxx\r\n");
      parser.skip();
      assert(parser.pos === parser.src.length);
      assert(parser.lino === 3);
    });
  });

  describe('#parseString()', function() {
    it('should got a valid string', function() {
      var parser = new Parser('"this is a string"');
      assert('this is a string' === parser.parseString());
    });
  });

  describe('#parseSymbol()', function() {
    it('should got a valid symbol', function() {
      var parser = new Parser('i-am-a-symbol');
      assert('i-am-a-symbol' === parser.parseSymbol());
    });
  });

  describe('#parseNumber()', function() {
    it('should got a valid integer number', function() {
      var parser = new Parser('+42');
      assert(42 === parser.parseNumber());
    });

    it('should got a negative float number', function() {
      var parser = new Parser('-12.34');
      assert(-12.34 === parser.parseNumber());
    });
  });
});