'use strict';

var Repository = require('./repository'),
    _ = require('lodash'),
    arango = require('arango'),
    utilities = require('./utilities'),
    validate = require('jsonschema').validate;


exports = module.exports = Ignitor;

/**
 * Ignitor ODM
 * Ignitor's constructor that sets up the default settings, db, and models
 * @constructor
 */
function Ignitor() {};

Object.defineProperties(Ignitor, {
    models: {
        value: {},
        enumerable: false,
        configurable: false
    },
    db: {
        writable: true,
        enumerable: true,
        configurable: false
    },
    settings: {
        value: {
            pluralize: true
        },
        enumerable: true,
        configurable: false
    }
});
exports.db = Ignitor.db;
/**
 *
 * @param {String} url
 */
exports.connect = function (url) {
    if (!Ignitor.db) {
        Ignitor.db = arango.Connection(url);
    }
    return Ignitor.db;
};

/**
 * Register's a new model
 *
 * @param {String} name - The model's name, and the pluralization of the name will be the name of the collection
 * @param {Object} props - The definition of the object
 * @param {Object} [options]
 * @param {Object} [options.methods]
 * @param {Object} [options.statics]
 * @param {String} [options.collection]
 * @returns {Function}
 * @constructor
 */
exports.Model = function (name, props, options) {
    props = props || {};
    options = options || {};
    var key = utilities.strings.toKey(name);
    if (Ignitor.models[key]) throw new Error('Model already registered');
    var collection = options.collection || name;
    if (Ignitor.settings.pluralize) collection = utilities.strings.pluralize(collection);
    var methods = options.methods || {};
    var statics = options.statics || {};
    var repository = new Repository(collection, Ignitor.db);
    var m = Ignitor.models[key] = function (instance) {
        var self = this;
        instance = instance || {};

        Object.defineProperties(self, {
            _key: {
                writable: true,
                enumerable: true,
                configurable: false
            },
            _rev: {
                writable: true,
                enumerable: true,
                configurable: false
            },
            _id: {
                writable: true,
                enumerable: true,
                configurable: false
            },
            isNew: {
                get: function () {
                    return !self._id && !self._key;
                },
                enumerable: false,
                configurable: false
            },
            errors: {
                get: function () {
                    var self = this;
                    var result = validate(instance, { type: 'object', properties: self.properties}).errors || [];
                    return result;
                },
                enumerable: false,
                configurable: false
            },
            isValid: {
                get: function () {
                    return (self.errors || []).length == 0;
                },
                enumerable: false,
                configurable: false
            },

            collection: {
                value: collection,
                enumerable: false,
                configurable: false
            },

            repository: {
                value: new Repository(collection),
                enumerable: false,
                configurable: false
            },

            properties: {
                value: props,
                enumerable: false,
                configurable: false
            },

            methods: {
                value: methods,
                enumerable: false,
                configurable: false
            },


            relationships: {
                value: {},
                enumerable: false,
                configurable: false
            },

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

            save: {
                value: function (options, callback) {
                    var self = this;
                    options = options || {};
                    return self.repository.save(self, options, callback);
                },
                enumerable: true,
                configurable: false
            }
        });

        _.merge(self, instance);

        _.merge(self, this.methods);
    };

    _.merge(m, statics);
    m.collection = collection;
    m.repository = repository;
    Object.defineProperties(m, {
        all: {
            value: function(options){
                return m.repository.all(options);
            },
            enumerable: true,
            configurable: false
        }
    });

    return m;
};

exports.Repository = Repository;