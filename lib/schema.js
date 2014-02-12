'use strict';
var dbc = require('dbc.js')
    , _ = require('lodash')
    ;

/**
 * Model Schema Definition
 *
 * @param definition - The definition of the object
 *
 * Example:
 * var definition = {
 *  name: {
 *    type: 'string',
 *    required: true
 *  },
 *  age: {
 *    type: 'numeric',
 *    min: 0,
 *    max: 100
 *  },
 *  email: {
 *    type: 'string',
 *    minLength: 6,
 *    maxLength: 512,
 *    required: true
 *  },
 *  isActive: {
 *    type: 'boolean',
 *    default: true
 *  }
 * }
 *
 * @param options - Any options for the schema
 *
 *  Example:
 *  var options = {
 *    enforceSchema: true
 *  };
 *
 * @constructor Schema
 */
function Schema(definition, options) {

    dbc([definition], "Schema Definition is required");

    this.definition = definition;
    this.options = options || {
        enforceSchema: false
    };

    Object.defineProperties(this, {
        _hooks: {
            enumerable: false,
            value: {
                pre: {
                    create: [],
                    update: [],
                    remove: [],
                    validate: []
                },
                post: {
                    create: [],
                    update: [],
                    remove: []
                }
            }
        },
        hooks: {
            enumerable: true,
            value: {
                pre: function (keyword, callback) {
                    var _this = this;
                    if (!_this._hooks[keyword])
                        throw new Error("Ignitor doesn't support pre #" + keyword);
                    _this.pre[keyword].push(callback);
                },
                post: function (keyword, callback) {
                    var _this = this;
                    if (!_this._hooks[keyword])
                        throw new Error("Ignitor doesn't support pre #" + keyword);
                    _this.pre[keyword].push(callback);
                },
                get: function (type, keyword) {
                    var _this = this;
                    var hooks = _this._hooks[type][keyword];
                    if (!hooks.length) {
                        return [
                            function (o, n) {
                                return n();
                            }
                        ];
                    } else {
                        return hooks;
                    }
                }
            }
        },
        definition: {
            enumerable: true,
            configurable: false,
            value: definition
        },
        options: {
            enumerable: true,
            configurable: true,
            writable: true
        }
    });

};

module.exports = Schema;