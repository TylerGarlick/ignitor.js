"use strict";

var _ = require('underscore')
    , arango = require('arango')
    , nconf = require('nconf').env().file({ file: 'config/db.json'})
    ;


function Ignitor() {
    this.options = {
        connectionUrl: nconf.get('arango')
    };
    this.db = null;
    this._registry = [];

    this.Model = require('./model');
    this.Schema = require('./schema');
    this.Repository = require('./repository');
    this.Types = require('./types');
}

Ignitor.prototype.connect = function () {
    var self = this;
    self.db = arango.Connection(this.options.connectionUrl);
    return self.db;
}

Ignitor.prototype.model = function (name, schema, options) {
    var self = this;
    options = options || {};
    if (!name || name.length == 0) throw new Error('Name is required');
    var registryName = name.toLowerCase();

    if (schema) {
        if (schema instanceof self.Schema) {
            self._addRegistration(name, schema, self.Model, options);
            return self._registry[registryName].Model;
        }
    }

    if (!self._registry[registryName])
        throw new Error("Model " + name + " has not been registered");
    else {
        schema = schema || {};
        var registry = self._registry[registryName];
        var Model = registry.Model;
        Model.repository = registry.Repository;
        return new Model(schema);
    }
};

Ignitor.prototype._addRegistration = function (name, schema, model, options) {
    var self = this
        , options = options || {}
        , regName = name.toLowerCase()
        ;

    if (!name || name.length == 0) {
        throw new Error("Model name is required");
    }

    if (!schema) {
        throw new Error("Schema is required");
    }

    var collection;
    if (options.collection) {
        collection = options.collection;
    } else {
        collection = name.toLowerCase();
    }

    var repository;
    if (options.repository) {
        repository = options.repository;
    } else {
        repository = new self.Repository(collection, self.db);
    }

    if (self._registry[regName]) {
        self._registry[regName].Schema = schema;
    } else {
        self._registry[regName] = {
            Schema: schema,
            Model: model,
            Repository: repository
        }
    }
};


var ignitor = module.exports = exports = new Ignitor;



