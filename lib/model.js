'use strict';

var _ = require('lodash'),
    Repository = require('./repository'),
    dbc = require('dbc.js'),
    validate = require('jsonschema').validate;


/**
 * Model
 * @param {Object} instance
 * @param {Object} [options]
 * @param {Object} [options.schema]
 * @param {String} [options.collection]
 * @constructor
 */
function Model(instance, options) {
    var self = this;
    options = options || {};
    instance = instance || {};

    this.schema = options.schema;
    self.collection = options.collection || this.schema.collection;
    dbc(self.collection && self.collection.length > 0 && _.isString(self.collection), "Collection name is required");

    this.repository = options.repository;


    _.merge(self, instance);
    _.forEach(_.keys(self.schema.properties), function (key) {
        if (self.schema[key].default) {
            self[key] = self.schema[key].default;
        }
    });
}

module.exports = Model;

Object.defineProperties(Model.prototype, {
    collection: {enumerable: false, configurable: false, writable: true },
    repository: {enumerable: false, configurable: false, writable: true },
    schema: {enumerable: false, configurable: false, writable: true },
    //relationships: { enumerable: false, configurable: false, value: [] },
    validators: {enumerable: false, configurable: false, value: []}
});

/**
 * Determines if a model is valid per it's validators
 * @returns {boolean}
 */
Model.prototype.isValid = function () {
    var self = this;
    return self.errors().length == 0 && validate(self, defaultSchema);
};

/**
 * Performs validation and returns any errors
 * @returns {Array}
 */
Model.prototype.errors = function () {
    var self = this,
        errors = [];
    _.forEach(self.validators, function (validator) {
        if (_.isFunction(validator)) {
            var result = validator(self);
            if (_.isArray(result)) {
                _.forEach(result, function (err) {
                    errors.push(err);
                });
            }
        }
    });
    return errors;
};
