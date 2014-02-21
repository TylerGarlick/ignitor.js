'use strict';

var utility = require('./utilities'),
    Repository = require('./repositories'),
    Model = require('./model'),
    Db = require('./database');

Object.defineProperties(Ignitor, {
    models: {
        value: {},
        enumerable: true,
        configurable: false
    }
});

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
        get: function () {
            return Db.connection;
        },
        enumerable: true, configurable: false
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
 * @param {String} [url]
 */
Ignitor.prototype.connect = function (url) {
    if (url && url.length > 0)
        Db._url = url;
    if (!Db._url || Db._url.length == 0)
        throw new Error('You must set Db.url or set the url of the Ignitor.connect(url) before you attempt to connect');
    return Db.connect(url);
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
exports = module.exports = new Ignitor();
exports.Repository = Repository;
