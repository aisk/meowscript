var assert = require('assert');
var Parser = require('../lib/parser');
var Pair = require('../lib/pair');
var symbol = require('../lib/symbol');

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
      assert(symbol.create('i-am-a-symbol') === parser.parseSymbol());
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

  describe('#parseList()', function() {
    it('should got a valid list', function() {
      var parser = new Parser("(1 2 3)");
      assert(parser.parseList().toString() === '(1 2 3)');
    });
  });

  describe('#parseQuote()', function() {
    it('should got a valid quote list', function() {
      var parser = new Parser("'(foo bar)");
      assert(parser.parseQuote().toString() ===
        Pair.makeList(symbol.create('quote'), symbol.create('foo'), symbol.create('bar')).toString());
    });

    it('should got a valid quasiquote list', function() {
      var parser = new Parser("`(foo bar)");
      assert(parser.parseQuote().toString() ===
        Pair.makeList(symbol.create('quasiquote'), symbol.create('foo'), symbol.create('bar')).toString());
      });
  });

  describe('#parse()', function() {
    it('should go a valid expr', function() {
      var parser = new Parser('(display "Hello World!")');
      var expr = parser.parse();
    });

    it('should go a nested expr', function() {
      var parser = new Parser("(+ 1 (- 3 2))");
      var expr = parser.parse();
      assert(expr.toString() === '(+ 1 (- 3 2))');
    });
  });
});
