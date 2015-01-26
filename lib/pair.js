var Pair = function(first, rest) {
  this.first = first;
  this.rest = rest;
};

Pair.empty = new Pair(undefined, undefined);

Pair.prototype.toString = function() {
  if (this.first === undefined && this.rest === undefined) {
    return '()';
  }
  return '(' + this.first + ' . ' + this.rest + ')';
};

module.exports = Pair;
