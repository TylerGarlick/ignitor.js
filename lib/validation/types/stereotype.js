'use strict';

/**
 * Basic Type Validator
 *
 * @protected
 * @abstract
 *
 * @property {numeric=0} ordinal
 * @property {boolean=true} active
 * @property {boolean=true} nullOrUndefinedIsError
 *
 * @param {numeric} [options.ordinal] The order in which the validator should run (if more than one validator per type)
 * @param {boolean} [options.active] enable or disable the type validator
 * @param {boolean} [options.nullOrUndefinedIsError] determines whether an undefined or empty should return an error
 *
 * @constructor
 */
function StereotypicalTypeValidator(options) {
    options = options || {};

    Object.defineProperties(this, {
        ordinal: {
            enumerable: true,
            value: options.ordinal || 0
        },
        active: {
            enumerable: true,
            value: options.active || true
        }
    });
}

module.exports = StereotypicalTypeValidator;