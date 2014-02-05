"use strict";

var dbc = require('dbc.js'),
    _ = require('underscore');

function Helpers() {}
module.exports = Helpers;


/**
 * Removes any _ prefixed fields
 * @param {object|required} instance
 * @returns {{json}}
 */
var removePrivateFields = function (instance) {
    var json = {};
    if (!instance) {
        instance = {};
    }

    _.forEach(_.keys(instance), function (key) {
        if (key.indexOf("_") === -1) {
            json[key.toString()] = instance[key];
        }
    });

    return json;
};

/**
 * Turns a string into lowercase and trims it
 * @param {string} val
 * @returns {string}
 */
var stringLowerCaseAndTrim = function (val) {
    return val.toLowerCase().trim();
};

/**
 * Format's model name for registration
 * @param modelName
 * @returns {*|string}
 */
var containerFormatModelName = function (modelName) {
    return modelName.toLowerCase().trim();
};

/**
 * Determines if the collection exists
 * @param name - collection's name
 */
var collectionExists = function (name) {
    try {
        dbc([name && name.length > 0], "Collection name is required");
    } catch (err) {

    }
};

/**
 * Creates a collection
 * @param {string} name - Name of the Collection
 * @param {object} [options]
 */
var collectionCreate = function (name, options) {
    options = options || {};
};

var collectionSetup = function (name, options) {
    if (!this.db.collections.exists(name)) {
        this.db.collections.create(name, options);
    }
};

/**
 * @property model - model helpers
 * @property container - model container registration helpers
 */
Object.defineProperties(Helpers, {
    db: {enumerable: true,
        value: {
            collections: {
                create: { enumerable: true, configurable: false, value: collectionCreate },
                exists: { enumerable: true, configurable: false, value: collectionExists },
                setup: { enumerable: true, configurable: false, value: collectionSetup }
            }
        } },
    container: { enumerable: true, writable: true,
        value: {
            formatModelName: { enumerable: true, value: containerFormatModelName }
        } },
    objects: {enumerable: true, writable: false,
        value: {
            removePrivateFields: removePrivateFields
        } },
    strings: { enumerable: true, configurable: false,
        value: {
            formatting: {
                toLowerCaseAndTrim: stringLowerCaseAndTrim
            }
        } },
    repository: {enumerable: true, configurable: false,
        value: stringLowerCaseAndTrim }
});