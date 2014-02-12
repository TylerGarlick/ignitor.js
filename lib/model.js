'use strict';

var Schema = require('./schema')
    , _ = require('lodash')
    ;

function Model(instance) {
    instance = instance || {};

    if (instance instanceof Schema) {
        this._schema = instance;
    } else {
        _.extend(this, instance);
    }

    Object.defineProperties(this, {
        _id: {
            value: instance._id || null,
            enumerable: true,
            writable: false
        },
        _key: {
            value: instance._id || null,
            enumerable: true,
            writable: false
        },
        _rev: {
            value: instance._id || null,
            enumerable: true,
            writable: false
        },
        _schema: {
            enumerable: true,
            configurable: false,
            writable: true
        },
        _repository: {
            enumerable: true,
            writable: true
        },
        _isNew: {
            enumerable: true,
            configurable: false,
            get: function () {
                return !this._key;
            }
        }
    });
}


module.exports = Model;