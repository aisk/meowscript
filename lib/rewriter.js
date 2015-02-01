'use strict';

var WHITESPACE = ' ';
var NEWLINE = '\r\n';

var Rewriter = function() {
  this.indent = 0;
  var result = [];
};

Rewriter.prototype.write = function(str) {
  for (var i=0; i<=this.indent; i++) {
    this.result.push(WHITESPACE);
  }
  this.result.push(str);
  this.result.push(NEWLINE);
};

Rewriter.prototype.writeDefine = function() {

};

Rewriter.prototype.writeFunction = function() {

};
