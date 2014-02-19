'use strict';
var util = require('util');

function IgnitorError(options) {
    options = options || {};
    IgnitorError.super_.call(this);
    this.message = options.message;
    this.errorName = options.errorName || "IgnitorError";
}
util.inherits(IgnitorError, Error);

exports = module.exports = IgnitorError;


function ValidationError(name, value, friendlyMessage) {
    ValidationError.super_.call(this, { errorName: "ValidationError", message: friendlyMessage});
    this.name = name;
    this.value = value;
}
util.inherits(ValidationError, IgnitorError);
exports.ValidationError = ValidationError;
