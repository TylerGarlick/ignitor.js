"use strict";

var util = require('util')
  ;

function IgnitorError(msg) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.message = msg;
  this.name = 'IgnitorError';
};

IgnitorError.prototype.formatMessage = function (msg, path, type, val) {
  if (!msg) throw new TypeError('message is required');

  return msg.replace(/{PATH}/, path)
    .replace(/{VALUE}/, String(val || ''))
    .replace(/{TYPE}/, type || 'declared type');
}

util.inherits(IgnitorError, Error);

module.exports = exports = IgnitorError;


IgnitorError.ValidatorError = require('./errors/validator');
IgnitorError.ModelExistsError = require('./errors/modelExists');