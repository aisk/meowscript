var create = function(name) {
  name.__isMeowSymbol = true;
  return name;
};

var isSymbol = function(symbol) {
  return symbol.__isMeowSymbol? true: false;
};

exports.create = create;
exports.isSymbol = isSymbol;
