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
function DateValidator(options) {
    DateValidator.super_.call(this, options);
    _.assign(this, mixins.dates);
}
util.inherits(DateValidator, TypeValidator);

/**
 * Performs validation
 * @param {string} name - name of the property that is being validated
 * @param {date} instance
 * @param {object} schema
 * @param {date} schema.min
 * @param {date} schema.max
 * @param {object} [options]
 * @return {Array<ValidationError>}
 */
DateValidator.prototype.validate = function (name, instance, schema, options) {
    var self = this;
    var errors = [];

    var options = options || {};
    var schema = schema || {};

    if (!self.isValidType(instance))
        errors.push(new Errors.ValidationTypeError(instance.constructor.name, "date"));

    if (schema.required && instance && _.isDate(instance)) {
        errors.push(new Errors.ValidationError(name, instance, name + " is required"));
    }

    if (schema.before && self.isBefore(instance, schema.before))
        errors.push(new Errors.ValidationError(name, instance));

    if (schema.after && self.isAfter(instance, schema.after))
        errors.push(new Errors.ValidationError(name, instance));

    return errors;
};

/**
 * Determines if an instance is a valid type
 *
 * @param {object} instance
 * @param {boolean} nullOrUndefinedIsError
 * @returns {boolean}
 */
DateValidator.prototype.isValidType = function (instance) {
    return _.isDate(instance) && mixins.objects.isTypeOf(instance, 'date');
};

module.exports = DateValidator;
