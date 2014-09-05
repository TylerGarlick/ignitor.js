var Promise = require('bluebird'), _ = require('lodash'), Validator = require('jsonschema').validate;

import {database} from './database';

/**
 * Model
 */
export class Model {

  /**
   * Model constructor
   * @constructor
   * @param collection
   * @param properties
   */
    constructor(collection, properties) {
    this._key = null;
    this._rev = null;
    this._id = null;

    this.collection = collection;
    this.properties = properties;
    this.methods = {};
    //this.db = Promise.promisifyAll(database.db);

    this.hooks = {
      validating: {
        pre: [],
        post: []
      },

      saving: {
        pre: [],
        post: []
      },

      deletion: {
        pre: [],
        post: []
      }
    }
  }

  get isNew() {
    return !this._id && !this._key;
  }

  get errors() {
    var validationErrors = [];
    if (this.properties)
      return Validator(this, { type: 'object', properties: this.properties }).errors || validationErrors;

    return validationErrors;
  }

  get isValid() {
    return this.errors.length > 0;
  }


  static all(options) {
    return this.db.simple.listAsync(this.collection, options);
  }

  static findByKey(id) {
    return this.db.simple.firstByExampleAsync(this.collection, { _key: id });
  }

  static find(predicate, options = {}) {
    return this.db.simple.exampleAsync(this.collection, predicate, options);
  }

  static query(query, params = {}, options = {}) {
    return this.db.query.execAsync(query, params, options);
  }

  static exists(predicate, options = {}) {
    return this.db.simple.firstByExampleAsync(this.collection, predicate, options);
  }

  static save(entity, options = { createCollection: true, waitForSync: true }) {
    if (entity._id) {
      if (entity._id) delete entity._id;
      if (entity._key) delete entity._key;
      if (entity._rev) delete entity._rev;

      return this.db.document.putAsync(entity._id, entity)
        .then(this.single(entity._id));
    } else
      return this.db.createAsync(this.collection, entity, options)
        .then(this.single(entity._id));
  }

  static delete(id, options = {}) {
    return this.db.document.deleteAsync(id, options);
  }

  static deleteAll(predicate, options = {}) {
    return this.db.simple.removeByExampleAsync(this.collection, predicate, options);
  }

  static initialize(collection, schema, options = {}) {

    class Stereotype extends Model {
      constructor(instance) {
        super(collection, schema);

        _.merge(this, instance);
        _.merge(this, this.methods);
      }
    }

    //TODO: Setup Statics

    if (options.statics) {
      _.merge(Stereotype, options.statics);
    }

    return Stereotype;
  }


}