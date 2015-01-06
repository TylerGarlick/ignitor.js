'use strict';

var _ = require('lodash'),
    Joi = require('joi');

exports = module.exports = Schema;

/**
 * Schema Definition
 *
 * @param {object} schemaDefinition
 * @param {object} [options]
 *
 * @constructor
 */
function Schema(schemaDefinition, options) {

  if (!_.isObject(schemaDefinition)) {
    throw new Error('Schema is required and must be an object');
  }

  Object.defineProperties(this, {

    // Private Properties
    _options: { enumerable: false, configurable: false, value: options || {} },
    _schemaDefinition: { enumerable: false, configurable: false, value: schemaDefinition },
    _stereotype: { enumerable: false, configurable: false, value: Joi.object().keys(schemaDefinition) }
  });
}

/**
 * Validates an instance of an object against the this schema
 * ===============================================
 *
 * var schema = new Schema({});
 * var isValid = schema.validate({});
 *
 * ===============================================
 * @param instance
 * @param {object} options
 * @returns {object} - Results of the validation
 */
Schema.prototype.validate = function (instance, options) {
  options = options || { abortEarly: false, allowUnknown: true };
  var result = Joi.validate(instance, this._stereotype, options);
  return {
    errors: result.error,
    isValid: !result.error,
    value: result.value
  }
};

exports.Joi = Joi;

