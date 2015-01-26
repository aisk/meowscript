var Pair = function(first, rest) {
  this.first = first;
  this.rest = rest;
};

Pair.prototype.toString = function() {
  return '(' + this.first + ' . ' + this.rest + ')';
};

module.exports = Pair;
