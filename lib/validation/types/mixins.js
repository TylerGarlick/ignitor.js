'use strict';

var _ = require('lodash')
    , dbc = require('dbc.js')
    ;

var __ = {
    objects: {
        /**
         * Determines if instance is a valid type or type of expected type
         * @param {object} instance
         * @param {object|string} [expectedType] - ignores the type check if expected type is not supplied
         * @returns {boolean}
         */
        isTypeOf: function (instance, expectedType) {
            var typeName = expectedType || "";
            if (_.isFunction(expectedType))
                typeName = expectedType.constructor.name;
            typeName = typeName.toLowerCase();

            var instanceType = instance.constructor.name.toLowerCase();
            var isValid = !(__.objects.isNull(instance) || __.objects.isUndefined(instance));

            if (expectedType && expectedType.length > 0)
                isValid = typeName === instanceType
            return isValid;
        },

        /**
         * Determines if the instance is null (wraps lodash is null)
         * @param {object} instance
         * @returns {boolean}
         */
        isNull: function (instance) {
            return _.isNull(instance);
        },

        /**
         * Determines if the instance is null (wraps lodash is undefined)
         * @param {object} instance
         * @returns {boolean}
         */
        isUndefined: function (instance) {
            return _.isUndefined(instance);
        }
    },
    lengths: {
        /**
         * Determines if instance is > minLength
         * @param {string} instance
         * @param {numeric} minLength
         * @returns {boolean}
         */
        isMinLength: function (instance, minLength) {
            dbc([minLength > -1], "minLength must be a positive number");
            return instance.length > minLength;
        },
        /**
         * Determines if instance is < maxLength
         * @param {string} instance
         * @param {numeric} maxLength
         * @returns {boolean}
         */
        isMaxLength: function (instance, maxLength) {
            dbc([maxLength > -1], "maxLength must be a positive number");
            return instance.length < maxLength;
        },
        /**
         * Determines if instance's length is minLength < instance < maxLength
         * @param {string} instance
         * @param {numeric} minLength
         * @param {numeric} maxLength
         * @returns {boolean}
         */
        isLengthBetween: function (instance, minLength, maxLength) {
            return __.lengths.isMinLength(instance, minLength) && __.lengths.isMaxLength(instance, maxLength);
        },
        /**
         * Determines if an instance is empty
         * @param {string} instance
         * @returns {boolean}
         */
        isEmpty: function (instance) {
            return _.isEmpty(instance);
        }
    },
    ranges: {
        /**
         * Determines if instance is greater than minimum
         * @param {numeric} instance
         * @param {numeric} minimum
         * @returns {boolean}
         */
        isMin: function (instance, minimum) {
            dbc([!_.isNaN(minimum)], "Minimum must be a number");
            return instance > minimum;
        },
        /**
         * Determines if instance is less than maximum
         * @param {numeric} instance
         * @param {numeric} maximum
         * @returns {boolean}
         */
        isMax: function (instance, maximum) {
            dbc([!_.isNaN(maximum)], "Maximum must be a number");
            return instance < maximum;
        },
        /**
         * Determines if instance is between minimum and maximum
         * @param {numeric} instance
         * @param {numeric} minimum
         * @param {numeric} maximum
         * @returns {boolean}
         */
        isBetween: function (instance, minimum, maximum) {
            return __.ranges.isMin(instance, minimum) && __.ranges.isMax(instance, maximum);
        }
    },
    dates: {
        isDate: function (instance) {
            return _.isDate(instance);
        },
        isBefore: function (instance, date) {
            return moment(instance).isBefore(date);
        },
        isAfter: function (instance, date) {
            return moment(instance).isAfter(date);
        }
    }
};

module.exports = __;