var Inflection = require('inflection');

export var StringUtilities = {
  formatKey(key) {
    return key.toLowerCase().trim();
  },

  pluralize(val) {
    return Inflection.pluralize(val.toLowerCase());
  }
};