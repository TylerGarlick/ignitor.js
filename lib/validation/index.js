'use strict';

var _ = require('lodash')
    ;

function Validator() {
    var registry = {};

    var determineKind = function (obj, key, value) {
        if (value.type) {

        }
    }

    Object.defineProperties(this, {
        validate: {
            enumerable: true,
            value: function (obj) {
                var props = _.keys(obj);
            }
        },
        validators: {
            enumerable: true,
            value: {}
        }
    });

    Object.defineProperties(this.validators, {
        /**
         * Retrieves all validators
         * @property {object} all
         */
        all: {
            enumerable: true,
            value: registry
        },

        /**
         * Register a new validator
         * @function register
         * @params {string} forType - The type that the validator will be run against
         * @params {function} validationFn - Validator function which will return true if valid and receive an instance of the object
         */
        register: {
            enumerable: true,
            value: function (forType, validationFn) {
                var self = this;
                if (self.has(forType)) {

                }

                if (!_.has(registry, forType)) {
                    registry[forType] = [];
                }
                registry[forType].push(validationFn);
            }
        },
        unregister: {
            enumerable: true,
            value: function (forType) {
                var self = this;
                if (self.has(forType)) {
                    delete registry[forType];
                }
            }
        },
        has: {
            enumerable: true,
            value: function (forType) {
                return _.has(registry, forType);
            }
        }
    });


}


module.exports = new Validator();