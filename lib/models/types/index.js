"use strict";

module.exports = function () {
  return {
    String: require('./string'),
    Numeric: require('./numeric'),
    Date: require('./date'),
    Array: require('./array'),
    Collection: require('./collection'),
    Key: require('./key')
  }
};