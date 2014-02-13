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
function NumericValidator(options) {
    NumericValidator.super_.call(this, options);
    _.assign(this, mixins.ranges);
}
util.inherits(NumericValidator, TypeValidator);

/**
 * Performs validation
 * @param {string} name - name of the property that is being validated
 * @param {numeric} instance
 * @param {object} schema
 * @param {numeric} schema.min
 * @param {numeric} schema.max
 * @param {object} [options]
 * @return {Array<ValidationError>}
 */
NumericValidator.prototype.validate = function (name, instance, schema, options) {
    var self = this;
    var errors = [];

    var options = options || {};
    var schema = schema || {};

    if (!self.isValidType(instance))
        errors.push(new Errors.ValidationTypeError(instance.constructor.name, "numeric"));

    if (schema.required) {
        if (_.isNumber(instance)) {
            errors.push(new Errors.ValidationError(name, instance, name + " is required"));
        }
    }

    if (schema.min && self.isMin(instance, schema.min))
        errors.push(new Errors.ValidationError(name, instance));

    if (schema.max && self.isMax(instance, schema.max))
        errors.push(new Errors.ValidationError(name, instance));

    return errors;
};

/**
 * Determines if an instance is a valid type
 *
 * @param {object} instance
 * @returns {boolean}
 */
NumericValidator.prototype.isValidType = function (instance) {
    return _.isNumber(instance) && mixins.objects.isTypeOf(instance, 'numeric');
};

module.exports = NumericValidator;
