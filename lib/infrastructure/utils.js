"use strict";
var inflector = require('inflection')()
  , dbc = require('dbc.js')
  ;

function Utils() {

}

/**
 * @property model - model helpers
 * @property container - model container registration helpers
 */
Object.defineProperties(Utils, {
  db: {enumerable: true, value: {}}
});

/**
 * Format's model name for registration
 * @param modelName
 * @returns {*|string}
 */
var containerFormatModelName = function (modelName) {
  return modelName.toLowerCase().trim();
};

/**
 * @property container - container helpers
 * @function formatModelName - formats the modelName for registration
 */
Object.defineProperties(Utils.container, {
  formatModelName: { enumerable: true, value: containerFormatModelName }
});


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

/**
 * ArangoDB collection helpers
 * @function create - Creates an arangodb collection
 * @function exists - Determines if a collection exists
 */
Object.defineProperties(Utils.db.collections, {
  create: {enumerable: true, writable: false, configurable: false, value: collectionCreate },
  exists: {enumerable: true, writable: false, configurable: false, value: collectionExists }
});


Object.defineProperties(Utils.repository, {

});


module.export = Utils;