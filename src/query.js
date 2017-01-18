export default (db) => {

  return {
    async execute(query, params) {
      return await db.query(query, params);
    },

    async executeAll(query, params) {
      const cursor = await this.execute(query, params);
      return await cursor.all();
    }
  };

};
