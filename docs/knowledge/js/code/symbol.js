const genUniqueName = (function () {
  let id = 0;
  return function (description) {
    return '@@' + description + '_' + id++;
  };
})();
function SymbolPolyfill(description) {
  if (this instanceof Symbol)
    throw new TypeError('Symbol is not a constructor');

  const symbol = {
    toString() {
      return this.__Name__;
    }
  };
  Object.defineProperties(symbol, {
    __Name__: {
      value: genUniqueName(description),
      writable: false,
      configurable: false,
      enumerable: false
    },
    __Description__: {
      value: description,
      writable: false,
      configurable: false,
      enumerable: false
    }
  });
  return symbol;
}

var a = SymbolPolyfill('foo');
var b = SymbolPolyfill('foo');

console.log(a === b); // false

console.log(a.toString());

var o = {};
o[a] = 'hello';
o[b] = 'hi';

console.log(o); // Object { "@@foo_1": "hello", "@@foo_2": "hi" }
