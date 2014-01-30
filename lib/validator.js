"use strict";
var _ = require('lodash')
  ;

function Validator() {

}

Validator.validateByKind = function (kind, value) {
  kind = kind.toLowerCase();
  var isNotNullOrUndefined = !_.isNull(value) && !_.isUndefined(value);
  switch (kind) {
    case 'object' :
      return _.isObject(value) && isNotNullOrUndefined;
    case 'string' :
      return _.isString(value) && isNotNullOrUndefined;
    case 'numeric' :
      return _.isNumber(value) && isNotNullOrUndefined;
    case 'int' :
      return _.isNumber(value) && isNotNullOrUndefined;
    case 'array' :
      return _.isArray(value) && isNotNullOrUndefined;
    case 'date' :
      return _.isDate(value) && isNotNullOrUndefined;
    case 'boolean' :
      return _.isBoolean(value) && isNotNullOrUndefined;
  }

  return false;
};


Validator.validate = function (instance, schema) {
  var isValid = (!_.isNull(instance) && !_.isUndefined(instance)) && (!_.isNull(schema) && !_.isUndefined(schema));
  var errors = [];
  if (isValid) {
    var keys = _.keys(schema);
    _.forEach(keys, function (key) {
      var schemaValue = schema[key];
      var kind = schemaValue.kind.toLowerCase();
      var value = instance[key];

      if (schemaValue.required && kind) {

        if (!Validator.validateByKind(kind, value)) {
          errors.push({
            key: key,
            message: 'Expecting ' + kind + ' but got ' + value.instance.toString(),
            value: value
          });
        }

        if (kind === 'string') {
          if (value.length == 0) {
            errors.push({
              key: key,
              message: 'String is required',
              value: value
            });
          }
        }

        if (kind === 'string' || kind === 'numeric') {
          if (schemaValue.minLength && _.isNumber(schemaValue.minLength)) {
            if (value.length < (schemaValue.minLength)) {
              errors.push({
                key: key,
                message: 'Value must be greater than ' + schemaValue.minLength,
                value: value
              });
            }
          }

          if (schemaValue.maxLength && _.isNumber(schemaValue.maxLength)) {
            if (value.length > (schemaValue.maxLength)) {
              errors.push({
                key: key,
                message: 'Value must be less than ' + schemaValue.maxLength,
                value: value
              });
            }
          }
        }

        if (kind === 'numeric' || _.isNumber(value)) {
          if (schemaValue.min && _.isNumber(schemaValue.min)) {
            if (value <= schemaValue.min) {
              errors.push({
                key: key,
                message: 'Value must be greater than ' + schemaValue.min,
                value: value
              });
            }
          }

          if (schemaValue.max && _.isNumber(schemaValue.max)) {
            if (value > schemaValue.max) {
              errors.push({
                key: key,
                message: 'Value must be less than ' + schemaValue.max,
                value: value
              });
            }
          }
        }

      }
    });
  }

  return {
    isValid: errors.length == 0 && isValid,
    errors: errors
  };
};

module.exports = Validator;