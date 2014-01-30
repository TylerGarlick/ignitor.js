"use strict";

var exports = module.exports = {};

exports.String = require('./string');
exports.Numeric = require('./numeric');
exports.Date = require('./date');
exports.Array = require('./array');
exports.Collection = require('./collection');
exports.Key = require('./key');

function Types(){

}

Object.defineProperties(Types.prototype, {
  String: {

  }
});


module.exports = Types;