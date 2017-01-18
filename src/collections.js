export default class {

  constructor(db) {
    this.db = db;
  }

  async all() {
    return await this.db.collections();
  }

  async get(name) {
    const collection = this.db.collection(name);
    return await collection.get();
  }

  async create(name, options) {
    const collection = this.db.collection(name);
    return await collection.create(options);
  }

  async drop(name) {
    const collection = this.db.collection(name);
    return await collection.drop();
  }

  async exists(name) {
    const collections = await this.all();
    return collections.some(c => c.name === name);
  }

}
