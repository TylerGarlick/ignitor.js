export default (db) => {
  
  return {
    
    async execute(query, params) {
      return await db.query(query, params);
    },
    
    async executeAll(query, params) {
      const cursor = await this.execute(query, params);
      return await cursor.all();
    },
    
    async executeWithFirst(query, params) {
      const results = await this.executeAll(query, params);
      
      return results.reduce((prev, current) => {
        return current;
      }, []);
    }
    
    
  };
  
};
