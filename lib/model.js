'use strict';
var _ = require('lodash'),
    util = require('util'),
    validate = require('jsonschema').validate,
    Repository = require('./repositories'),
    mixins = require('./repositories/mixins'),
    ignitor = require('./ignitor');

/**
 * Model used for validation, hooks, etc
 * @param {String} collection - this name of the collection
 * @param {Object} properties - the schema of the object
 * @constructor
 */
function Model(collection, properties) {
    this.collection = collection;
    this.properties = properties;
    Model.repository = new Repository(collection, {db: ignitor.db });
    Object.defineProperties(this, {

        // Private Properties
        repository: { enumerable: false, configurable: false, value: Model.repository },
        collection: { enumerable: false, configurable: false, writable: true },
        properties: { enumerable: false, configurable: false, writable: true },

        // ArangoDB Specific Properties
        _key: { writable: true, enumerable: true, configurable: false },
        _rev: { writable: true, enumerable: true, configurable: false },
        _id: { writable: true, enumerable: true, configurable: false },
        relationships: { value: {}, enumerable: false, configurable: false },

        // Validation Specific Properties
        isNew: {
            get: function () {
                var self = this;
                return !self._id && !self._key;
            }, enumerable: false, configurable: false },
        errors: {
            get: function () {
                var self = this;
                var result = validate(self, { type: 'object', properties: self.properties}).errors || [];
                return result;
            }, enumerable: false, configurable: false },
        isValid: {
            get: function () {
                return (this.errors || []).length == 0;
            }, enumerable: false, configurable: false },

        // Extensibility
        methods: { value: {}, enumerable: false, configurable: false },
        hooks: {
            value: {
                validate: {
                    pre: [],
                    post: []
                },
                save: {
                    pre: [],
                    post: []
                },

                delete: {
                    pre: [],
                    post: []
                }
            },
            enumerable: false,
            configurable: false
        },

        // Instance Methods
        save: {
            value: function (options, callback) {
                var self = this;
                options = options || {};
                return self.repository.save(self, options, callback);
            }, enumerable: true, configurable: false }
    });
}

/**
 * Wraps Model in StereoType
 *
 * @param {String} collection
 * @param {Object} properties
 * @param {Object} [options]
 * @param {Object} [options.statics]
 * @returns {StereoType}
 */
Model.init = function (collection, properties, options) {
    options = options || {};

    /**
     * Stereotypical Model
     * @param {Object} instance
     * @constructor Stereotype
     */
    function StereoType(instance) {
        StereoType.super_.call(this, collection, properties);
        instance = instance || {};
        _.merge(this, instance);
        _.merge(this, this.methods);
    }

    util.inherits(StereoType, Model);
    _.merge(this, mixins.static);
    if (options.statics) {
        _.merge(this, options.statics);
    }

    return StereoType;
};

module.exports = exports = Model;