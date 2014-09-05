import {Database} from './database';
import {StringUtilities} from './utilities';
import {Model} from './model';

var internals = {
  models: {},
  settings: {
    pluralize: true
  }
};


export var Ignitor = {

  /**
   * Connect
   * @param url
   */
  connect(url) {
    this.db = Database.connect(url);
  },

  /**
   * Register a model
   * @param {string} name
   * @param {object} schema
   * @param {object} [options]
   * @returns {object}
   */
  model(name, schema, options = { methods: {}, statics: {} }) {

    var key = StringUtilities.formatKey(name);
    var shouldPluralize = options.pluralize || internals.settings.pluralize;
    this.collection = shouldPluralize ? StringUtilities.pluralize(name) : name;

    if (options.collection)
      this.collection = options.collection;

    return internals.models[key] = Model.initialize(this.collection, schema, options);
  },

  /**
   * Get all the models
   * @returns {*}
   */
  get models() {
    return internals.models;
  }

};