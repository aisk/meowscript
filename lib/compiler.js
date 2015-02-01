'use strict';

var Compiler = function(expr) {
  if (!expr) {
    throw new TypeError('first param expr needed');
  }
  this.expr = expr;
};

Compiler.prototype.compile = function() {

};

module.exports = Compiler;
