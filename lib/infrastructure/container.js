'use strict';

var _ = require('underscore'),
    IgnitorError = require('../models/errors'),
    dbc = require('dbc.js');

/**
 * Model Container
 * @constructor
 */
function Container() { }
module.exports = Container;

var _infrastructure = {};
Object.defineProperties(_infrastructure, {
    registry: { enumerable: false, writable: true, value: {} }
});


Object.defineProperties(Container, {
    has: { enumerable: true, writable: false,
        value: function (modelName) {
            modelName = modelName.toLowerCase();
            return _.has(Container.__.registry, modelName);
        }},
    register: { enumerable: true, writable: false,
        value: function (modelName, obj, options) {
            obj = obj || {};
            options = options || {};
            try {
                dbc([modelName && modelName.length > 0], "Model Name is required");
            } catch (err) {
                if (err instanceof dbc.ContractError) {
                    throw new IgnitorError.ValidationError({errors: [new IgnitorError.ValidationError.Error('modelName', modelName, 'Model name is required')]});
                }
            }
        }},
    get: { enumerable: true, writable: false,
        value: function (modelName) {
            var registryName = modelName.toLowerCase();
            if (!this.has(registryName)) {
                throw new IgnitorError.ModelNotFoundError("Model " + modelName + " not found ", { modelName: modelName });
            }

            return Container.__.registry[registryName];
        } },
    __: { enumerable: false, writable: true, value: _infrastructure }
});