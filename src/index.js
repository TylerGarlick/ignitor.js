import Arango from 'arangojs';
import Utilities from './utilities';


export Model from './model';

/**
 * Ignitor.js
 *
 *
 * @param {object|string} [connection] -
 * @param {object} options
 *
 * @returns {{db}}
 */
export default (connection, { autoCreateDb = true } = {}) => {
  
  let url = 'connection';
  if (typeof(connection) !== 'string') {
    url = Utilities.urls.convert(connection);
  } else {
    url = connection.toString();
  }
  
  const db = Arango({ url, databaseName: false });
  
  
  return {
    db,
    
    async setup({ databaseName = '', autoCreateDb = true } = {}) {
      const databases = await db.listDatabases();
      if (databaseName && !databases.includes(databaseName) && autoCreateDb) {
        const info = await db.createDatabase(databaseName);
        console.log(info);
        console.log(db.createDatabase);
        console.log(databases.includes('bogus'));
        console.log(databases);
      }
    }
  }
  
};


class Ignitor {
  
  constructor() {
    
  }
  
  
  async setup() {
    
  }
  
  
}
