'use strict';

var util = require('util');
var pair = require('./pair');
var symbol = require('./symbol');

var selfEvalable = function(expr) {
  return util.isNumber(expr) || util.isBoolean(expr) || util.isString(expr);
};

var Compiler = function() {
};

Compiler.prototype.compile = function(expr, env) {
  if (symbol.isSymbol(expr)) {

  } else if (!pair.isList(expr)) {
    
  }
  pair.listEach(expr, function() {

  });
};

Compiler.prototype.genExpr = function(bdr, expr, keep, tail) {

};

module.exports = Compiler;
