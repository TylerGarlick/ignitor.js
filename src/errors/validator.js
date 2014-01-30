"use strict";

var IgnitorError = require('../error')
  , util = require('util')
  ;

function ValidatorError(path, msg, type, val) {
  if (!msg) msg = "ValidatorError";
  var message = this.formatMessage(msg, path, type, val);
  IgnitorError.call(this, message);
//  Error.captureStackTrace(this, arguments.callee);
  this.name = 'ValidatorError';
  this.path = path;
  this.type = type;
  this.value = val;

}

util.inherits(ValidatorError, IgnitorError);


ValidatorError.prototype.toString = function () {
  return this.message;
}

module.exports = ValidatorError;