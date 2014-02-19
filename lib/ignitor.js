'use strict';

var Model = require('./model'),
    Repository = require('./repository'),
    Schema = require('./schema'),
    inflection = require('inflection'),
    dbc = require('dbc.js'),
    arango = require('arango');

exports = module.exports = new Ignitor();

function Ignitor() {
    this._container.register('repositories').as.value({});
    this._container.register('schemas').as.value({});s
    this._container.register('models').as.value({});
}

Object.defineProperties(Ignitor, {
    _ioc: { enumerable: false, configurable: false, value: require('minioc') },
    _dbUrl: {enumerable: false, configurable: false, writable: true },
    _db: {enumerable: false, configurable: false, writable: true }
});

Object.defineProperties(Ignitor.prototype, {
    _container: { enumerable: false, configurable: false, value: Ignitor._ioc },
    Model: { enumerable: true, configurable: false,
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
                return this._container.get('models');
            },
            has: function (name) {
                var models = this._container.get('models');
                return _.has(models, name);
            },
            get: function (name) {
                if (this.has(name)) throw new Error('Model with name ' + name + ' is not registered');
                var models = this._container.get('models');
                return models[name];
            },
            register: function (name, schema) {
                dbc(name && name.length > 0, "Model name is required");
                dbc(schema, "Schema is required");
                if (this.has(name)) throw new Error('Model with name ' + name + ' is already registered');
                var models = this._container.get('models');
                models[name] = Model({}, {
                    collection: inflection.pluralize(name),
                    schema: schema,
                    repository: repository
                });
                return models[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Model with name ' + name + ' is not registered');
                var models = this._container.get('models');
                delete models[name];
            }
        }},
    repositories: {enumerable: true, configurable: false,
        value: {
            all: function () {
                return this._container.get('repositories');
            },
            has: function (name) {
                var repositories = this._container.get('repositories');
                return _.has(repositories, name);
            },
            register: function (name, collection) {
                dbc(name && name.length > 0, "Repository name is required");
                dbc(collection && collection.length > 0, "Repository collection name is required");
                if (this.has(name)) throw new Error('Repository with name ' + name + ' is already registered');
                var repositories = this._container.get('repositories');
                repositories[name] = new Repository(collection);
                return repositories[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Repository with name ' + name + ' is not registered');
                var repositories = this._container.get('repositories');
                delete repositories[name];
            }
        }},
    schemas: {enumerable: true, configurable: false,
        value: {
            all: function () {
                return this._container.get('schemas');
            },
            has: function (name) {
                var repositories = this._container.get('schemas');
                return _.has(repositories, name);
            },
            register: function (name, schema) {
                dbc(name && name.length > 0, "Schema name is required");
                dbc(schema, "Schema is required");
                if (this.has(name)) throw new Error('Schema with name ' + name + ' is already registered');
                var schemas = this._container.get('schemas');
                schemas[name] = schema;
                return schemas[name];
            },
            unregister: function (name) {
                if (this.has(name)) throw new Error('Schema with name ' + name + ' is not registered');
                var schemas = this._container.get('schemas');
                delete schemas[name];
            }
        }}
});

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