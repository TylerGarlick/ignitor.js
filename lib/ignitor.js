'use strict';

var _ = require('lodash');
var inflection = require('inflection');
var dbc = require('dbc.js')


var Model = require('./model'),
    Repository = require('./repository'),
    Schema = require('./schema'),
    inflection = require('inflection'),
    dbc = require('dbc.js'),
    _ = require('lodash'),
    arango = require('arango');


function Ignitor() {
    Ignitor._ioc.register('repositories').as.value({});
    Ignitor._ioc.register('schemas').as.value({});
    Ignitor._ioc.register('models').as.value({});
}

Object.defineProperties(Ignitor, {
    _ioc: { enumerable: false, configurable: false, value: require('minioc') },
    _dbUrl: {enumerable: false, configurable: false, writable: true },
    _db: {enumerable: false, configurable: false, writable: true }
});

Object.defineProperties(Ignitor.prototype, {
    _container: { enumerable: false, configurable: false, get: function () { return Ignitor._ioc } },
    model: { enumerable: true, configurable: false,
        value: function (name, schema) {
            var self = this;
            if (schema instanceof Schema) {
                var model = self.models.register(name, schema);
                return model;
            }
        }},
    db: {enumerable: true, configurable: false,
        get: function () {
            if (Ignitor._dbUrl) {
                Ignitor._db = arango.Connection(Ignitor._dbUrl);
            } else if (!Ignitor._db) {
                throw new Error('You must connect.  ignitor.connect()')
            }
            return Ignitor._db;
        }},
    models: {enumerable: true, configurable: false,
        value: {
            all: function () {
                return Ignitor._ioc.get('models');
            },
            has: function (name) {
                var models = Ignitor._ioc.get('models');
                return _.has(models, name);
            },
            get: function (name) {
                if (this.has(name)) throw new Error('Model with name ' + name + ' is not registered');
                var models = Ignitor._ioc.get('models');
                return models[name];
            },
            register: function (name, schema) {
                var self = this;
                dbc(name && name.length > 0, "Model name is required");
                dbc(schema, "Schema is required");
                if (this.has(name)) throw new Error('Model with name ' + name + ' is already registered');
                var models = Ignitor._ioc.get('models');
                var collection = inflection.pluralize(name.toLowerCase());
                self.repositories.register(name, collection);
                self.schema.register(name, schema);

                models[name] = Model({}, {
                    collection: collection,
                    schema: schema,
                    repository: self.repositories.get(name)
                });
                return models[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Model with name ' + name + ' is not registered');
                var models = Ignitor._ioc.get('models');
                delete models[name];
            }
        }},
    repositories: {enumerable: true, configurable: false,
        value: {
            all: function () {
                return Ignitor._ioc.get('repositories');
            },
            has: function (name) {
                var repositories = Ignitor._ioc.get('repositories');
                return _.has(repositories, name);
            },
            register: function (name, collection) {
                var self = this;
                dbc(name && name.length > 0, "Repository name is required");
                dbc(collection && collection.length > 0, "Repository collection name is required");
                if (self.has(name)) throw new Error('Repository with name ' + name + ' is already registered');
                var repositories = Ignitor._ioc.get('repositories');
                repositories[name] = new Repository(collection);
                return repositories[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Repository with name ' + name + ' is not registered');
                var repositories = Ignitor._ioc.get('repositories');
                delete repositories[name];
            }
        }},
    schemas: {enumerable: true, configurable: false,
        value: {
            all: function () {
                return Ignitor._ioc.get('schemas');
            },
            has: function (name) {
                var repositories = Ignitor._ioc.get('schemas');
                return _.has(repositories, name);
            },
            register: function (name, schema) {
                dbc(name && name.length > 0, "Schema name is required");
                dbc(schema, "Schema is required");
                if (this.has(name)) throw new Error('Schema with name ' + name + ' is already registered');
                var schemas = Ignitor._ioc.get('schemas');
                schemas[name] = schema;
                return schemas[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Schema with name ' + name + ' is not registered');
                var schemas = Ignitor._ioc.get('schemas');
                delete schemas[name];
            }
        }}
});

exports = module.exports = new Ignitor();


/**
 * Connect to arangodb
 * @param {String} connectionUrl
 */
Ignitor.prototype.connect = function (connectionUrl) {
    dbc([connectionUrl && connectionUrl.length > 0], "Connection url is required to connect");
    Ignitor._dbUrl = connectionUrl;
    Ignitor._db = arango.Connection(Ignitor._dbUrl);
};


exports.Schema = Schema;
exports.Model = Model;
exports.Repository = Repository;
exports.Errors = require('./errors');