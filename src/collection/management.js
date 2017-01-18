import Indexes from './indexes';

export default class {

  constructor(db, collection) {
    this.collection = db.collection(collection);
    this.indexes = new Indexes(db, collection);
  }

  async get() {
    return await this.collection.get();
  }

  async rename(name) {
    return await this.collection.rename(name);
  }

  async clearAll() {
    return await this.collection.truncate();
  }

  async drop() {
    return await this.collection.drop();
  }

}
