import {Database} from './database';
import {StringUtilities} from './utilities';

export var Ignitor = {

  models: {},

  settings: {
    pluralize: true
  },

  connect(url) {
    this.db = Database.connect(url);
  },

  model(name, schema, options = { methods: {}, statics: {}}) {

    var key = StringUtilities.formatKey(name);
    this.collection = this.settings.pluralize ? StringUtilities.pluralize(name) : name;

    if (options.collection)
      this.collection = options.collection;

    return this.models[key] = Model.initialize(this.collection, schema, options);
  }

};