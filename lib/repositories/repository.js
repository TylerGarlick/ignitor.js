'use strict';
var dbc = require('dbc.js'),
    helpers = require('./../infrastructure/helpers');

function Repository(collection, opts) {
    collection = collection.toLowerCase().trim();
    dbc([collection && collection.length > 0], "Collection is required");
    this.__.options = opts;
}
module.exports = Repository;

Object.defineProperties(Repository.prototype, {
    collection: { enumerable: true, writable: true, value: "" },
    all: {},
    byId: {},
    add: {},
    update: {},
    remove: {},
    removeAll: {},
    __: { writable: true, configurable: false, value: {} }
});

Object.defineProperties(Repository, {});

Object.defineProperties(Repository.prototype.__, {
    options: {enumerable: true, writable: true }
});

