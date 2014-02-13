'use strict';

var _ = require('lodash')
    , util = require('util')
    , TypeValidator = require('./stereotype')
    , Errors = require('../../errors/validation')
    , mixins = require('./mixins')
    ;

/**
 * String validation
 *
 * @constructor
 */
function StringValidator(options) {
    StringValidator.super_.call(this, options);
    _.assign(this, mixins.lengths);
}
util.inherits(StringValidator, TypeValidator);

/**
 * Performs validation
 * @param {string} name - name of the property that is being validated
 * @param {string} instance
 * @param {object} schema
 * @param {object} [options]
 * @return {Array<ValidationError>}
 */
StringValidator.prototype.validate = function (name, instance, schema, options) {
    var self = this;
    var errors = [];

    var options = options || {};
    var schema = schema || {};

    if (!self.isValidType(instance))
        errors.push(new Errors.ValidationTypeError(instance.constructor.name, "string"));

    if (schema.required) {
        if (self.isEmpty(instance)) {
            errors.push(new Errors.ValidationError(name, instance, name + " is required"));
        }
    }

    if (schema.minLength && self.isMinLength(instance, schema.minLength))
        errors.push(new Errors.ValidationError(name, instance));

    if (schema.maxLength && self.isMaxLength(instance, schema.maxLength))
        errors.push(new Errors.ValidationError(name, instance));

    return errors;
};

/**
 * Determines if an instance is a valid type
 *
 * @param {object} instance
 * @returns {boolean}
 */
StringValidator.prototype.isValidType = function (instance) {
    return _.isString(instance) && mixins.objects.isTypeOf(instance, 'string');
};

module.exports = StringValidator;
