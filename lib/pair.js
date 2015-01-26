var Pair = function(car, cdr) {
  this.car = car;
  this.cdr = cdr;
};

Pair.empty = new Pair(undefined, undefined);

Pair.makeList = function() {
  var list = Pair.empty;
  for (var i=arguments.length-1; i >= 0; i--) {
    list = new Pair(arguments[i], list);
  }
  return list;
};

Pair.isList = function(list) {
  var cdr = list;
  while (true) {
    if (cdr === Pair.empty) {
      return true;
    }
    if (! (cdr instanceof Pair)) {
      return false;
    }
    // console.log('->', cdr, cdr instanceof Pair);
    cdr = cdr.cdr;
  }
};

Pair.prototype.toString = function() {
  if (this.car === undefined && this.cdr === undefined) {
    return '()';
  }
  return '(' + this.car + ' . ' + this.cdr + ')';
};

module.exports = Pair;
