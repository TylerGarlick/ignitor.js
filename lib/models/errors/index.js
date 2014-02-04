"use strict";

var util = require('util')
  , BasicError = require('./ignitor')
  ;

var Errors = exports = module.exports = {};

/*******************************
 Basic Error Collection
 ********************************/
function BasicErrorCollection(msg) {
  BasicErrorCollection.super_.call(this, msg);
  Object.defineProperties(this, {
    Error: { enumerable: false, writable: false, value: function (property, value, message) {
      return {
        property: property,
        value: value,
        message: message
      }
    }},
    errors: { enumerable: true, writable: true, value: [] },
    addError: { enumerable: true, writable: false,
      value: function (error) {
        this.errors.push(error);
      }},
    displayErrors: { enumerable: true, writable: false, value: function () {
      return util.inspect(this.errors);
    }}
  });
}
util.inherits(BasicErrorCollection, BasicError);


/*******************************
 Model Not Found Error
 ********************************/
function ModelNotFoundError(msg, opts) {
  ModelNotFoundError.super_.call(this, msg);
  opts = opts || {};
  this.name = opts.name || "ModelNotFoundError";

  if (opts.modelName) {
    this.modelName = opts.modelName;
  }
}
util.inherits(ModelNotFoundError, BasicError);


/*******************************
 Validation Error
 ********************************/
function ValidationError(opts) {
  opts = opts || {};
  ValidationError.super_.call(this, opts.msg || '');
  this.name = opts.name || "ValidationError";

  if (opts.errors)
    this.errors = opts.errors;
}
util.inherits(ValidationError, BasicErrorCollection);


/*******************************
 Schema Error
 ********************************/
function SchemaError(msg, opts) {
  opts = opts || {};
  SchemaError.super_.call(this, opts.msg || '');
  this.name = opts.name || "SchemaError";

  if (opts.errors)
    this.errors = opts.errors;
}
util.inherits(SchemaError, BasicErrorCollection);


Object.defineProperties(Errors, {
  ModelNotFoundError: { enumerable: true, writable: false, value: ModelNotFoundError },
  ValidationError: {enumerable: true, writable: false, value: ValidationError },
  SchemaError: {enumerable: true, writable: false, value: SchemaError }
});
