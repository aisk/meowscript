var isDigit = function(ch) {
  if (ch === null) 
    return false;
  return !isNaN(parseInt(ch, 10));
};

var isSpace = function(ch) {
  if (ch === null)
    return false;
  return (ch === ' ') && (ch === '\t');
};

var Parser = function(src, name) {
  if (name === undefined) {
    name = '__undefined__';
  }
  this.name = name;
  this.src = src;
  this.lino = 1;
  this.pos = 0;
};

Parser.prototype.raiseError = function(reason) {
  throw new SyntaxError(this.name + ':' + this.lino + ':' + this.pos + "  " + reason);
};

Parser.prototype.parse = function() {};

Parser.prototype.more = function() {
  return this.pos < this.src.length;
};

Parser.prototype.pop = function(n) {
  if (n === undefined) {
    n = 1;
  }
  this.pos += n;
};

Parser.prototype.peak = function(idx) {
  if (idx === undefined) {
    idx = 0;
  }

  if ((this.pos + idx) < this.src.length) {
    return this.src[this.pos + idx];
  }
  return null;
};

Parser.prototype.eat = function(ch) {
  if (this.peak() !== ch) {
    return false;
  }
  this.pos ++;
  return true;
};

Parser.prototype.skipComment = function() {
  while (this.eat(';')) {
    while (this.more() && !this.eat('\n')) {
      this.pop();
    }
    this.lino ++;
  }
};

Parser.prototype.skipWhitespace = function() {
  while (this.more()) {
    if (this.eat('\n')) {
      this.lino ++;
    } else if (isSpace(this.peak)) {
      this.pop();
    } else {
      break;
    }
  }
};

Parser.prototype.skip = function() {
  while (true) {
    this.skipWhitespace();
    if (this.peak() == ';') {
      this.skipComment();
    } else {
      break;
    }
  }
};

Parser.prototype.parseString = function() {
  this.eat('"');
  var startPos = this.pos;
  while (this.more()) {
    if (this.peak() === '"') {
      break;
    }
    if (this.peak() === '\n') {
      this.lino ++;
    }
    this.pop();
  }
  var endPos = this.pos;
  if (!this.eat('"')) {
    this.raiseError('expect " at end of a string');
  }
  return this.src.substring(startPos, endPos);
};

Parser.prototype.parseVector = function() {

};

Parser.prototype.parseSymbol = function() {
  var startPos = this.pos;
  while (this.more() && !isSpace(this.peak()) && "'(),@".indexOf(this.peak()) <0) {
    this.pop();
  }
  var endPos = this.pos;
  return this.src.substring(startPos, endPos);
};

Parser.prototype.parseQuote = function() {

};

Parser.prototype.parseList = function() {

};

Parser.prototype.parseNumber = function() {
  var sign = 1;
  if (this.eat('-')) {
    sign = -1;
  }
  this.eat('+');

  var startPos = this.pos;
  while (this.more()) {
    if ((!isDigit(this.peak()) && this.peak() !== '.')) {
      break;
    }
    this.pop();
  }
  var endPos = this.pos;
  return parseFloat(this.src.substring(startPos, endPos)) * sign;
};

Parser.prototype.parseExpr = function() {
  this.skip();
  if (!self.more()) {
    this.raiseError('nothing to parse');
  }

  var parseNumberOrSymbol = function() {};
  var parsePound = function() {
    if (this.peak(1) === 't') {
      this.pop(2);
      return true;
    } else if (this.peak(1) === 'f') {
      this.pop(2);
      return false;
    } else if (this.peak(1) === ')') {
      return this.parseVector();
    } else {
      this.raiseError('expect t / f / ( after #');
    }
  };

  var ch = this.peak();
  var fn = {
    '#': parsePound,
    '+': parseNumberOrSymbol,
    '-': parseNumberOrSymbol, 
    '(': this.parseList,
    "'": this.parseQuote,
    '`': this.parseQuote,
    ',': this.parseUnquote,
    '0': this.parseNumber, 
    '1': this.parseNumber, 
    '2': this.parseNumber, 
    '3': this.parseNumber, 
    '4': this.parseNumber, 
    '5': this.parseNumber, 
    '6': this.parseNumber, 
    '7': this.parseNumber, 
    '8': this.parseNumber, 
    '9': this.parseNumber, 
  }[ch];

  if (fn) {
    return fn();
  }

  return this.parseSymbol();
};

module.exports = Parser;
