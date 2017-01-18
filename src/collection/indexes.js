export default (db, name) => {

  const collection = db.collection(name);

  return {

    async all() {
      return await collection.indexes();
    },

    async get(name) {
      return await collection.index(name);
    },

    async create(options = {}) {
      return await collection.createIndex(options);
    },

    async drop(name) {
      return await collection.dropIndex(name);
    },

    async createGeoIndex(fields = [], options = {}) {
      return await collection.createGeoIndex(fields, options);
    },

    async createFulltextIndex(fields = [], options = {}) {
      return await collection.createFulltextIndex(fields, options);
    }
  };

};
