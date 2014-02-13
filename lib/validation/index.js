'use strict';

var _ = require('lodash')
    , dbc = require('dbc.js')
    , Validators = require('./types')
    ;


/**
 * Register a validator for type
 * @param {string} type - the type to register for validation
 * @param {object} validator - validation object must have a validate function
 */
var register = function (type, validator) {
    var self = this;
    console.log(validator);
    dbc([validator, _.functions(validator, "validate")], "Validator must have a validate method");

    if (!self.has(type))
        Validator.registry[type] = [];

    Validator.registry[type].push(validator);
};

/**
 * Unregister
 * @param {string} type - Unregister type
 */
var remove = function (type) {
    var self = this;
    if (self.has(type)) {
        delete Validator.registry[type];
    }
};

/**
 * Does validator exist for type
 * @param type
 * @returns {boolean}
 */
var has = function (type) {
    return _.has(Validator.registry, type);
};

/**
 * Get validators for type
 * @param {string} type
 * @returns {Array<StereotypicalTypeValidator>}
 */
var get = function (type) {
    return Validator.registry[type];
};


var validators = {};
Object.defineProperties(validators, {
    all: { enumerable: true, configurable: false, value: Validator.registry },
    register: { enumerable: true, configurable: false, value: register },
    remove: { enumerable: true, configurable: false, value: remove },
    get: { enumerable: true, configurable: false, value: get },
    has: { enumerable: true, configurable: false, value: has }
});


function Validator() {

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
        validators: { enumerable: true, configurable: false, value: validators }
    });


    // Setup default validators
    this.validators.register('string', new Validators.String());
    this.validators.register('numeric', new Validators.Numeric());
    this.validators.register('date', new Validators.Date());
}

Object.defineProperties(Validator, {
    registry: {enumerable: false, configurable: false, value: {}}
});

module.exports = new Validator();