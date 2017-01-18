export default (db, name) => {

  const collection = db.collection(name);

  return {

    async get() {
      return await collection.get();
    },

    async rename(name) {
      return await collection.rename(name);
    },

    async clearAll() {
      return await collection.truncate();
    },

    async drop() {
      return await collection.drop();
    }

  };

};
