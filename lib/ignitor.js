'use strict';

var arango = require('arango'),
    utility = require('./utilities'),
    Repository = require('./repository'),
    Model = require('./model');

Object.defineProperties(Ignitor, {
    models: {
        value: {},
        enumerable: true,
        configurable: false
    }
})

/**
 * Ignitor ODM
 * Ignitor's constructor that sets up the default settings, db, and models
 * @constructor
 */
function Ignitor() { }

Object.defineProperties(Ignitor.prototype, {
    models: {
        value: Ignitor.models,
        enumerable: true,
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

/**
 *
 * @param {String} url
 */
Ignitor.prototype.connect = function (url) {
    var self = this;
    if (!self.db) {
        self.db = arango.Connection(url);
    }
    return self.db;
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
Ignitor.prototype.Model = function (name, props, options) {
    var self = this;
    props = props || {};
    options = options || {};
    options.methods = options.methods || {};
    options.statics = options.statics || {};
    var key = utility.strings.toKey(name);
    if (Ignitor.models[key]) throw new Error('Model already registered');
    var collection = options.collection || name;
    if (self.settings.pluralize) collection = utility.strings.pluralize(collection);
    return Ignitor.models[key] = Model.init(collection, props, options);
};

exports.Repository = Repository;

exports = module.exports = new Ignitor();