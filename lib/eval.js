'use strict';

const symbol = require('./symbol');
const Pair = require('./pair');

function evil(x, env) {
  if (symbol.isSymbol(x)) {
    return env[x];
  } else if (!Pair.isList(x)) {
    return x;
  } else if (x.car === 'if') {
    let test = x.cdr.car;
    let conseq = x.cdr.cdr.car;
    let alt = x.cdr.cdr.cdr.car;
    let expr = evil(test, env) ? conseq : alt;
    return evil(expr, env);
  } else if (x.car === 'define') {
    let variable = x.cdr.car;
    let expr = x.cdr.cdr.car;
    env[variable] = evil(expr, env);
  } else {
    let proc = evil(x.car, env);
    let args = Pair.listEach(x.cdr, (y) => {
      evil(y, env);
    });
  }
};

module.exports = evil;
