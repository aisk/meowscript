'use strict';

var util = require('util');
var escodegen = require('escodegen');
var Pair = require('./pair');
var symbol = require('./symbol');

var isLiteral = function(expr) {
  return util.isNumber(expr) || util.isBoolean(expr) || util.isString(expr);
};

var Compiler = function() {
};

Compiler.prototype.compile = function(expr, env) {
  console.log(expr);
  var ast = {
    type: 'Program',
    body: [],
  };

  if (isLiteral(expr)) {
    this.genLiteral(ast, expr);
  } else if (pair.isList(expr)) {
    console.log('is list');
  }
  // if (symbol.isSymbol(expr)) {

  // } else if (!pair.isList(expr)) {
  //   
  // }
  // pair.listEach(expr, function() {

  // });
  return escodegen.generate(ast);
};

Compiler.prototype.genLiteral = function(node, expr) {
  node.body.push({
    type: 'Literal',
    value: expr,
  });
};

Compiler.prototype.genFunctionCall = function(node, expr) {
  var args = [];
  Pair.listEach(expr, function(i, expr) {
    if (i === 0) {
      return;
    }
    args.push();
  }); 
  node.body.push({
    type: 'CallExpression',
    callee: {

    },
    arguments: args,
  });
};

module.exports = Compiler;
