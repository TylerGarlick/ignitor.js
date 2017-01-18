export default class {

  constructor(db) {
    this.db = db;
  }

  async all() {
    return await this.db.collections();
  }

  async get(name) {
    return await this.collection(name).get();
  }

  async create(name, options) {
    return await this.collection(name).create(options);
  }

  async exists(name) {
    return await this.all().includes(name);
  }

}
