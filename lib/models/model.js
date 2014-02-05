"use strict";

var _ = require('underscore');

function Model(values) {
    if (values) {
        _.extend(this, values);
    }
}
module.exports = Model;

// static functions
var all = function () {};
var byId = function (id) {};
var remove = function (id) {};

// instance functions
var save = function () {};
var isNew = function () {};
var isValid = function () {};
var toJSON = function () {};

Object.defineProperties(Model.prototype, {
    save: { enumerable: true, writable: false, configurable: false, value: save },
    isNew: { enumerable: true, writable: false, configurable: false, value: isNew },
    isValid: { enumerable: true, writable: false, configurable: false, value: isValid },
    toJSON: { enumerable: true, writable: false, configurable: false, value: toJSON },
    __: { enumerable: false, writable: false, configurable: false, value: { }}
});

Object.defineProperties(Model, {
    all: { enumerable: true, writable: false, configurable: false, value: all},
    byId: { enumerable: true, writable: false, configurable: false, value: byId },
    remove: { enumerable: true, writable: false, configurable: false, value: remove },
    __: {enumerable: true, writable: false, configurable: false, value: {
        collection: "",
        repository: {}
    }}
});

