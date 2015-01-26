'use strict';

var Symbol = require('es6-symbol/polyfill');

// symbolTable should be a WeakMap
var symbolTable = {};

var create = function(name) {
  if (this instanceof Symbol) {
    throw new TypeError('can\'t call symbol with new operator');
  }
  if (!symbolTable[name]) {
    symbolTable[name] = Symbol(name);
  }
  return symbolTable[name];
};

exports.create = create;
