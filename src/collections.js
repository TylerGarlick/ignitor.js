export default (db) => {

  return {

    async all() {
      return await db.collections();
    },

    async get(name) {
      const collection = db.collection(name);
      return await collection.get();
    },

    async create(name, options) {
      const collection = db.collection(name);
      return await collection.create(options);
    },

    async drop(name) {
      const collection = db.collection(name);
      return await collection.drop();
    },

    async exists(name) {
      const collections = await this.all();
      return collections.some(c => c.name === name);
    }
  };

};
