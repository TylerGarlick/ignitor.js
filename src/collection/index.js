import Management from './management';

export default class {

  constructor(db, name) {
    this.collection = this.db.collection(name);

    this.management = new Management(db, name);
  }

  async all(options = {}) {
    if (options.kind) {
      return await this.collection.list(options.kind);
    }
    return await this.collection.all(options);
  }

  async random() {
    return await this.collection.any();
  }

  async first(options = {}) {
    return await this.collection.first(options);
  }

  async last() {
    return await this.collection.last(options);
  }

  async find(predicate = {}, options = {}) {
    return await this.collection.byExample(predicate, options);
  }

  async findFirstOne(predicate = {}) {
    return await this.collection.firstExample(predicate);
  }

  async remove(predicate = {}, options = {}) {
    return await this.collection.removeByExample(predicate, options);
  }

  async findAndReplace(predicate = {}, options = {}) {
    return await this.collection.replaceByExample(predicate, options);
  }

  async findAndUpdate(predicate = {}, options = {}) {
    return await this.collection.updateByExample(predicate, options);
  }

  async findByKeys(keys) {
    if (!Array.isArray(keys)) {
      keys = [].concat(keys);
    }
    return await this.collection.lookupByKeys(keys);
  }

  async removeByKeys(keys) {
    if (!Array.isArray(keys)) {
      keys = [].concat(keys);
    }
    return await this.collection.removeByKeys(keys);
  }

  async search(field = '', query = '', options = {}) {
    return await this.collection.fulltext(field, query, options);
  }


  async import(documents, options = {}) {
    return await this.collection.import(documents, options);
  }

  async bulkUpdate(documents = [], options = {}) {
    return await this.collection.bulkUpdate(documents, options);
  }

  async replaceOne(handle, value, options = {}) {
    return await this.collection.replace(handle, value, options);
  }

  async updateOne(handle, value, options = {}) {
    return await this.collection.update(handle, value, options);
  }

  async removeOne(handle, options = {}) {
    return await this.collection.remove(handle, options);
  }

  async save(document = {}) {
    return await this.collection.save(document);
  }

}
