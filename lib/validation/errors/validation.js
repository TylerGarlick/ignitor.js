'use strict';
/**
 * Validation Error
 * @param {string|required} name
 * @param {object|optional} value
 * @param {string|optional} message
 * @constructor Validation Error
 */
function ValidationError(name, value, message) {
    Object.defineProperties(this, {
        name: { enumerable: true, configurable: false, value: name },
        value: { enumerable: true, configurable: false, value: value },
        message: { enumerable: true, configurable: false, value: message }
    });
}

module.exports = ValidationError;