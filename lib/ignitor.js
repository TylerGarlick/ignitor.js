'use strict';

module.exports = new Ignitor();

function Ignitor() { }

Object.defineProperties(Ignitor, {
  _ioc: { enumerable: false, configurable: false, value: require('minioc') }
});

Object.defineProperties(Ignitor.prototype, {
  _container: { enumerable: false, configurable: false, value: Ignitor._ioc }
});