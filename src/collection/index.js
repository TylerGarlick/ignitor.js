import Management from './management';
import Indexes from './indexes';

export default (db, name) => {

  const collection = db.collection(name);
  const indexes = Indexes(db, name);
  const management = Management(db, name);

  return {

    indexes,

    management,

    async all(options = {}) {
      if (options.kind) {
        return await collection.list(options.kind);
      }
      return await collection.all(options);
    },

    async random() {
      return await collection.any();
    },

    async first(options = {}) {
      return await collection.first(options);
    },

    async last() {
      return await collection.last(options);
    },

    async find(predicate = {}, options = {}) {
      return await collection.byExample(predicate, options);
    },

    async findFirstOne(predicate = {}) {
      return await collection.firstExample(predicate);
    },

    async remove(predicate = {}, options = {}) {
      return await collection.removeByExample(predicate, options);
    },

    async findAndReplace(predicate = {}, options = {}) {
      return await collection.replaceByExample(predicate, options);
    },

    async findAndUpdate(predicate = {}, options = {}) {
      return await collection.updateByExample(predicate, options);
    },

    async findByKeys(keys) {
      if (!Array.isArray(keys)) {
        keys = [].concat(keys);
      }
      return await collection.lookupByKeys(keys);
    },

    async removeByKeys(keys) {
      if (!Array.isArray(keys)) {
        keys = [].concat(keys);
      }
      return await collection.removeByKeys(keys);
    },

    async search(field = '', query = '', options = {}) {
      return await collection.fulltext(field, query, options);
    },

    async import(documents, options = {}) {
      return await collection.import(documents, options);
    },

    async bulkUpdate(documents = [], options = {}) {
      return await collection.bulkUpdate(documents, options);
    },

    async replaceOne(handle, value, options = {}) {
      return await collection.replace(handle, value, options);
    },

    async updateOne(handle, value, options = {}) {
      return await collection.update(handle, value, options);
    },

    async removeOne(handle, options = {}) {
      return await collection.remove(handle, options);
    },

    async save(document = {}) {
      return await collection.save(document);
    }

  };

};
