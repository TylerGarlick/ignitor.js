export default class {

  constructor(db, collection) {
    this.collection = db.collection(collection);
  }

  async all() {
    return await this.collection.indexes();
  }

  async get(name) {
    return await this.collection.index(name);
  }

  async create(options = {}) {
    return await this.collection.createIndex(options);
  }

  async drop(name) {
    return await this.collection.dropIndex(name);
  }

  async createGeoIndex(fields = [], options = {}) {
    return await this.collection.createGeoIndex(fields, options);
  }

  async createFulltextIndex(fields = [], options = {}) {
    return await this.collection.createFulltextIndex(fields, options);
  }

}
