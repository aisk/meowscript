var assert = require('assert');
var Compiler = require('./../lib/Compiler');
var Parser = require('./../lib/Parser');

describe('Compilder', function() {
  describe('#new', function() {
    it('shoud get a Compiler instance', function() {
      var parser = new Parser('(+ 1 2)');
      var compider = new Compiler(parser.parse());
    });
  });
  
});
