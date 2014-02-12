'use strict';

var EventEmitter = require('events').EventEmitter
    , Database = require('./config/database')
    , Repository = require('./repository')
    , util = require('util')
    , inflect = require('inflect')
    , registry = require('./infrastructure/container')
    ;


/**
 * Ignitor: ArangoDb's ODM
 *
 * Example Usage:
 *
 * @constructor
 * @property db - ArangoDB Connection
 * @property options - Options
 */
function Ignitor() {
    Ignitor.super_.call(this);

    Object.defineProperties(this, {
        _registry: {
            enumerable: false,
            value: registry
        },
        Types: {
            enumerable: true,
            value: {
                Schema: require('./schema'),
                Model: require('./model')
            }
        }
    });
}

util.inherits(Ignitor, EventEmitter);

/**
 * Register a Model, or create a new model
 * @param name - the name of the model
 * @param {Schema|object} obj - Schema or instance variables for object.
 * @param options
 */
Ignitor.prototype.model = function (name, obj, options) {
    var self = this;
    options = options || {};
    obj = obj || {};

    if (obj instanceof self.Types.Schema) {
        var repo = new Repository({
            db: Database.connection,
            collection: inflect.pluralize(name)
        });
        var reg = {
            Model: self.Types.Model,
            schema: obj,
            repository: repo,
            options: options
        };

        self._registry.register(name, reg);
        return reg.Model;
    } else {
        var reg = self._registry.get(name);

        var instance = reg.Model(obj);
        instance._schema = reg.schema;
        instance._repository = reg.repository;

        return instance;
    }
};

module.exports = new Ignitor();