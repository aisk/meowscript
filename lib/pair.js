var Pair = function(first, rest) {
  this.first = first;
  this.rest = rest;
};

Pair.empty = new Pair(undefined, undefined);

Pair.makeList = function() {
  var list = Pair.empty;
  for (var i=arguments.length-1; i >= 0; i--) {
    list = new Pair(arguments[i], list);
  }
  return list;
};

Pair.prototype.toString = function() {
  if (this.first === undefined && this.rest === undefined) {
    return '()';
  }
  return '(' + this.first + ' . ' + this.rest + ')';
};

module.exports = Pair;
