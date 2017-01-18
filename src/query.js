export default class {

  constructor(db) {
    this.db = db;
  }

  async execute(query, params) {
    return await this.db.query(query, params);
  }

  async executeAll(query, params) {
    const cursor = await this.execute(query, params);
    return await cursor.all();
  }

}
