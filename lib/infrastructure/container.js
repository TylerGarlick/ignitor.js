'use strict';

var dbc = require('dbc.js')
    , _ = require('lodash')
    ;

/**
 * @static Container
 */
Object.defineProperties(Container, {
    __root: {
        enumerable: false,
        value: {}
    },
    formatting: {
        enumerable: true,
        value: {
            toKey: function (name) {
                return name.toLowerCase().trim();
            }
        }
    }
});


/**
 *
 * @constructor Container
 */
function Container() {
    Object.defineProperties(this, {
        all: {
            enumerable: true,
            value: function () {
                return Container.__root;
            }
        },
        get: {
            enumerable: true,
            value: function (name) {
                var self = this;
                dbc([name && name.length > 0], "Name is required");

                var key = Container.formatting.toKey(name);
                if (!self.has(key)) throw new Error("Registration not found for " + name);

                return Container.__root[key];
            }
        },
        register: {
            enumerable: true,
            value: function (name, val, overwrite) {
                var self = this;
                overwrite = overwrite || false;
                dbc([name && name.length > 0], "Name is required");

                var key = Container.formatting.toKey(name);
                if (self.has(key)) {
                    if (!overwrite)
                        throw new Error("There is an object already registered for " + name);
                }

                Container.__root[key] = val;
            }
        },
        registerAll: {
            enumerable: true,
            value: function (entities) {
                _.forEach(_.keys(entities), function (name) {
                    var key = Container.formatting.toKey(name);
                    Container.__root[key] = entities[name];
                });
            }
        },
        unregister: {
            enumerable: true,
            value: function (name) {
                var self = this;
                dbc([name && name.length > 0], "Name is required");

                var key = Container.formatting.toKey(name);
                if (self.has(name)) {
                    delete Container.__root[key];
                }
            }
        },
        unregisterAll: {
            enumerable: true,
            value: function () {
                Container.__root = {};
            }
        },
        has: {
            enumerable: true,
            value: function (name) {
                dbc([name && name.length > 0], "Name is required");

                var key = Container.formatting.toKey(name);
                return _.has(Container.__root, key);
            }
        }
    });
};

module.exports = new Container();


