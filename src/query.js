export default class {

  constructor(db) {
    this.db = db;
  }

  async execute(query, params) {
    return await this.db.query(query, params);
  }

  async executeAll(query, params) {
    return (await this.execute(query, params)).all();
  }

}
