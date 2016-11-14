(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.mybundle = factory());
}(this, (function () { 'use strict';

var foo = 42;

var bar = 56;

var main = function () {
  console.log(foo + " -- " + bar);
};

return main;

})));
